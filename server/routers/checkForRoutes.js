const express = require("express")
const router = express.Router()
const controllerCheckForRoutes = require("../controllers/checkForRoutes")

router.get("/token", controllerCheckForRoutes.token)
router.get("/user", controllerCheckForRoutes.user)
router.get("/admin", controllerCheckForRoutes.admin)

module.exports = router