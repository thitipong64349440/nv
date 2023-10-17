const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const NoodleController = require('./controllers/NoodleController')

module.exports = (app) => {
    /* RESFUL Api for users management */
    // create user
    app.post('/user', UserController.create)

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId', UserController.delete)

    // get user by id
    app.get('/user/:userId', UserController.show)

    // get all user
    app.get('/users', UserController.index)

    // login
    app.post('/login', UserAuthenController.login)



    

    // get all user
    app.get('/users', isAuthenController, UserController.index)
    
    app.post('/noodle', NoodleController.create)
    
    app.put('/noodle/:noodleId', NoodleController.put)
    
    app.delete('/noodle/:noodleId', NoodleController.remove)
    
    app.get('/noodle/:noodleId', NoodleController.show)
    
    app.get('/noodles', NoodleController.index)

    // app.post('/login', UserAuthenController.login)
}