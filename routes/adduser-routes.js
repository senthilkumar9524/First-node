let route = require('express').Router()
let adduserController = require('../controllers/adduser-controller')

// CRUD
// user -> /user
route.get('/', adduserController.get)

route.post('/', adduserController.post)

route.put('/', adduserController.put)

route.delete('/', adduserController.delete)

module.exports = route