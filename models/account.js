let mongoose = require('mongoose')
let Schema = mongoose.Schema

let accountSchema = new Schema({
    Category: { type: String, required: true },
    Payment_Date: { type: String, unique: true, trim: true, required: true }, // mail@gmail.com
    LastDue_date: { type: String, required: true },
    Alert_mail: { type: String, trim: true, required: true }, // 'abcd123@#'
    Payment_mode: { type: String, required: true },
    User_name: { type: String, required: true },
    Password: { type: String, required: true },
    Skype_requiredTeam: { type: String, required: true }
})

let Account = mongoose.model('account', accountSchema)
module.exports = Account;
