var   express    =    require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("you just sent a get request ,  friend");
    
});
app.post("/", function (req, res) {
    res.send("a post request? nice one");
    
});
app.put("/", function (req, res) {
    res.send("i dont see alot of put requests anymore");
    
});
app.delete("/", function (req, res) {
    res.send("oh my, a delete");
    
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});