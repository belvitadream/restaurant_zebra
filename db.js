const mysql = require('mysql')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '109753',
  database: 'zebra',
})

module.exports = db
