const express = require("express")
const router = express.Router()
const controllersAdminAcess = require("../controllers/adminAcess")
const jwt = require("jsonwebtoken")

router.use((req, res, next)=>{
    const token = req.cookies.tokenAuthorization
    if(!token) return res.status(202).send({message: "Visitante não possui um token de acesso!", user: false})
    try{
        const JSONToken = jwt.verify(token, process.env.TOKEN_SECRET)
        if(!JSONToken.admin) return res.status(202).send({message: "Um usuário não tem acesso a essas requisições!", user: true})
        next()
    }catch(e){
        res.status(202).send({message: "Visitante possui um token de acesso inválido!", user: false})
    }
})

router.post("/admin-add-product", controllersAdminAcess.addProduct)
router.get("/get-products", controllersAdminAcess.getProducts)

module.exports = router