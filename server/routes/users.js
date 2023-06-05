const { Router } = require('express')
const router = Router()
const userController = require('../user.controller')
const authenticateToken = require('../middleware/authorization')
const cors = require("cors");

router.use(cors({
  origin: ["http://localhost:3000"]
}));

/* All routers start with /users */
//GET users
router.get('/',cors() , authenticateToken,userController.getUsers)

//GET user by ID.
router.get('/:id' ,cors() ,userController.getOneUser)

//POST user
router.post("/add", cors() ,userController.createUser);

//DELETE user
router.delete('/:id', cors() ,userController.deleteUser)


module.exports = router
