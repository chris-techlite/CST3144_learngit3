var mustache = require("mustache");
var result = mustache.render("Hi, {{first}} {{last}}!", { first: "Nicole", last: "Kidman" });

console.log(result);