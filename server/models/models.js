const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName:{
        type: DataTypes.String,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }
})