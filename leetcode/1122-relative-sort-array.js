// https://leetcode.com/problems/relative-sort-array/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const arr1NumsFreq = {};
  for (const num of arr1) arr1NumsFreq[num] = (arr1NumsFreq[num] || 0) + 1;

  const sortedArr1 = [];
  for (const num of arr2) {
    while (arr1NumsFreq[num] > 0) {
      sortedArr1.push(num);
      arr1NumsFreq[num] -= 1;
    }
    delete arr1NumsFreq[num];
  }

  const keys = Object.keys(arr1NumsFreq).sort((a, b) => (a - b));
  
  for (const num of keys) {
    while (arr1NumsFreq[num] > 0) {
      sortedArr1.push(+num);
      arr1NumsFreq[num] -= 1;
    }
  }

  return sortedArr1;

};
