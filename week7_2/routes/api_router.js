var express = require('express');

var ALLOWED_IPS = [
"127.0.0.1",
"192.168.1.1"
];

var api = express.Router();
api.get("/user",function (req, res) {
res.send("welcome to olivia's homepage");
});

api.use(function (req, res, next) {
    var userISALLOWED = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if (!userISALLOWED) {
        res.status(403).send("Not authorized");
    } else {
        next();
    }
});
module.exports = api;
