const Sequelize = require('sequelize');
const postgres = require('../databases/postgres');

const Products = postgres.define('products',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    description:{
        type: Sequelize.STRING
    },
    price:{
        type: Sequelize.DOUBLE
    }
});

module.exports = Products;