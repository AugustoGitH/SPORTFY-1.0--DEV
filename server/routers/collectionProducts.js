
const express = require("express")
const router = express.Router()
const controllerCollectionProducts = require("../controllers/collectionProducts")

router.get("/product-infos/:id", controllerCollectionProducts.infos )

router.get("/sportive-articles/:article", controllerCollectionProducts.filterArticles)
router.get("/top-selling-products", controllerCollectionProducts.topSelling)
router.get("/most-popular-products", controllerCollectionProducts.mostPopular)

router.get("/products-search", controllerCollectionProducts.search)


module.exports = router