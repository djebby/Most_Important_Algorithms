// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/ (30-day-javascript-challenge)

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  // return Promise.all(functions.map((func) => func())); // solve it without using the built-in Promise.all function.

  
  return new Promise((resolve, reject) => {
    const n = functions.length;
    let resolvedCount = 0;
    const resolvedValues = new Array(n);

    for (let i = 0; i < n; i += 1) {
      functions[i]()
      .then((res) => {
        resolvedValues[i] = res;
        resolvedCount += 1;
        if (resolvedCount === n) resolve(resolvedValues);
      })
      .catch((error) => reject(error));
    }

  });

};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
