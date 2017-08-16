var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes')

mongoose.connect('mongodb://localhost/weight-tracker');

var app = express();

//middleware goes here

//routes go here
Routes(app);

app.listen(3000, () => {
    
    console.log("Server is running");
    
})