
const articles = {
    async volleyball(){
        const response = await fetch("/api/products/sportive-articles/volleyball").then(res=> res.json().then(json=> json))
        return response.data.products || null
    },
    football(){

    },
    swimming(){
        
    },
    basketball(){
        
    }
}

export default articles