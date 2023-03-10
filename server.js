const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const app = express()


const routersLoginAndRegister = require("./server/routers/loginAndRegister")
const routersCheckForRoutes = require("./server/routers/checkForRoutes")
const routersCollectionProducts = require("./server/routers/collectionProducts")
const routersUserAcess = require("./server/routers/userAcess")
const routersAdminAcess = require("./server/routers/adminAcess")
const routersInteractionProduct = require("./server/routers/interactionWithProduct")

app.use(bodyParser.json({limit: '99999mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '99999mb', extended: true}))

app.use(cookieParser())

app.use("/api", routersLoginAndRegister)
app.use("/api/check-routes", routersCheckForRoutes)
app.use("/api/products", routersCollectionProducts)
app.use("/api/user", routersUserAcess)
app.use("/api/admin", routersAdminAcess)
app.use("/api/product/interaction", routersInteractionProduct)

if(process.env.NODE_ENV !== "development"){

    app.use(express.static(path.join(__dirname, "client/build")))
    app.get("*", (req, res)=>{
        try{
            res.sendFile(path.join(__dirname, "client/build/index.html"))
        }
        catch(e) {console.log(e)}
    })
}



app.listen(process.env.PORT, ()=> console.log("Servidor rodando na porta " + process.env.PORT))

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_CONNECTION_URL, erro=> erro?console.log(erro):console.log("Banco de dados carregado!"))