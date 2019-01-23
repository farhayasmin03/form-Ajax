const request = require('request');
var express= require('express');
var app=express();
app.set('view engine','ejs');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//var routes = require('./routes/router');
//app.use('/', routes);
app.use(express.static(__dirname + '/public'));
var routes=require('./routes/router');
app.use('/', routes);
var mongoose = require('mongoose');

//connect to MongoDB
mongoose.connect('mongodb://localhost/userForm');
app.get("/",function(req,res){
    res.render("index");
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

module.exports = app;



