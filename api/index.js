const express = require('express')
const app = express()
const dotenv = require('dotenv')
let bodyParser = require('body-parser')
const users = require('./routes/users')
const auth = require('./routes/auth')
const cors = require('cors');
const cookieParser = require("cookie-parser");

dotenv.config();
// Import API Routes
// app.use(test)
const corsOptions = {credentials: true, origin: process.env.URL || '*'};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/users', users);
app.use('/auth', auth);
app.use(cookieParser())
app.use(cors(corsOptions))


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
