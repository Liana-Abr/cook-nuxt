const db = require('./api/db')

class RecipesController{
  async createRecipe(req,res){
    try{
      const {name, description, category, time, image, tags, ingredients, steps, fat, protein, carb, calories} = req.body
      const newRecipe = await db.query(
        'INSERT INTO recipes (name, description, category, time, image, tags, ingredients, steps, fat, protein, carb, calories) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *'
        , [name, description, category, time, image, tags, ingredients, steps, fat, protein, carb, calories]);
      res.json(newRecipe.rows[0]);
    }catch (error){
      res.status(500).json({error: error.message});
    }
  }
  async getRecipes(req,res){
    const recipes = await db.query(`SELECT * FROM recipes `)
    res.json(recipes.rows)
    // try {
    //   const recipes = await db.query('SELECT * FROM recipes');
    //   res.json({recipes : recipes.rows});
    // } catch (error) {
    //   res.status(500).json({error: error.message});
    // }
  }
  async getOneRecipe(req,res){
    const id = req.params.id
    const recipes = await db.query(`SELECT * FROM recipes where id = $1 `, [id])
    res.json(recipes.rows[0])
  }
  async deleteRecipe(req,res){
    const id = req.params.id
    const recipes = await db.query(`DELETE FROM recipes where id = $1 `, [id])
    res.json(recipes.rows[0])
  }
}

module.exports = new RecipesController()
