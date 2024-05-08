// https://leetcode.com/problems/relative-ranks/

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const n = score.length;
  const scorePlaces = {};
  for (let i = 0; i < n; i += 1) {
    scorePlaces[score[i]] = i;
  }

  score.sort((a, b) => (b - a));

  const output = new Array(n);

  for (let i = 0; i < n; i += 1) {
    if (i === 0) output[scorePlaces[score[i]]] = "Gold Medal";
    else if (i === 1) output[scorePlaces[score[i]]] = "Silver Medal";
    else if (i === 2) output[scorePlaces[score[i]]] = "Bronze Medal";
    else output[scorePlaces[score[i]]] = String(i+1);
  }

  return output;
};
