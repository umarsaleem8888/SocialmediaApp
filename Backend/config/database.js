const mongoose = require('mongoose')

const database=()=>{
    mongoose.connect(process.env.DB_LOCAL_URL).then((con)=>{
        console.log(`Mongo db database connected with ${con.connection.host}`);
    })
}

module.exports = database