const pool = require("../db");
const { Router } = require('express')
const router = Router()
const recipesController = require('../recipes.controller.js')
const cors = require("cors");

router.use(cors({
  origin: ["http://localhost:3000"]
}));
// const authenticateToken = require("~/middleware/authorization");

/* All routers start with /server/recipes */
//GET recipes
router.get('/' , cors(),recipesController.getRecipes)

//GET recipe by ID.
router.get('/:id', cors() ,recipesController.getOneRecipe)

//POST recipe
router.post("/add",cors() ,recipesController.createRecipe);

router.put("/:id", cors() ,recipesController.updateRecipe)
//DELETE recipe
router.delete('/:id', cors() ,recipesController.deleteRecipe)


module.exports = router
