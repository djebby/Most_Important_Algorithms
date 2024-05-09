// https://leetcode.com/problems/maximize-happiness-of-selected-children/

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
  happiness.sort((a, b) => (b - a));

  let sum = 0;
  for (let i = 0; i < k; i += 1) {
    if (happiness[i] - i <= 0) break;
    sum += (happiness[i] - i);
  }

  return sum;
};
