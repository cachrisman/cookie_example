var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get("/", function(req, res) {
    console.log(req.cookies);
    var count = parseInt(req.cookies.count);
    count++;
    res.cookie('count', count);
    res.send("Hello World");
});

app.listen(3000, function() {
    console.log("UP AND RUNNING");
});
