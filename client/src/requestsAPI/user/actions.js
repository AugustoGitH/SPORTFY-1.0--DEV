const user = {
    async personalData(){
        const response = await fetch("/api/user/user-personal-data").then(res=> res.json().then(json=> json))
        return !response.error ? response.data : null
    },
    async addressesData(){
        const response = await fetch("/api/user/user-address-data").then(res=> res.json().then(json=> json))
        return !response.error ? response.data : null
    }
}

export default user