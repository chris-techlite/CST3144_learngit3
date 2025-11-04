var express = require('express');
var FileSystem = require('fs');
var Path = require('path');
var app = express();

app.use(function(request, response, next) {
    console.log("request IP" +request.baseUrl);
    console.log("Request date" + new Date());
    next();

});

app.use(function(request, response , next) {
var filepath = Path.join(__dirname, "Static", request.url);
FileSystem.stat(filepath, function(err, fileInfo) {
    if (err) {
        next();
        return;
    }
    if (fileInfo.isFile()) {
        response.sendFile(filepath);
    } else {
        next();
    }
});
});
app.listen(3000 , function() {
    console.log("app started on port 3000");
});
