<h1> structure of app <h1>

<h2> .env file <h2> 
it contain the basic credentials like data-base url and port number
to use anything inside the .env file-
*(process.env.name)*
before using process , we have to put the url and no. inside the process object
and to do it, we should install the env library by *(npm i dotenv)* command
after installing the library , put the variable in process object by using *(  require("dotenv").config()  )*
use this in the file you are using the *(process.env.name )* to use environment variable

<h2> models folder <h2>
it contain the schema's of the data or properties of data

