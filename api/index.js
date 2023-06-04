const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const users = require('./routes/users')
const auth = require('./routes/auth')
const recipes = require('./routes/recipes')
const cors = require('cors');
const cookieParser = require("cookie-parser");
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/recipes', recipes);
app.use(cookieParser())
app.use(cors())


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
  next();
});

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
