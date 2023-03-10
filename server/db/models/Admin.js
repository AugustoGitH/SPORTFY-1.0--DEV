const mongoose = require("mongoose")


const adminSchema = mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    dateOfBirth: {type: String, require: true},
    cpf: {type: String, require: true},
    telephone: {type: String, require: true},
    
})

module.exports = mongoose.model("Admin", adminSchema)