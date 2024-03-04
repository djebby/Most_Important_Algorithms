// https://leetcode.com/problems/bag-of-tokens/

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {

  tokens.sort((a, b) => (a - b));
  
  let faceUp = 0;
  let faceDown = tokens.length - 1;
  
  let maxScore = 0;
  let score = 0;
  while (faceUp <= faceDown) {
    if (tokens[faceUp] <= power) {
      power -= tokens[faceUp];
      score += 1;
      faceUp += 1;
    } else if (score > 0) {
      power += tokens[faceDown];
      score -= 1;
      faceDown -= 1;
    } else {
      break;
    }

    maxScore = Math.max(maxScore, score);
  }

  return maxScore;
};
