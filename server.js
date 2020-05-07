const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectMongoDB = require('./config/mongoDb.js')

dotenv.config({path: './config/config.env'});

connectMongoDB();

const server = express();
server.use(express.json());
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'development'){
    server.use(morgan('dev'))
}

const users = require('./routers/user-router.js')

// server.use('/', (req, res) => {
//     res.status(200).json({
//         api: "You are successfully connected to the API"
//     })
// })
server.use('/api/users', users)

server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.underline.bold))