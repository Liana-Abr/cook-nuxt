const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  password: '1688',
  host: "localhost",
  port: 5432,
  database: "cookdb"
})

module.exports = pool
