/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagramsGroups = {};

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!anagramsGroups.hasOwnProperty(sortedStr)) {
      anagramsGroups[sortedStr] = [];
    }
    anagramsGroups[sortedStr].push(str);
  }

  return Object.values(anagramsGroups);
};