const User = require("../db/models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {findLogginIn} = require("../db/searchScripts")

module.exports = {
    async register(req, res){
        const {month, year, day, orderSMS, orderWhatsapp, offersWhatsapp, password, complement, cep, city, nameOfStreet, neighborhood, number, referencePoint, state, typeOfAddress, ...rest} = req.body
        const user = new User({
            password: bcrypt.hashSync(password),
            dateOfBirth: `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`,
            addresses: {complement, cep, city, nameOfStreet, neighborhood, number, referencePoint, state, typeOfAddress},
            notifications: {
                orderSMS, orderWhatsapp, offersWhatsapp
            },
            ...rest
        })

        const [insideUserEmail, insideUserCPF] = await Promise.all([
            User.findOne({email: rest.email}), User.findOne({cpf: rest.cpf})
        ])

        if(insideUserEmail || insideUserCPF){
            const message = insideUserEmail ? "Seu e-mail já está registrado em nosso sistema." : "Seu cpf já está registrado em nosso sistema."
            return res.status(428).send({message, error: true})
        }
        user.save().then(status=>{
            console.log(`Usuario {${req.body.email}} foi registrado em nosso sistema!`)
            return res.status(201).send({message: `Usuario {${req.body.email}} foi registrado em nosso sistema!`, error: false})
        }).catch(e=>{
            console.log(`Ocorreu um erro ao registrar {${req.body.email}} no sistema!`)
            console.log("Erro: " + e)
            return res.status(500).send({message: `Ocorreu um erro interno na tentativa de registrar o usuario. Contate o console!`, error: true})
        })
    },
    async email(req, res){
        const {email} = req.params
        const insideUserEmail = await User.findOne({email})
        if(insideUserEmail) return res.status(226).send({message: "Este email já está registrado em nosso sistema!", valid: false})
        res.status(226).send({message: "Este email não está registrado em nosso sistema!", valid: true})
    },
    async login(req, res){
        const {email, password} = req.body
        const resultSearchUser = await findLogginIn({email})
        if(!resultSearchUser) return res.status(401).send({message: "Email ou senha incorretos!", error: true})

        const passAndUserMatch = bcrypt.compareSync(password, resultSearchUser.data.password)
        if(!passAndUserMatch) return res.status(401).send({message: "Email ou senha incorretos!", error: true})
        try{
            const tokenJWT = jwt.sign({email, id: resultSearchUser.data._id, name: resultSearchUser.data.name, admin: resultSearchUser.admin }, process.env.TOKEN_SECRET)
            res.cookie("tokenAuthorization", tokenJWT, {
                secure: true,
                httpOnly: true,
                expiresIn: resultSearchUser.admin ? 8640 : false,
            })
            res.status(200).send({message: "Login realizado com sucesso!", error: false, data: !resultSearchUser.admin ? {infosUser: {email: resultSearchUser.data.email, cep: resultSearchUser.data.addresses[0].cep}} : null })
        }catch(e){
            console.log("Erro: " + e)
            res.status(200).send({message: "Ocorreu um erro ao realizar o login. Verifique o erro no console.", error: true})
        }
    },
    logout(_req, res){
        try{
            res.clearCookie("tokenAuthorization")
            res.status(200).send({message: "Logout concluido!", logout: true})
        }catch(e){
            console.log(e)
            res.status(500).send({message: "Ocorreu um erro ao fazer o logout. Verifique o console!", logout: false})
        }
    }
}