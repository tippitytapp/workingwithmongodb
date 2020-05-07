const Users = require("./schemas/UsersSchema");


// GET all users
// /api/users
// access public
exports.getUsers = async (req, res, next) => {
    try{
        const users = await Users.find();
        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        })
    } catch (err){
        return res.status(500).json({
            success: false,
            errorMessage: "Server Error",
            error: err
        })
    }
}

// POST add a user
// /api/users
exports.addUser = async (req, res, next) => {
    try {
        const {first_name, last_name, email, age} = req.body;
        const user = await Users.create(req.body);
        return res.status(201).json({
            success: true,
            data: user
        });
    }catch (err) {
        if (err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(value => value.message)
            return res.status(400).json({
                success: false,
                error: message
            });
        }else{
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}