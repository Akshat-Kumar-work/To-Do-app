// In this we will map the controller with the route , here controller folder is having the createTodo function


const express = require("express");
//router crearted
const router = express.Router();

//importing the createTodo function from controller folder, to map with route , createTodo is route handler
const {createTodo} = require("../controllers/createTodo")

//defining api routes and mapping it to controller
//simply it means aap kis path ko kis controller sy map karna chahty hai
//jab createTodo vala route hit hoga ya click hoga tohh createTodo ko call krdena
//we can also create the route directly on index file by index.post("/createTodo"route handler)
//but this is best practice to follow
// here createTodo is route handler 
router.post("/createTodo",createTodo);

//exporting the router 
module.exports = router;
