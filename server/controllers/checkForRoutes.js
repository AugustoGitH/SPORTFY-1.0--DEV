
const jwt = require("jsonwebtoken")

module.exports = {
    token(req, res){
        const token = req.cookies.tokenAuthorization
        if(!token) return res.status(202).send({message: "O visitante não possui um token!", user: false, data: null})
        try{
            const JSONToken = jwt.verify(token, process.env.TOKEN_SECRET)
            res.status(202).send({message: "O visitante está logado!", user: true, admin: JSONToken.admin, data: {name: JSONToken.name}})
        }catch(e){
            res.status(202).send({message: "O visitante possui um token inválido!", user: false, data: null})
        }
    },
    user(req, res){
        const token = req.cookies.tokenAuthorization
        if(!token) return res.status(202).send({message: "O visitante não possui um token!", token: false, data: null})
        try{
            const JSONToken = jwt.verify(token, process.env.TOKEN_SECRET)
            if(JSONToken.admin) return res.status(202).send({message: "O administrador não possui acesso a essa rota!", token: true, admin: JSONToken.admin, data: {name: JSONToken.name}})
            res.status(202).send({message: "O usuário possui acesso!", token: true, admin: JSONToken.admin, data: {name: JSONToken.name}})
        }catch(e){
            res.status(202).send({message: "O visitante possui um token inválido!", token: false, data: null})
        }
    },
    admin(req, res){
        const token = req.cookies.tokenAuthorization
        if(!token) return res.status(202).send({message: "O visitante não possui um token!", token: false, data: null})
        try{
            const JSONToken = jwt.verify(token, process.env.TOKEN_SECRET)
            if(!(JSONToken.admin)) return res.status(202).send({message: "O usuário ninão possui acesso a essa rota!", token: true, admin: JSONToken.admin, data: {name: JSONToken.name}})
            res.status(202).send({message: "O administrador possui acesso!", admin: JSONToken.admin, token: true, data: {name: JSONToken.name}})
        }catch(e){
            res.status(202).send({message: "O visitante possui um token inválido!", token: false, data: null})
        }
    }
}