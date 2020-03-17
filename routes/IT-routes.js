let route = require('express').Router()
let ITController = require('../controllers/IT-controller')

route.get('/', ITController.get)

route.post('/', ITController.post)

route.put('/', ITController.put)

route.delete('/', ITController.delete)

module.exports = route