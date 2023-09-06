// https://leetcode.com/problems/longest-consecutive-sequence/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  
  let longestSequence = 1;
  const hashSet = new Set(nums);

  for (const num of nums) {
    if (!hashSet.has(num)) continue;
    
    hashSet.delete(num);
    let l = num - 1;
    let r = num + 1;
    while (hashSet.has(l) || hashSet.has(r)) {
      if (hashSet.has(l)) {
        hashSet.delete(l);
        l -= 1;
      }
      if (hashSet.has(r)) {
        hashSet.delete(r);
        r += 1;
      }
    }

    longestSequence = Math.max(longestSequence, (r - l - 1));
  }

  return longestSequence;

};


var longestConsecutive = function(nums) {
  
  let longestSequence = 0;

  const hashSet = new Set(nums);

  for (const num of nums) {
    if (hashSet.has(num - 1)) {
      // it's not a start of consecutive sequence
      continue;
    }

    // num is a start of a consecutive sequence, let's compute her length
    let length = 1;
    while (hashSet.has(num + length)) {
      length += 1;
    }
    longestSequence = Math.max(longestSequence, length);
  }

  return longestSequence;
}
