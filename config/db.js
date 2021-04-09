const mongoose = require('mongoose');
const config = require('config');
const db = config.get('URI');
const connectDatabase = async() =>{
    try{
        await mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database connected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDatabase;