// import authController from "~/authController";
const pool = require("../db");
const bcrypt = require("bcrypt")
const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const {jwtTokens} = require('../../utils/jwt-helpers')





//AUTH and LOGIN
router.post('/reg')
router.post('/login', async (req,res)=>{
  try{
    const {email,password} = req.body;
    const users = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    if(users.rows.length === 0) return res.status(401).json({error: "Почта не совпадает"})
    //PASSWORD CHECK
    const validPassword = await bcrypt.compare(password, users.rows[0].password)
    if(!validPassword) return res.status(401).json({error: "Пароль неправильный"})
    //JWT
    let tokens = jwtTokens(users.rows[0]);
    res.cookie('refresh_token', tokens.refreshToken,{httpOnly:true})
    res.json(tokens);

  } catch (error){
    res.status(401).json({error: error.message})
  }
})
router.get('/refresh_token', (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    console.log(req.cookies);
    if (refreshToken === null) return res.sendStatus(401);
    jwt.verify(refreshToken, 'fbfdnvsndvjunsdujvnauncasucuhn', (error, user) => {
      if (error) return res.status(403).json({error:error.message});
      let tokens = jwtTokens(user);
      res.cookie('refresh_token', tokens.refreshToken,{ httpOnly: true,sameSite: 'none', secure: true});
      return res.json(tokens);
    });
  } catch (error) {
    res.status(401).json({error: error.message});
  }
});


router.delete('/refresh_token', (req, res) => {
  try {
    res.clearCookie('refresh_token');
    return res.status(200).json({message:'Refresh token deleted.'});
  } catch (error) {
    res.status(401).json({error: error.message});
  }
});

module.exports = router
