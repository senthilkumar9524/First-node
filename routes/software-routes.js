let route = require('express').Router()
let softwareController = require('../controllers/software-controller')

// CRUD
// user -> /user
route.get('/', softwareController.get)

route.post('/', softwareController.post)

route.put('/', softwareController.put)

route.delete('/', softwareController.delete)

module.exports = route