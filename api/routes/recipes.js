const pool = require("../db");
const { Router } = require('express')
const router = Router()
const recipesController = require('../../recipes.controller.js')
// const authenticateToken = require("~/middleware/authorization");

/* All routers start with /api/recipes */
//GET recipes
router.get('/',recipesController.getRecipes)

//GET recipe by ID.
router.get('/:id', recipesController.getOneRecipe)

//POST recipe
router.post("/add",recipesController.createRecipe);

router.put("/:id", recipesController.updateRecipe)
//DELETE recipe
router.delete('/:id', recipesController.deleteRecipe)


module.exports = router
