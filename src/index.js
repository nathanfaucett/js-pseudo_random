var isNumber = require("@nathanfaucett/is_number");


var OFFSET = 1013904223,
    MULTIPLIER = 1664525,
    MAX_INT32 = ~~(Math.pow(2, 31) - 1),
    PseudoRandomPrototype;


module.exports = PseudoRandom;


function PseudoRandom(seed) {
    this.seed = isNumber(seed) ? seed : ~~(MAX_INT32 / 2);
}
PseudoRandomPrototype = PseudoRandom.prototype;

PseudoRandom.MAX = PseudoRandomPrototype.MAX = MAX_INT32;

PseudoRandomPrototype.nextInt = function() {
    this.seed = ~~(((MULTIPLIER * this.seed) + OFFSET) % MAX_INT32);
    return this.seed;
};

PseudoRandomPrototype.nextFloat = function() {
    return this.nextInt() / MAX_INT32;
};