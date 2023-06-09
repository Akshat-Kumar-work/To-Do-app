
//importing the model
const Todo = require("../models/todo");

//defining the route handler
//databse interaction always async function m hogi
//createTodo naam ka async function hai request and response parameters k sath , aur export bhi kar rhe hai
exports.createTodo = async(req , res) =>{
try{
    //extract title and description from request body, title or description request ki body se nikal rhe hai 
    const {title , description} = req.body;
    //create a new todo obj using the todo scheme present in models folder and insert in db 
    //naya todo object create hora hai database m , with help of title and description aur usko fir response variable m daal ra hai
    const response = await Todo.create({title , description});
    //response bhj rhe hai  with success flag, response m json value  k andar  data m response variable daldia jisme tile or description hai
    // status 200 means successful request
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
    res.status(500).json({
        success:false,
        data:"internal server error",
        message:error.message
    })
}
}