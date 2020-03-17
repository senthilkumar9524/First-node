let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ITSchema = new Schema({
    category: { type: String, required: true },
    using_purpose: { type: String,  required: true },
    user_name: { type: String, unique: true, trim: true, required: true }, 
    password: { type: String, trim: true, required: true },
})

let IT = mongoose.model('IT', ITSchema)
module.exports = IT;