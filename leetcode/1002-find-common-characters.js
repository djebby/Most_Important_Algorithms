// https://leetcode.com/problems/find-common-characters/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  const freqs = {};

  for (const word of words) {
    const wordFreq = {};
    for (let i = 0; i < word.length; i += 1) {
      wordFreq[word.charAt(i)] = (wordFreq[word.charAt(i)] || 0) + 1;
    }

    for (let i = 97; i <= 122; i += 1) {
      const char = String.fromCharCode(i);
      freqs[char] = Math.min((freqs[char] === undefined ?  Infinity : freqs[char]), (wordFreq[char] === undefined ? 0 : wordFreq[char]));
    }
  }

  const commons = [];
  for (const char in freqs) for (let i = 0; i < freqs[char]; i += 1) commons.push(char);

  return commons;
};
