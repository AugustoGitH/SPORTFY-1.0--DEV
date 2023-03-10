const User = require("./models/User")
const Admin = require("./models/Admin")

async function findLogginIn(paramsSearch){
    const userSear = await User.findOne(paramsSearch)
    const adminSear = await Admin.findOne(paramsSearch)

    if(userSear) return {admin: false, data: userSear }
    if(adminSear) return {admin: true, data: adminSear}
    return null
}


module.exports = {
    findLogginIn
}