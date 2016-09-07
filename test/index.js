var tape = require("tape"),
    PseudoRandom = require("..");


tape("PseudoRandom seed", function(assert) {
    var random = new PseudoRandom(0);
    assert.equals(random.seed, 0);
    assert.end();
});

tape("PseudoRandom nextInt() -> Integer", function(assert) {
    var random = new PseudoRandom();
    assert.equals(random.nextInt(), 2086813784);
    assert.end();
});

tape("PseudoRandom nextFloat() ->  Double", function(assert) {
    var random = new PseudoRandom();
    assert.equals(random.nextFloat(), 0.9717483934814801);
    assert.end();
});

tape("PseudoRandom should not repeat the same number for many calls", function(assert) {
    var random = new PseudoRandom(),
        numbers = {},
        numberString,
        count = 0,
        memoryUsage = process.memoryUsage ? process.memoryUsage() : {
            // some high number that hopefully won't break the browser
            heapTotal: ~~(Math.pow(2, 16) - 1),
            heapUsed: 0
        },
        MAX_COUNT = memoryUsage.heapTotal - memoryUsage.heapUsed - 16,
        error;

    while (true) {
        numberString = random.nextInt() + "";

        if (numbers[numberString]) {
            error = new Error("A random number was repeated");
            break;
        } else {
            if (count < MAX_COUNT) {
                count += 1;
                numbers[numberString] = true;
            } else {
                break;
            }
        }
    }

    assert.equals(count, MAX_COUNT);
    assert.end(error);
});