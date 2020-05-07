const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    first_name:{
        type: String,
        trim: true,
        required: [true, "First name is a required field"]
    },
    last_name:{
        type: String,
        trim: true,
        required: false
    },
    email:{
        type: String,
        trim: true,
        required: [true, 'Please provide an email']
    },
    age:{
        type: Number,
        required: [true, 'Please provide your age']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', UsersSchema);