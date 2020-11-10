const mongoose = require('mongoose');
const Dotenv = require('dotenv');

require('../models/Order');

Dotenv.config();

mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/Louja`,{useNewUrlParser:true,useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Mongo conectado!');
}).catch((err)=>{
    console.log('Erro na conexão com o Mongo!' + err);
});;

module.exports = mongoose;