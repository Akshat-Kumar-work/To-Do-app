
//importing the model
const Todo = require("../models/todo");

//defining the route handler
//databse interaction always async function m hogi
//createTodo naam ka async function hai request and response parameters k sath , aur export bhi kar rhe hai
exports.createTodo = async(req , res) =>{
try{
    //extract title and description from request body
    const {title , description} = req.body;
    //create a new todo obj and insert in db  
    const response = await Todo.create({title , description});
    //send a json response with success flag
    res.status(200).json(
        {
            success:true,
            data:response,
            message:"entry created successfully"
        }
    );
}
catch(error){
    console.log(error);
    res.status(500)
    .json({
        success:false,
        data:"internal server error",
        message:error.message
    })
}
}