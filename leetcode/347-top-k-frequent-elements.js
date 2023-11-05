// https://leetcode.com/problems/top-k-frequent-elements/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

  // build a number -> frequency HashMap and keep track of the max frequency...
  const numberFrequency = {};
  let maxFrequency = 0;
  for (const num of nums) {
    if (!numberFrequency.hasOwnProperty(num)) numberFrequency[num] = 0;
    numberFrequency[num] += 1;
    maxFrequency = Math.max(maxFrequency, numberFrequency[num]);
  }

  // build a frequencies buckets where the i'th bucket contains the set of numbers that have frequency == i
  const frequenciesBuckets = [];
  for (let i = 0; i <= maxFrequency; i += 1) frequenciesBuckets.push([]);

  for (const [num, freq] of Object.entries(numberFrequency)) {
    frequenciesBuckets[freq].push(num);
  }

  // loop through each bucket in a descending order and push the numbers of that bucket in the topKs array
  // we must also decrement the value of (k) by the number of inserted element in each loop until k == 0
  const topKs = []; // the answer array
  for (let i = maxFrequency; i > 0; i -= 1) {
    if (frequenciesBuckets[i].length === 0) continue; 
    topKs.push(...frequenciesBuckets[i]);
    k -= frequenciesBuckets[i].length;
    if (k === 0) return topKs;
  }

};
