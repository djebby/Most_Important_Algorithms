// https://leetcode.com/problems/reverse-prefix-of-word/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  word = word.split('');

  let l = 0, r = 0;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === ch) {
      r = i;
      break;
    }
  }

  while (l < r) {
    [word[l], word[r]] = [word[r], word[l]];
    l += 1;
    r -= 1;
  }

  return word.join('');
};
