var express = require('express');
var exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

//load the environment variable file
require('dotenv').config({path:"./config/keys.env"});
 
const product = require("./models/product");
const meal = require("./models/meal");

var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const file = require("fs");
app.use(express.static("public"));

//load controllers
const generalController = require("./controllers/general");
const productController = require("./controllers/product");

//map each controller to the app object

app.use("/",generalController);
app.use("/product",productController);


///sets up server
const PORT = process.env.PORT;
app.listen(PORT,()=>{

    console.log(`Web Server is up and running`);    
});








