
export default async function searchProducts(query){
    //?searchType={}&searchScope={}&charactersSearched={}
    const response = await fetch(`/api/products/products-search/${query}`).then(res=> res.json().then(json=> json))
    return response.error || !(response.data.products) ? null : response.data.products
}
