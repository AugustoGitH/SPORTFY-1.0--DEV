const jwt = require("jsonwebtoken")
const User = require("../db/models/User")

module.exports = {
    async userPersonalData(req, res){
        const token = req.cookies.tokenAuthorization
        try{
            const JSONToken = jwt.verify(token, process.env.TOKEN_SECRET)
            const user = await User.findOne({_id: JSONToken.id })
            const dataSend = {
                fullName: `${user.name} ${user.surname}`,
                dateOfBirth: user.dateOfBirth,
                cpf: user.cpf.substring(0, 3) + ("*").repeat(8),
                telephone: user.telephone.replace(/\+/g, "").substring(0, 11),
                email: user.email,
                notifications: user.notifications
            }

            res.status(200).send({message: "Dados pessoais resgatados com sucesso!", error: false, data: {personalData: dataSend}})
        }catch(e){
            console.log(e)
            res.send(401).send({message: "Ocorreu um erro ao resgatar dados pessoais do usuario. Verifique o erro no console!", error: true, data: null})
        }
    },
    async userAddressData(req, res){
        const token = req.cookies.tokenAuthorization
        try{
            const JSONToken = jwt.verify(token, process.env.TOKEN_SECRET)
            const user = await User.findOne({_id: JSONToken.id })
            const dataSend = {
                addresses: user.addresses.map(addr=> {
                    return {
                        cep: addr.cep,
                        city: addr.city,
                        nameOfStreet: addr.nameOfStreet,
                        number: addr.number,
                        neighborhood: addr.neighborhood,
                        state: addr.state
                    }
                })
            }

            res.status(200).send({message: "Endereços resgatados com sucesso!", error: false, data: {addressesData: dataSend}})
        }catch(e){
            console.log(e)
            res.send(401).send({message: "Ocorreu um erro ao resgatar endereços do usuario. Verifique o erro no console!", error: true, data: null})
        }
    }
}