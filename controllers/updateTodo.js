//in this file , logic is present for updating the db

const Todo = require("../models/todo");

    exports.updateTodo = async(req ,res)=>{
    try{
        //fetching id from request parameter by destructuring
        const {id} = req.params;
        //fetching title and description from request body
        const{title , description} = req.body;
        
        //Todo model par findByIdandupdate function laga dia jo id k base par find karega aur update krega
        const todo = await  Todo.findByIdAndUpdate(
            //ess vali id m update karna hai
            {_id:id},
            //title , description aur updateAt ko y krdo
            {title,description,updateAt:Date.now()}
        )
        
        //response m send kar rhe hai
        res.status(200).json({
            success:true,
            data:todo,
            message:'updated Succesfully'
        })
    }
    catch(err){
        console.log(err);
        res.status(500),json({
            success:false,
            error:err.message,
            message:'server error'
        })
    }
}