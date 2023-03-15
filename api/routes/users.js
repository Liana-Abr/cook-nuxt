const { Router } = require('express')
const router = Router()
const userController = require('../../user.controller')
/* All routers start with /users */

//GET users
router.get('/', userController.getUsers)

//GET user by ID.
router.get('/:id', userController.getOneUser)

//POST user
router.post("/add",userController.createUser);

//DELETE user
router.delete('/:id', userController.deleteUser)


module.exports = router
