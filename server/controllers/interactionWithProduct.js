
const Product = require("../db/models/Product")
const jwt = require("jsonwebtoken")

module.exports = {
    view: async (req, res)=>{
        const idProduct = req.body.idProduct
        try{
            const statusInUpdate = await Product.findByIdAndUpdate(idProduct, { $inc: {views: 1}})
            if(!statusInUpdate) return res.status(401).send({message: "Produto não foi encontrado!", error: true})
            return res.status(200).send({message: "A ação de visualizar o produto foi realizada!", error: false})
        }catch(e){
            console.log(e)
            return res.status(500).send({message: "A ação de visualizar o produto não foi realizada! Consulte o console.", error: true})
        }
    },
    like: async (req, res)=>{
        const idProduct = req.body.idProduct
        const token = req.cookies.tokenAuthorization
        try{
            const jwtJSON = jwt.verify(token, process.env.TOKEN_SECRET)
            const statusInUpdate = await Product.findByIdAndUpdate(idProduct, { $push: {likes: {idUser: jwtJSON.id, data: new Date()}}})
            if(!statusInUpdate) return res.status(401).send({message: "Produto não foi encontrado!", error: true})
            return res.status(200).send({message: "A ação de favoritar o produto foi realizada!", error: false})
        }catch(e){
            console.log(e)
            return res.status(500).send({message: "A ação de favoritar o produto não foi realizada! Consulte o console.", error: true})
        }
    }
}