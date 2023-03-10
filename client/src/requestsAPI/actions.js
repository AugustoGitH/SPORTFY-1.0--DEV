async function email(email){
    const response = await fetch(`/api/fetch-email/${email}`).then(res=> res.json().then(json=> json))
    return response
}

async function login(data){
    const options = {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(data)
    }
    const response = await fetch("/api/login", options).then(res=> res.json().then(json=> json))
    return response
}

async function register(data){
    const options = {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(data)
    }
    const response = await fetch("/api/register", options).then(res=> res.json().then(json=> json))
    return response
}


const logout = async (navigate)=>{
    const response = await fetch("/api/logout").then(res=>res.json().then(json=> json))
    if(response.logout){
        navigate("/")
        window.location.reload()
    }else{
        alert(response.message)
    }
    console.log(response)
}

const viewProduct = async (idProduct)=>{
    const options = {
        method: "PUT",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({idProduct})
    }
    const response = await fetch("/api/product/interaction/view", options).then(res=> res.json().then(json=> json))
    return response
}

const likeProduct = async (idProduct)=>{
    const options = {
        method: "PUT",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({idProduct})
    }
    const response = await fetch("/api/product/interaction/like", options).then(res=> res.json().then(json=> json))
    return response
}

export {email, login, register, logout, viewProduct, likeProduct}