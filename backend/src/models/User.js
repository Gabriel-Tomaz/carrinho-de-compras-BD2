const Sequelize = require('sequelize');
const postgres = require('../databases/postgres');

const Users = postgres.define('users',{ 
    id:{
        type: Sequelize.INTEGER,
    },
    name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    password:{
        type: Sequelize.STRING
    } 
});

module.exports = Users;