var express = require('express');
var app = express();

const utill = require('./utills/utill');

app.get('/', function (req, res) {
    console.log("Sum of two number is: " + utill.sumtwonum(20, 30))
    res.send("Hello world! ");
});


app.listen(3000, function () {
    console.log('Server is running....')
});