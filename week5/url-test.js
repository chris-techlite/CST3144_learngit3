var url = require("url");
var parsedUrl = url.parse("https://www.example.com/profile?name=berry");
console.log("Protocol: " + parsedUrl.protocol);
console.log("Host: " + parsedUrl.host);
console.log("Port: " + parsedUrl.query);

