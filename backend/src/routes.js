const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const CartController = require('./controllers/CartController');

const routes = express.Router();

// Operações do usuário
routes.post('/users',UserController.create);
routes.get('/users', UserController.getUsers);

//Operações do produto
routes.post('/products',ProductController.create);
routes.get('/products',ProductController.getProducts);

//Operação do carrinho
routes.post('/cart/:user', CartController.newCart);
routes.get('/cart/:user', CartController.getCart);

module.exports = routes;