var Sequelize = require('sequelize');
var sequelize = require('../config/connectiondb.js');

const Course = sequelize.define('accounts', {
    account_number: {
        type: Sequelize.STRING,
        unique:true
    },
    total_service:{
        type:Sequelize.INTEGER
    } ,
    total_bill:{
        type:Sequelize.DECIMAL
    }   
});

module.exports = Course;
