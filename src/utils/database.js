const { Sequelize } = require('sequelize')

const db = new Sequelize({
  database: 'courses_api',
  username: 'alvarado',
  host: 'localhost',
  port: '5432',
  password: 'root',
  dialect: 'postgres',
  logging: false,
})

module.exports = db
