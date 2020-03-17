let ITRoutes = require('./routes/IT-routes')
let softwareRoutes = require('./routes/software-routes')
let accountRoutes = require('./routes/account-routes')
let adduserRoutes = require('./routes/adduser-routes')


module.exports = (app) => {
    app.use('/IT', ITRoutes)
    app.use('/software', softwareRoutes)
    app.use('/account', accountRoutes)
    app.use('/adduser', adduserRoutes)
}