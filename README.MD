<h1> structure of app <h1>


<h2> .env file <h2> 

<p>
it contain the basic credentials like data-base url and port number

to use anything inside the .env file-

*(process.env.name)*

before using process , we have to put the url and no. inside the process object

and to do it, we should install the env library by *(npm i dotenv)* command

after installing the library , put the variable in process object by using *(  require("dotenv").config()  )*

use this in the file you are using the *(process.env.name )* to use environment variable
</p>

<h2>config folder</h2>

this folder contain the database.js file , in which the connection of database with the server is done




<h2> models folder <h2>

it contain the schema's of the data or properties of data

to create a new schema 

const schemaName = new mongoose.Schema(
    {
        objects
    }
)

and after creating schema export it by 
module.exports = mongoose.model( "name" , schemaname)

