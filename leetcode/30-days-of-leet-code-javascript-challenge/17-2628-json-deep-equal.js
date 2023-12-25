// https://leetcode.com/problems/json-deep-equal/ (30-day-javascript-challenge)

/**
 * Given two objects o1 and o2, check if they are deeply equal.
 * For two objects to be deeply equal, they must contain the same keys,
 * and the associated values must also be DEEPLY EQUAL.
 * Two objects are also considered deeply equal if they pass === equality check.
 * You may assume both objects are the output of JSON.parse.
 * In other words, they are valid JSON.
 * Please solve it without using loadsh's _.isEqual() function.
 */

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {

  if(o1 === null || o2 === null) {
    return o1 === o2;
  }

  if(typeof o1 !== typeof o2) {
    return false;
  }

  if(typeof o1 !== 'object') {
    // o1 and o2 are the same primitive types
    return o1 === o2;
  }

  if(Array.isArray(o1) || Array.isArray(o2)) { // One or both Of Them is an Array 
    if(String(o1) !== String(o2)) {
      // one of them is an array and the other is an object OR they are two different arrays
      return false;
    }

    // by this point we garentie that they both arrays with the same length, but maybe they contains some object(non primitive) values that we need to deeply check them
    for(let i = 0; i < o1.length; i += 1) {
      if(!areDeeplyEqual(o1[i], o2[i])) {
        return false;
      }
    }

  } else { // Both Objects
    // checking the length of the object keys
    if(Object.keys(o1).length !== Object.keys(o2).length) {
      return false;
    }

    for(const key in o1) {
      if(!areDeeplyEqual(o1[key], o2[key])) {
        return false;
      }
    }
  }

  return true;
};

/**
Test Case 1:
  Input:
  o1 = {"x":1,"y":2}
  o2 = {"x":1,"y":2}
  Output:
  true

Explanation:
The keys and values match exactly.

Test Case 2:
  Input:
  o1 = {"y":2,"x":1}
  o2 = {"x":1,"y":2}
  Output:
  true

Explanation:
Although the keys are in a different order, they still match exactly.

Test Case 3:
  Input:
  o1 = {"x":null,"L":[1,2,3]}
  o2 = {"x":null,"L":["1","2","3"]}
  Output:
  false

Explanation:
The array of numbers is different from the array of strings.
 */

console.log(areDeeplyEqual({"x":1,"y":2}, {"x":1,"y":2}));
console.log(areDeeplyEqual({"y":2,"x":1}, {"x":1,"y":2}));
console.log(areDeeplyEqual({"x":null,"L":[1,2,3]}, {"x":null,"L":["1","2","3"]}));