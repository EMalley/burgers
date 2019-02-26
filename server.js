var express = require('express')
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser")

var PORT = process.env.PORT || 8080;

var app= express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser .json());

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// start sever so that it can listen to client requests
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
})