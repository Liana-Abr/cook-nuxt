const db = require('./api/db')
const bcrypt = require('bcrypt');

class UserController{
  async createUser(req,res){
    const {name,email,password} = req.body
    const hashedPwd = await bcrypt.hash(password, 10)
    const newUser = await db.query('INSERT INTO users (name,email,password) values ($1,$2,$3) RETURNING *', [name,email,hashedPwd])
    res.json(newUser.rows[0])
  }
  async getUsers(req,res){
    const users = await db.query(`SELECT * FROM users `)
    res.json(users.rows)
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
