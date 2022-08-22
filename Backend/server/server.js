const app = require('./app')
const dotenv=require('dotenv')
const database=require('../config/database')
dotenv.config({path:"Backend/config/config.env"})

database()


// process.on("uncaughtException", err=>{
//     console.log(`Message : ${err.message}`)
//     console.log("shutting down the server due to uncaughtException");
//     process.exit(1)
 
//  })
 


const server=app.listen(process.env.PORT,()=>{
    console.log(`server is runnging on port ${process.env.PORT} in mode ${process.env.NODE_ENVI} `);
})


/////// error handle promise rejection error

// unhandled promise rejection eror

// process.on('unhandledRejection', err =>{
//     console.log(`Error : ${err.message}`)
//     console.log("shutting down the server due to handled error");
//     server.close(()=>{
//         process.exit(1)
//     })
//  })
 
////////////////