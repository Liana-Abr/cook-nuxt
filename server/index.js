const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const users = require('./routes/users')
const auth = require('./routes/auth')
const recipes = require('./routes/recipes')
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/recipes', recipes);
app.use(cookieParser())

app.use(cors({
  origin: ["http://localhost:3000"]
}));

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
