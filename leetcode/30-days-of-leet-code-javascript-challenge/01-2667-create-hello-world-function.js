// https://leetcode.com/problems/create-hello-world-function/ (30-day-javascript-challenge)

/**
 * @return {Function}
 */
var createHelloWorld = function() {
  return function(...args) {
    return "Hello World";
  }
};

// var createHelloWorld = () => () => "Hello World";