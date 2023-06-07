

const mongoose = require("mongoose");

require("dotenv").config()

// function to connect the database with the server
const dbconnect = ()=>{
    mongoose.connect( process.env.DATABASE_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    } )

.then( ()=>{console.log("db connection is succesful")})
.catch( (error)=>{`got ${error.message} while connecting`;
//here the process will shutdown with exit code 1 which means application faliure with some error
 process.exit(1)})
}

//exporting the function
module.exports = dbconnect;