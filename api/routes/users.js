const { Router } = require('express')
const { v4: uuidv4} = require("uuid");
const bcrypt = require('bcrypt');
const router = Router()

let users = []

/* All routers start with /users */

//GET users
router.get('/',  function(req, res) {
  console.log(users)
  res.send(users)

})

 //GET user by ID.
router.get('/:id', function (req, res) {
  const {id} = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
})


//POST user
router.post('/', async function(req,res) {
  const user = req.body;
  const hashedPwd = await bcrypt.hash(req.body.password, 10)
  users.push( { ...user, id: uuidv4(), password: hashedPwd } );
  console.log(req.body)
  res.send(`User with the username ${user.name} added to the database`)
})

//DELETE user
router.delete('/:id', function(req,res){
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with this id ${id} deleted from database`)
})


module.exports = router
