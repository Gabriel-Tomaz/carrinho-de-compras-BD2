const User = require('../models/User');

module.exports = {
    async create(request, response){
        const {id,name,email,password} = request.body;

        await User.create({
            id,
            name,
            email,
            password
        });

        return response.json({name}); 
    },

    async getUsers(request, response){
        await User.findAll().then((users => {
            return response.json(users);
        }));
    }
}