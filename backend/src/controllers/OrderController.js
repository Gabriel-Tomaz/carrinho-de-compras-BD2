const mongo = require('../databases/mongo');
const Order = mongo.model('Order');

module.exports ={
    async createOrder(request,response){
        const user = request.params.user;
        const {products,value} = request.body;
        const object = {
            user,
            products,
            value
        };
        const newOrder = await Order.create(object);
        return response.json(newOrder);
    },

    async listOrders(request,response){
        const Orders = await Order.find();

        return response.json(Orders);
    },

    async listUserOrder(request, response){
        const user = request.params.user;

        const userOrder = await Order.find({user:user});

        return response.json(userOrder);
    }
}