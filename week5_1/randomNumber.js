var MAX = 100;

function getRandomInteger() {
    return Math.floor(Math.random() * MAX);
}

var randomInteger = getRandomInteger();

module.exports = {
    getRandomInteger,
    randomInteger
};