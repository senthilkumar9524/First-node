let Account = require('../models/account')

exports.get = (req, res) => {
    Account.find({}).exec((err, accountuser) => {
        if (err) {
            res.status(400).json({
                message: "No User Found!"
            })
            return
        }
        res.status(200).json({
            account: accountuser,
            message: "Users listed successfully!"
        })
    })
}

exports.post = (req, res) => {
    let body = req.body;
    let account = new Account();
    account['Category'] = body['Category'],
    account['Payment_Date'] = body['Payment_Date'],
    account['LastDue_date'] = body['LastDue_date'],
    account['Alert_mail'] = body['Alert_mail'],
    account['Payment_mode'] = body['Payment_mode'],
    account['User_name'] = body['User_name'],
    account['Password'] = body['Password'],
    account['Skype_requiredTeam'] = body['Skype_requiredTeam']

    account.save((err, accountSave) => {
        if (err) {
            res.status(400).json({
                message: "No Found!"
            })
            return
        }
        res.status(200).json({
            account: accountSave,
            message: "Users saved successfully!"
        })
    })
}


exports.put = (req, res) => {
    let reqBody = req.body;
    // senthil.arunn@gmail.com
    Account.updateMany({ User_name: reqBody['User_name'] }, {
        $set: {
            Category: reqBody['Category'],
            Payment_Date: reqBody['Payment_Date'],
            LastDue_date: reqBody['LastDue_date'],
            Alert_mail: reqBody['Alert_mail'],
            Payment_mode: reqBody['Payment_mode'],
            User_name: reqBody['User_name'],
            Password: reqBody['Password'],
            Skype_requiredTeam: reqBody['Skype_requiredTeam']
        }
    }).then((updateResult) => {
        res.status(200).json(updateResult)
    })
}

exports.delete = (req, res) => {
    let query = req.query;
    Account.delete(query).then(deleteResults => {
        res.status(200).json(deleteResults)
    })
}
