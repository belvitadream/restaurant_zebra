const config = require('./dbConfig'),
  sql = require('mssql')

const getUsers = async () => {
  try {
    let pool = await sql.connect(config)
    let users = pool.request().query('SELECT * from users')
    console.log(users)
    return users
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getUsers }
