const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const CartController = require('./controllers/CartController');
const OrderController = require('./controllers/OrderController');

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

//Operações dos pedidos
routes.post('/order/:user',OrderController.createOrder);
routes.get('/order', OrderController.listOrders);
routes.get('/order/:user',OrderController.listUserOrder);

module.exports = routes;