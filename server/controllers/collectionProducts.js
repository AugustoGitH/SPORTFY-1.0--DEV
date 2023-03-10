const Product = require("../db/models/Product")

module.exports = {
    async filterArticles(req, res){
        const articleSent = req.params.article.toLowerCase()

        const predefinedArticles = ["volleyball", "basketball", "football", "swimming"]

        if(!predefinedArticles.includes(articleSent)) return res.status(401).send({message: "Artigo de pesquisa inválido, busque a documentação para listar todos os artigos disponiveis!", error: true})

        try{
            const products = await Product.find({})
            const productsSected = products.filter(pr=> pr.articleType === articleSent)
            res.status(200).send({message: "Dados resgatados com sucesso!", error: false, data:{ articleSearch: articleSent, products:  products.map(templateMapsProduct.card) } })
        }catch(e){
            console.log(e)
            res.status(500).send({message: "Ocorreu um erro ao resgatar os dados! Consulte o console.", error: true})
        }
    },
    async topSelling(req, res){
        try{
            const products = await Product.find({})

            res.status(200).send({message: "Dados resgatados com sucesso!", error: false, data:{ products:  products.map(templateMapsProduct.card) } })
        }catch(e){
            console.log(e)
            res.status(500).send({message: "Ocorreu um erro ao resgatar os dados! Consulte o console.", error: true})
        }
    },
    async mostPopular(req, res){
        try{
            const products = await Product.find({})
            res.status(200).send({message: "Dados resgatados com sucesso!", error: false, data:{ products:  products.map(templateMapsProduct.card)}})
        }catch(e){
            console.log(e)
            res.status(500).send({message: "Ocorreu um erro ao resgatar os dados! Consulte o console.", error: true})
        }
    },
    async infos(req, res){
        const idProduct = req.params.id
        try{
            const product = await Product.findOne({_id: idProduct})
            res.status(200).send({message: "Dados resgatados com sucesso!", error: false, data:{ product: templateMapsProduct.page(product)}})
        }catch(e){
            console.log(e)
            res.status(401).send({message: "O Produto não foi encontrado!", error: true})
        }
    },
    async search(req, res){
        const searchType = req.query.searchType || null
        const searchScope = req.query.searchScope || null
        const charactersSearched = req.query.charactersSearched  || null
        console.log(charactersSearched)

        if(![searchType, searchScope, charactersSearched ].every(Boolean)) return res.status(401).send({message: "Não foi possivel realizar a pesquisa com os paramentros passados!", error: true})

        searchType.toLowerCase()
        searchScope.toLowerCase()
        charactersSearched.toLowerCase()

        if(searchType === "normal" && searchScope === "global"){
            const resultSearch = await searchProductsAll(charactersSearched)
            return res.status(200).send({message: "Produto buscado com sucesso!", error: false, data: {products: resultSearch.map(templateMapsProduct.card)}})
        }
        
        return res.status(401).send({message: "Não foi possivel realizar a pesquisa com os paramentros passados!", error: true})
    }

}

async function searchProductsAll(fetchedItem){
    const products = await Product.find({})
    const fetchedItemTrated = fetchedItem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    const regex = new RegExp(fetchedItemTrated, "gi")
    const result = products.filter(prod=>{
        const titleTrated = prod.title.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
        return regex.test(titleTrated)
    })
    return result
}

const templateMapsProduct = {
    card: (product)=>{
        delete product.addedBy
        return {
            cover: product.cover,
            id: product._id,
            title: product.title,
            articleType: product.articleType,
            freight: product.freight,
            previousValue: product.previousValue,
            value: product.value,
            installments: product.installments,
            avaliation: product.avaliation
        }
    },
    page: (product)=>{
        return {
            articleType: product.articleType,
            avaliation: product.avaliation,
            cover: product.cover,
            description: product.description,
            freight: product.freight,
            images: product.images,
            installments: product.installments,
            options: product.options,
            previousValue: product.previousValue,
            specifications: product.specifications,
            tags: product.tags,
            title: product.title,
            value: product.value,
            _id: product._id
        }
    }
}
