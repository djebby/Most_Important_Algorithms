// https://leetcode.com/problems/increasing-triplet-subsequence/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  /**
   * linear scan that do this: - keep track of the smallest number seen so far
   *                           - search for the second smallest number in front of the smallest
   *                           - search for the third smallest number that his position in front of the smallest and the second smallest
   *                             if we found this third number we are done, we found the final number of the triplet that satisfy the condition
   */
  
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    if (first >= num) first = num; // save the smallest number seen so far
    else if (second >= num) second = num; // save the second smallest number seen so far in front of the smallest one (HIS INDEX IS GREATER THAN THE INDEX OF THE SMALLEST NUMBER SEEN SO FAR (fisrt))
    else return true; // we found a number that is greater then first and second, and we are sure that the index of this num is greater then the indexes of first and second (his in front of both of them) so we found a valid triplet
  }

  return false; // we finish our linear scan without finding any result
};
