var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

var sessions = {};
var guid = 0;

app.get("/", function(req, res) {
    var userGuid = req.cookies.guid;
    console.log(req.cookies.guid);
    if (!userGuid) {
        guid += 1;
        userGuid = guid;
        sessions[guid] = {
            count: 0
        };
        res.cookie("guid", userGuid);
    }
    sessions[userGuid].count += 1;
    res.send("Hello World " + sessions[userGuid].count);
});

app.listen(3000, function() {
    console.log("UP AND RUNNING");
});
