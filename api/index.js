const express = require('express')
const app = express()
let bodyParser = require('body-parser')
const users = require('./routes/users')
const cors = require('cors');

// Import API Routes
// app.use(test)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/users', users)
app.use(cors)


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
