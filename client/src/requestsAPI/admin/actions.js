

const admin = {
    async addProduct(data){
        const options = {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify(data)
        }
        const response = await fetch("/api/admin/admin-add-product", options).then(res=> res.json().then(json=> json))
       return response
    },
    async getProducts(){
        const response = await fetch("/api/admin/get-products").then(res=> res.json().then(json=> json))
        return response.error ? [] : response.data.products
    }

}

export default admin