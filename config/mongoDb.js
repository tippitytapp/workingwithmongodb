const mongoose = require('mongoose');

const connectMongoDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreatedIndex: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
    }catch(err){
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}
module.exports = connectMongoDB;