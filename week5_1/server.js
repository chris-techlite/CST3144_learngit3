var http = require('http');
var helper = require("./helper")
var randomNumber = require("./randomnumber")
var chalk = require('chalk');
var randomInteger = randomNumber.getRandomInteger();

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify([
        { 'topic': 'math', 'location': 'London', 'price': 100 },
        { 'topic': 'math', 'location': 'Liverpool', 'price': 80 },
        { 'topic': 'math', 'location': 'Oxford', 'price': 90 },
        { 'topic': 'math', 'location': 'Bristol', 'price': 120 }
    ]));
    res.end(JSON.stringify(randomNumber.randomInteger));

    console.log('Server Status:', helper.getServerStatus());
    console.log('Current Time:', helper.getcCurrentTime());
    const Number = randomNumber.getRandomInteger();
    {
    if (Number <= 33) {
        console.log(chalk.green('Random Number:', Number));
    } else if (Number > 33 && Number <= 66) {
        console.log(chalk.yellow('Random Number:', Number));
    } else if (Number > 66 && Number <= 100) {
        console.log(chalk.red('Random Number:', Number));
    } else {}
    }

    // console.log('Random Number:', randomNumber.getRandomInteger());
    /* console.log(chalk.green(1 <= randomNumber.getRandomInteger() < 33));
    console.log(chalk.yellow(34 <= randomNumber.getRandomInteger() < 66));
    console.log(chalk.red(67 <= randomNumber.getRandomInteger() <= 100));
 */

});

server.listen(3000, 'localhost', function () {
    console.log('Server is listening on http://localhost:3000');
    console.log('Current Time:', helper.getcCurrentTime());
});