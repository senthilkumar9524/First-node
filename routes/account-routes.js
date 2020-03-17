let route = require('express').Router()
let accountController = require('../controllers/account-controller')

// CRUD
// user -> /user
route.get('/', accountController.get)

route.post('/', accountController.post)

route.put('/', accountController.put)

route.delete('/', accountController.delete)

module.exports = route