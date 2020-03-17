let Adduser = require('../models/adduser')
// let {ObjectID} = require('mongodb')

exports.get = (req, res) => {
    Adduser.find({}).exec((err, adduser) => {
        if (err) {
            res.status(400).json({
                message: "No User Found!"
            })
            return
        }
        res.status(200).json({
            adduser: adduser,
            message: "Users listed successfully!"
     
        })
    })
}

exports.post = (req, res) => {
    let body = req.body;
    let adduser = new Adduser();
    adduser['Name'] = body['Name'],
    adduser['User_Role'] = body['User_Role'],
    adduser['User_Purpose'] = body['User_Purpose'],
    adduser['Email_id'] = body['Email_id'],
    adduser['password'] = body['password']

    adduser.save((err, adduserSave) => {
        if (err) {
            res.status(400).json({
                message: "No Found!"
            })
            return
        }
        res.status(200).json({
            adduser: adduserSave,
            message: "Users saved successfully!"
        })
    })
}


exports.put = (req, res) => {
    let reqBody = req.body;
    // senthil.arunn@gmail.com
    Adduser.updateMany({ Email_id: reqBody['Email_id'] }, {
        $set: {
            Name: reqBody['Name'],
            User_Role: reqBody['User_Role'],
            User_Purpose: reqBody['User_Purpose'],
            Email_id: reqBody['Email_id'],
            password: reqBody['password']
        }
    }).then((updateResult) => {
        res.status(200).json(updateResult)
    })
}

exports.delete = (req, res) => {
    let query = req.query;
    IT.deletOne(query).then(deleteResults => {
        res.status(200).json(deleteResults)
    })
}

// exports.delete = (req, res) => {
//     let query = req.query;
//     Adduser.deleteOne({_id: new ObjectID(req.query['_id'])}).then(deleteResults => {
//         res.status(200).json(deleteResults)
//     })
// }
