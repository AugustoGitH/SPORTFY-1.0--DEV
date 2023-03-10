const jwt = require("jsonwebtoken")
const Product = require("../db/models/Product")


module.exports = {
    async addProduct(req, res){
        const token = req.cookies.tokenAuthorization
        try{
            const JSONToken = jwt.verify(token, process.env.TOKEN_SECRET)
            const {shoeSizes, clothingSizes, colors, gender, composition, sewing, obs, guarantee, origin, indicatesTo, name, brand , ...rest } = req.body
            const product = new Product({
                ...rest,
                options: {
                    shoeSizes, clothingSizes, colors
                },
                specifications: {
                    gender, composition, sewing, obs, guarantee, origin, indicatesTo, name, brand
                },
                addedBy: {email: JSONToken.email, id: JSONToken.id }
            })
            product.save().then(status=>{
                res.status(200).send({message: "Produto adicionado no banco de dados com sucesso!", error: false})
            }).catch(e=>{
                console.log(e)
                res.status(500).send({message: "Ocorreu um erro ao adicionar o produto no banco de dados! Verifique o console.", error: true})
            })
        }catch(e){
            console.log(e)
            res.send(401).send({message: "Ocorreu um erro ao resgatar dados pessoais do usuario. Verifique o erro no console!", error: true, data: null})
        }
    },
    async getProducts(_req, res){
        try{
            const products = await Product.find({})
            setTimeout(()=>{
                res.status(200).send({message: "Produtos resgatados com sucesso!", error: false, data: {products: products.map(prod=> ({
                    cover: prod.cover,
                    title: prod.title,
                    description: prod.description,
                    views: prod.views,
                    likes: prod.likes,
                    addedBy: prod.addedBy.email,
                    avaliation: prod.avaliation
                })  )}})
            }, 1000)
        }catch(e){
            console.log(e)
            res.status(200).send({message: "Ocorreu um erro ao resgatar os produtos! Consulte o console.", error: true})
        }
    }
    
}