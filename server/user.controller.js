const db = require('./db')
const bcrypt = require('bcrypt');
const {jwtTokens} = require("./utils/jwt-helpers");

class UserController{
  async createUser(req,res){
    // const {name,email,password} = req.body
    // const hashedPwd = await bcrypt.hash(password, 10)
    // const newUser = await db.query('INSERT INTO users (name,email,password) values ($1,$2,$3) RETURNING *', [name,email,hashedPwd])
    // res.json(newUser.rows[0])
    try {
      const {name,email,password,regDate} = req.body
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await db.query(
        'INSERT INTO users (name,email,password,regDate) VALUES ($1,$2,$3,$4) RETURNING *'
        , [name, email, hashedPassword,regDate]);
      return res.json(jwtTokens(newUser.rows[0]));
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
  async getUsers(req,res){
    // const users = await db.query(`SELECT * FROM users `)
    // res.json(users.rows)
    try {
      console.log(req.cookies);
      const users = await db.query('SELECT * FROM users');
      res.json({users : users.rows});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
  async getOneUser(req,res){
    const id = req.params.id
    const users = await db.query(`SELECT * FROM users where id = $1 `, [id])
    res.json(users.rows[0])
  }
  async deleteUser(req,res){
    const id = req.params.id
    const users = await db.query(`DELETE FROM users where id = $1 `, [id])
    res.json(users.rows[0])
  }

}
module.exports = new UserController()
