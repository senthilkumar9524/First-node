let mongoose = require('mongoose')
let Schema = mongoose.Schema

let adduserSchema = new Schema({
    Name: { type: String, required: true },
    User_Role: { type: String,  required: true },
    User_Purpose: { type: String, trim: true, required: true }, 
    Email_id: { type: String, unique: true, trim: true, required: true },
    password: { type: String, trim: true, required: true }

})

let Adduser = mongoose.model('adduser', adduserSchema)
module.exports = Adduser;