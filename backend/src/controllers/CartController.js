const redis = require('../databases/redis');

module.exports = {
    async newCart(request, response){
        const user = request.params.user;
        const {id,amount} = request.body;
        const object = {
           id,
           amount
        }

        redis.setex(user,3600, JSON.stringify(object), (err,res) => {
            if(err) throw err;
            console.log(res);

            return response.json(res);
        });
    },

    async getCart(request,response){
        const user = request.params.user;

        redis.get(user,(err,res) => {
            if(res != null){
                const cart = JSON.parse(res.toString());
                return response.json(cart)
            }else{
                return response.send("404");
            }
        });
    }
}
