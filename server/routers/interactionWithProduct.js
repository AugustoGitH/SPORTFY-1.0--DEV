const express = require("express")
const controllersInteraction = require("../controllers/interactionWithProduct")
const router = express.Router()

router.put("/view", controllersInteraction.view)
router.put("/like", controllersInteraction.like)

module.exports = router