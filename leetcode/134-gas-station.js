// https://leetcode.com/problems/gas-station/ (top-interview-questions)

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const diff = [];
  let totalDiff = 0;

  for (let i = 0; i < gas.length; i += 1) {
    diff.push(gas[i] - cost[i]);
    totalDiff += (gas[i] - cost[i]);
  }

  // gas total sum < cost total sum => so we have not enough cas to make a tour
  if (totalDiff < 0) return -1;

  let tank = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i += 1) {
    tank += diff[i];
    if (tank < 0) {
      start = i+1;
      tank = 0;
    }
  }

  return start;
};
