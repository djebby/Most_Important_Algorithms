// https://leetcode.com/problems/chunk-array/ (30-day-javascript-challenge)

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  const chunkedArr = [];
  
  for(let idx = 0; idx < arr.length; idx += size) {
    chunkedArr.push(arr.slice(idx, idx+size));
  }

  return chunkedArr;
  
  //----------------------------------------------------------------solution two (without slice method)
  let idx = 0;
  while (idx < arr.length) {
    const chunkEnd = Math.min((idx + size), arr.length); // end index of the current chunk
    const chunk = [];
    for (let i = idx; i < chunkEnd; i++) {
      chunk.push(arr[idx]);
      idx += 1;
    }
    chunkedArr.push(chunk);
  }
  return chunkedArr;
};
