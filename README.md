pseudo_random [![Build Status](https://travis-ci.org/nathanfaucett/js-pseudo_random.svg?branch=master)](https://travis-ci.org/nathanfaucett/js-pseudo_random)
======
pseudo random number generator


```javascript
var random = new PseudoRandom(Date.now());


random.nextInt(); // 0 - Math.pow(2, 31) - 1 max integer value;
random.nextFloat(); // 0.0 - 1.0
```
