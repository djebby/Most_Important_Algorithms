// https://leetcode.com/problems/replace-words/

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {

  const dictionarySet = new Set(dictionary);

  sentence = sentence.split(' ');

  for (let i = 0; i < sentence.length; i += 1) {
    for (let j = 0; j <= sentence[i].length; j += 1) {
      const slice = sentence[i].slice(0, j);
      if (dictionarySet.has(slice)) sentence[i] = slice;
    }
  }

  return sentence.join(' ');
  
};
