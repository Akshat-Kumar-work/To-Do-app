const mongoose = require("mongoose");

//creating schema with help of mongoose
// schema define how the data is defined or how it is present to user 
//description of data is schema
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:50
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
)

//exporting the schema with the name of todo
module.exports = mongoose.model("todo" , todoSchema) ;