// In this we will map the controller with the route , here controller folder is having the createTodo function


const express = require("express");
//router crearted
const router = express.Router();

//importing the createTodo function from controller folder, to map with route , createTodo is route handler
const {createTodo} = require("../controllers/createTodo");
//getTodo aur getTodoById ko import krdia controllers se
const {getTodo,getTodoById}  = require("../controllers/getTodo");
//importing the updateTodo route handler
const {updateTodo} = require("../controllers/updateTodo");
//importing the delete todo route handler
const { deleteTodo} = require("../controllers/deleteTodo");

//defining api routes and mapping it to controller
//simply it means aap kis path ko kis controller sy map karna chahty hai
//jab createTodo vala route hit hoga ya click hoga tohh createTodo ko call krdena
//we can also create the route directly on index file by index.post("/createTodo"route handler)
//but this is best practice to follow
// here createTodo is route handler 

//post request route create a new data into the database , it call createTodo handler and get the response from it by which it create new data entry
router.post("/createTodo",createTodo);

//creating get request route with getTodo route handler , passing path and route handler in it
router.get("/getTodos",getTodo);
//creating get request route for single id by passing id with the route and route handler getTodoByid
router.get("/getTodos/:id",getTodoById);

//creating put request route with updateTodo route handler
router.put("/updateTodo/:id",updateTodo);

//creating delete request route with deleteTodo route handler
router.delete("/deleteTodo/:id",deleteTodo);

//exporting the router 
module.exports = router;
