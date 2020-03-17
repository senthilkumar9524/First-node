let IT = require('../models/IT')

exports.get = (req,res) => {
    IT.find({}).exec((err, userSave) => {
        if (err) {
            res.status(400).json({
                message: "No User Found!"
            })
            return
        }
        res.status(200).json({
            user: userSave
        })
    })
}
exports.post = (req, res) => {
    let body = req.body;
    let user = new IT();
    user['category'] = body['category'],
    user['using_purpose'] = body['using_purpose'], 
    user['user_name'] = body['user_name'],
    user['password'] = body['password']

    user.save((err, userSave) => {
        if (err) {
            res.status(400).json({
                message: "No User Found!"
            })
            return
        }
        res.status(200).json({
            user: userSave,
            message: "IT saved successfully!"
        })
    })
}
exports.put = (req, res) => {
    let reqBody = req.body;
        IT.updateOne({user_name: reqBody['user_name'] }, {
        $set: {
            category: reqBody['category'],
            using_purpose: reqBody['using_purpose'], 
            user_name: reqBody['user_name'],
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