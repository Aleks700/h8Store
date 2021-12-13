const {Sequelize} = require('sequelize');

  module.exports = new Sequelize(
     process.env.DB_NAME,
      'postgres',
      '529440A-a',
      { 
        dialect:'postgres',
        host: 'localhost'
    }
  )