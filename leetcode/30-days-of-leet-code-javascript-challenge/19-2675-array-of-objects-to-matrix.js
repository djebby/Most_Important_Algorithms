// https://leetcode.com/problems/array-of-objects-to-matrix/ (30-day-javascript-challenge)

/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
  
  /* main steps are : 1) build the first row of the matrix that contain all the key paths sorted in lexographically order
                      2) build the rest of the matrix row by row, loop through each object of arr and try to push a value
                         in the current row for each key paths saved in matrix[0] if there is no value push empty string. */

  const matrix = [];

  // gathering all the keys...
  const keySet = new Set();

  for (const obj of arr) {
    getKeys(obj, "");
  }

  matrix.push([...keySet].sort());
  
  function getKeys(obj, path) {
    for (const key in obj) {
      const currentPath = path === "" ? key : (path + "." + key);
      if (obj[key] !== null && typeof obj[key] === "object") {
        // nested object case => go in depth recursivelly...
        getKeys(obj[key], currentPath);
      } else {
        keySet.add(currentPath);
      }
    }
  }

  // gathering all the values...
  for (const obj of arr) {
    const keyVal = {}; // key path mapped to the value for this current obj only.
    getValues(obj, "", keyVal);
    const row = [];
    for (const key of matrix[0]) {
      row.push(keyVal.hasOwnProperty(key) ? keyVal[key] : "");
    }

    matrix.push(row);
  }

  function getValues(obj, path, keyVal) {
    for (const key in obj) {
      const currentPath = path === "" ? key : (path + "." + key);
      if (obj[key] !== null && typeof obj[key] === "object") {
        // nested object case => go in depth recursivelly...
        getValues(obj[key], currentPath, keyVal);
      } else {
        keyVal[currentPath] = obj[key];
      }
    }
  }

  return matrix;
};


const inputs = [
  [ {"b": 1, "a": 2}, {"b": 3, "a": 4} ],
  [ {"a": 1, "b": 2}, {"c": 3, "d": 4}, {} ],
  [ {"a": {"b": 1, "c": 2}}, {"a": {"b": 3, "d": 4}} ], 
  [ [{"a": null}], [{"b": true}], [{"c": "x"}] ]
];

for (const input of inputs) {
  const output = jsonToMatrix(input);
  console.log("Input: ",input, "\nOutput: ", output);
  console.log("-".repeat(50));
}



/**
 * Write a function that converts an array of objects arr into a matrix m.
 * 
 * arr is an array of objects or arrays. Each item in the array can be deeply
 * nested with child arrays and child objects. it can also contain numbers, strings,
 * booleans, and null values.
 * 
 * The first row m should be the column names. If there is no nesting, the column names
 * are the unique keys within the objects. if there is nesting, the column names are the
 * respective paths in the object separated by "."
 * 
 * Each of the remaining rows corresponds to an object in arr.
 * Each value in the matrix corresponds to a value in an object.
 * if a given object doesn't contain a value for a given column,
 * the cell should contain an empty string "".
 * 
 * The column in the matrix should be in lexographically ascending order.
 * 
 * Example 1:
 * Input: arr = [ {"b": 1, "a": 2}, {"b": 3, "a": 4} ]
 * Output: [["a", "b"], [2, 1], [4, 3]]
 * Explanation:
 * There are two unique column names in the two objects: "a" and "b".
 * "a": corresponds with [2, 4].
 * "b": corresponds with [1, 3]
 *----------------------------------------------------------------------------
 * Example 2:
 * Input: arr = [
 *          {"a": 1, "b": 2},
 *          {"c": 3, "d": 4},
 *          {}
 *        ]
 * Output:
 *  [
 *    ["a", "b", "c", "d"],
 *    [1, 2, "", ""],
 *    ["", "", 3, 4],
 *    ["", "", "", ""]
 *  ]
 * 
 * Explanation:
 * There are 4 unique column names: "a", "b", "c", "d".
 * The firt object has values associated with "a" and "b".
 * The second object has values associated with "c" and "d".
 * The third object has no keys, so it is just a row of empty strings.
 *----------------------------------------------------------------------------
 * Example 3:
 * Input:
 * arr = [
 *  {"a": {"b": 1, "c": 2}},
 *  {"a": {"b": 3, "d": 4}}
 * ]
 * 
 * Output:
 * [
 *  ["a.b", "a.c", "a.d"],
 *  [1, 2, ""],
 *  [3, "", 4]
 * ]
 * 
 * Explanation:
 * In this example, the objects are nested. The keys represent the full path to each value
 * separated by periods.
 * There are three paths: "a.b", "a.c", "a.d".
 * ----------------------------------------------------------------------------
 * Example 4:
 * Input:
 * arr = [
 *   [{"a": null}],
 *   [{"b": true}],
 *   [{"c": "x"}],
 * ]
 * Output:
 * [
 *  ["0.a", "0.b", "0.c"],
 *  [null, "", ""],
 *  ["", true, ""],
 *  ["", "", "x"]
 * ]
 * Explanation:
 * Arrays are also considered objects with their keys being being their indices.
 * Each array has one element so the keys are "0.a", "0.b", and "0.c".
 */
