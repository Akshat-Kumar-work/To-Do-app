//importing the model
const Todo = require("../models/todo");

//exporting the deleteTodo route handler
    exports.deleteTodo = async(req,res)=>{
        try{
            //fetching the id from req parameter
            const {id} = req.params;
            
            await Todo.findByIdAndDelete(id);
            res.json({
                success:true,
                message:"todo deleted",
            })
        }
        catch(err){
            console.log(err);
            res.status(500)
            .json({
                success:false,
                error:err.message,
                message:"server error"
            })

        }
    }