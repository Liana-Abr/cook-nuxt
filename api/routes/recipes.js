const pool = require("../db");
const { Router } = require('express')
const router = Router()
const recipesController = require('../../recipes.controller.js')
// const authenticateToken = require("~/middleware/authorization");

/* All routers start with /recipes */
//GET users
router.get('/',recipesController.getRecipes)

//GET user by ID.
router.get('/:id', recipesController.getOneRecipe)
// router
//POST user
router.post("/add",recipesController.createRecipe);

//DELETE user
router.delete('/:id', recipesController.deleteRecipe)


module.exports = router
