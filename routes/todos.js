// In this we will map the controller with the route


const express = require("express");
const router = express.Router();

//importing the createTodo controller 
const {createTodo} = require("../controllers/createTodo")

//defining api routes and mapping it to controller
//simply it means aap kis path ko kis controller sy map karna chahty hai
router.post("/createTodo",createTodo);

module.exports = router;
