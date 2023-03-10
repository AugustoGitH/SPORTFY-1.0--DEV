
const mostProducts = {
    async popular(){
        const response = await fetch("/api/products/top-selling-products").then(res=> res.json().then(json=> json))
        return response.data.products || null
    },
    async sold(){
        const response = await fetch("/api/products/most-popular-products").then(res=> res.json().then(json=> json))
        return response.data.products || null
    }
}

export default mostProducts