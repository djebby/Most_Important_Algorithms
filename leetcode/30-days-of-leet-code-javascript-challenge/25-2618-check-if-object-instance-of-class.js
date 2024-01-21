// https://leetcode.com/problems/check-if-object-instance-of-class/

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  // base cases: obj is (null or undefined) or classFunction is not a function
  if (obj === null || obj === undefined || typeof classFunction !== "function") {
    return false;
  }

  // base cases: obj is primitive
  switch(typeof obj) {
    case "number":
      return classFunction === Number || classFunction === Object; // if typeof obj === "number" then obj is an instance of Number AND ALSO OF Object because Number inherit Object
      break;
    case "boolean":
      return classFunction === Boolean || classFunction === Object; // Boolean Also inherit Object...
      break;
    case "string":
      return classFunction === String || classFunction === Object; // String Also inherit Object...
      break;
    case "bigint":
      return classFunction === BigInt || classFunction === Object; // BigInt Also inherit Object...
      break;
    case "symbol":
      return classFunction === Symbol || classFunction === Object; // Symbol Also inherit Object...
      break;
    default:
      return obj instanceof classFunction;
      break;
  }
};
