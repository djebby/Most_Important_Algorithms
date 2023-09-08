// https://leetcode.com/problems/palindrome-partitioning/ (top-interview-questions)

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {


  const partitions = [];
  const partition = [];


  const isPalindrom = (str) => {

    let l = 0;
    let r = str.length - 1;

    while (l < r) {
      if (str[l] !== str[r]) {
        return false;
      }
      l += 1;
      r -= 1;
    }
    return true;
  };


  const generatePartitions = (i) => {
    if (i === s.length) {
      partitions.push([...partition]);
      return;
    }

    for (let j = i+1; j <= s.length; j++) {
      const subStr = s.slice(i, j);
      if (!isPalindrom(subStr)) {
        continue;
      }
      partition.push(subStr);
      generatePartitions(j);
      partition.pop();
    }

  }

  generatePartitions(0);

  return partitions;

};
