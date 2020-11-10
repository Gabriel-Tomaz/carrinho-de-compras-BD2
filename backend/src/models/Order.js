const mongoose = require('mongoose');

const OrderSechema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
    },
    products:{
        type: Array,
        default: undefined,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    
},{timestamps: true});

mongoose.model('Order', OrderSechema);