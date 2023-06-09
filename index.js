//express framework ko instance lia hai
const express = require("express");
//server create kia hai
const server = express();

//putting everything present in .env file into processes object
require("dotenv").config()
//YA TOH PORT process sy ayga agar nahi aya toh 4000 port use karo
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
server.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos")
//mount the todo api routes
server.use("/api/v1",todoRoutes); 

//start server
server.listen(PORT , ()=>{
    console.log("server started")
})

//connecting to db , by importing database function which connect the server with database
const dbconnect = require("./config/database")
dbconnect()

//default route , created direct without using router
server.get("/" , (req ,res)=>{
    res.send("this is home page")
})