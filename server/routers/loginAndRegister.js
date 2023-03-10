const express = require("express")
const controllersLoginAndRegister = require("../controllers/loginAndRegister")
const router = express.Router()

router.post("/register", controllersLoginAndRegister.register)
router.post("/login", controllersLoginAndRegister.login)

router.post("/register/admin/:token", controllersLoginAndRegister.register)
router.post("/login/admin/:token", controllersLoginAndRegister.login)

router.get("/fetch-email/:email", controllersLoginAndRegister.email)
router.get("/logout", controllersLoginAndRegister.logout)
module.exports = router