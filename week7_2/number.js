var express = require('express');
var app = express();


app.get('/olivia', function (req, res) {
  res.send("Welcome to Olivia's Homepage!");
});

app.get("/user/:userId", function (req, res) {
  var userId = parseInt(req.params.userId, 10);
  res.send("WELCOME TO OLIVIA'S HOMEPAGE " + userId);
});

app.get("/search", function (req, res) {
  if (req.query.q ==="javascript-themed burrito") {
    res.send("Welcome to javascript-themed burrito");
  }
});

app.use(function (req, res) {
  res.status(404).send("Sorry, page not found");
});
app.listen(3000);