var express = require("express");

var app = express();

app.get("/", function(req, res) {
    console.log(req.headers);
    var cookieStr = req.get("Cookie");
    var count = 0;
    if (cookieStr) {
        count = parseInt(cookieStr.split("=")[1]);
    }
    count += 1;
    res.cookie('count', count);
    res.send("Hello World");
});

app.listen(3000, function() {
    console.log("UP AND RUNNING");
});
