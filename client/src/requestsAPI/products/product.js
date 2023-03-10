

const product = {
    async getProductInfos(id){
        const response = await fetch(`/api/products/product-infos/${id}`).then(res=> res.json().then(json=> json))
        return response.error || !(response.data.product) ? null : response.data.product
    }
}

export default product