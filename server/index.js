const sequelize = require('./db');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT =  process.env.PORT||5000;

const start = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync(); 
        app.listen(PORT, ()=>console.log(`Server started on ${PORT}`));
    }catch(e){
        console.log(e);
    }
};


start();


