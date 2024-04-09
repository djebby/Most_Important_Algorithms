// https://leetcode.com/problems/time-needed-to-buy-tickets/

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  let time = 0;
  for (let i = 0; i < tickets.length; i += 1) {
    time += Math.min(tickets[i], (i > k ? tickets[k] - 1 : tickets[k]));
  }
  
  return time;
};
