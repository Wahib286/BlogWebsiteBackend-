const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = ()=> {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("Connected to Mongo DB")})
    .catch((err)=>{
        console.log("Error connecting Db")
        console.error(err.message)
        process.exit(1);
    });
}

module.exports = dbConnect;
 