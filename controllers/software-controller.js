let Software = require('../models/software')

exports.get = (req, res) => {
    Software.find({}).exec((err, itusers) => {
        if (err) {
            res.status(400).json({
                message: "No User Found!"
            })
            return
        }
        res.status(200).json({
            software: itusers,
            message: "Users listed successfully!"
        })
    })
}

exports.post = (req, res) => {
    let body = req.body;
    let software = new Software();
    software['Category'] = body['Category'],
    software['Project'] = body['Project'],
    software['Machine'] = body['Machine'],
    software['User_name'] = body['User_name'],
    software['Password'] = body['Password'],
    software['PPK_Name'] = body['PPK_Name'],
    software['PPK_Handling'] = body['PPK_Handling'],
    software['Machine_status'] = body['Machine_status'],
    software['Project_handling'] = body['Project_handling'],
    software['Project_lead'] = body['Project_lead']

    software.save((err, softwareSave) => {
        if (err) {
            res.status(400).json({
                message: "No User Found!"
            })
            return
        }
        res.status(200).json({
            software: softwareSave,
            message: "Users saved successfully!"
        })
    })
}


exports.put = (req, res) => {
    let reqBody = req.body;
    // senthil.arunn@gmail.com
    Software.updateMany({ User_name: reqBody['User_name'] }, {
        $set: {
            Category: reqBody['Category'],
            Project: reqBody['Project'],
            Machine: reqBody['Machine'],
            User_name: reqBody['User_name'],
            Password: reqBody['Password'],
            PPK_Name: reqBody['PPK_Name'],
            PPK_Handling: reqBody['PPK_Handling'],
            Machine_status: reqBody['Machine_status'],
            Project_handling: reqBody['Project_handling'],
            Project_lead: reqBody['Project_lead']

        }
    }).then((updateResult) => {
        res.status(200).json(updateResult)
    })
}

exports.delete = (req, res) => {
    let query = req.query;
    Software.deleteOne(query).then(deleteResults => {
        res.status(200).json(deleteResults)
    })
}
