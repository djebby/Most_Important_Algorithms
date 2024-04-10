// https://leetcode.com/problems/reveal-cards-in-increasing-order/

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => (a - b));
  const queue = deck.map((val, index) => index);
  const output = new Array(deck.length);
  for (const card of deck) {
    output[queue.shift()] = card;
    if (queue.length > 0) queue.push(queue.shift());
  }

  return output;
};
