let mongoose = require('mongoose')
let Schema = mongoose.Schema

let softwareSchema = new Schema({
    Category: { type: String, required: true },
    Project: { type: String, trim: true, required: true }, // mail@gmail.com
    Machine: { type: String, required: true },
    User_name: { type: String,unique: true, trim: true, required: true },
    Password: { type: String, trim: true, required: true },
    PPK_Name: { type: String, trim: true, required: true },
    PPK_Handling: { type: String, trim: true, required: true },
    Machine_status: { type: String, trim: true, required: true },
    Project_handling : { type: String, trim: true, required: true },
    Project_lead: { type: String, trim: true, required: true }
})

let Software = mongoose.model('software', softwareSchema)
module.exports = Software;