var express = require('express');
const { is } = require('type-is');
var app = express();

app.get("/random/:min/:max", function (req, res) {
    var min = parseInt(req.params.min);
    var max = parseInt(req.params.max);
   if (isNaN(min) || isNaN(max)) {
        res.status(400)
        res.json({ 'error': 'bad request' });
        return;
    }
    var result = Math.round(Math.random() * (max - min + 1)) + min;
    res.json({ 'result': result });
});
app.listen(3000, function () {
    console.log('random number API started on port 3000');
});
