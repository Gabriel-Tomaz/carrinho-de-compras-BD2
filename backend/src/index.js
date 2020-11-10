const express = require('express');

const postgres = require('./databases/postgres');
const redis = require('./databases/redis');
const mongo = require('./databases/mongo');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

// const User = require('./models/User');
// const Product = require('./models/Product');
// Product.sync({force:true});
// User.sync({force:true});

//Testando a conexão com o postgres
postgres.authenticate().then(() => {
    console.log('Postgres conectado!');
}).catch( err => {
    console.log('Erro na conexão com o Postgres!' + err);
});

//Testando conexão com o redis
redis.on('connect', (error) => {
    console.log("Redis conectado!");
});

redis.on('error', (error) => {
    console.log('Erro na conexão com o Redis!');
});

app.listen(9090, () => {
    console.log("O adm está online");
});