const { sync } = require('../databases/redis');
const Products = require('../models/Product');

module.exports = {
    async create(request, response){
        const {id,description,price} = request.body;

        await Products.create({
            id,
            description,
            price
        });

        return response.json({description});
    },

    async getProducts(request,response){
        await Products.findAll().then(products => {
            return response.json(products);
        })
    }
}