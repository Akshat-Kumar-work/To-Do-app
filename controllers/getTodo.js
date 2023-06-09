
//importing the model for data 

const Todo = require("../models/todo");

  exports.getTodo = async(req , res)=>{

    try{
        //fetch all todo items from data base
        //by using the find function , it fetch all the todo items present in database
         const todos = await Todo.find({});

         //updating the response , response ka status hai 200 , aur json value => success hai true , data k andar daldo sari todo items 
         res.status(200).json({
            success:true,
            data:todos,
            message:"entire todo data is fetched"
         })
       }

 catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
 }
}

    exports.getTodoById = async(req , res)=>{
    try{
        //extract todo item on basis of id
        //jo request ayi hai uske parametres k andar jao aur id ko id variable m daldo
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id})

        //if data not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"data found with the given id"
            })
        }
        //updating the response 
        res.status(200).json({
            success:true,
            data:todo,
            message:"data of particular id is fetched"
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message

    })
}
}





