const mongoose = require('mongoose')

require('dotenv').config();

const dbconnect = async() => {
    try{
        await mongoose.connect(process.env.mongourl)
        console.log('MongoDB Connect')
    }
    catch(e){
        console.log("Error:",e)
        process.exit(1)
    }
}

module.exports = dbconnect;