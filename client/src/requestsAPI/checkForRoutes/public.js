

async function checkIfToken({dataReq = false} = {}){
    const {user, data, admin} = await fetch("/api/check-routes/token").then(res=>res.json().then(json=> json))
    return dataReq? {user, data, admin} : !user
}

async function checkIfUser(){
    const {token, data, admin} = await fetch("/api/check-routes/user").then(res=>res.json().then(json=> json))
    return !token || admin ? false : true
}

async function checkIfAdmin(){
    const {token, data, admin} = await fetch("/api/check-routes/admin").then(res=>res.json().then(json=> json))
    return !token || !admin ? false : true
}




export {checkIfToken, checkIfUser, checkIfAdmin }