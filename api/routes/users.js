const { Router } = require('express')
const router = Router()
const userController = require('../../user.controller')
const authenticateToken = require('../../middleware/authorization')

/* All routers start with /users */
//GET users
router.get('/', authenticateToken,userController.getUsers)

//GET user by ID.
router.get('/:id', userController.getOneUser)

//POST user
router.post("/add",userController.createUser);

//DELETE user
router.delete('/:id', userController.deleteUser)


module.exports = router
