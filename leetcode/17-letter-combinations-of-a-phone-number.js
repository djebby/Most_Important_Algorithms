// https://leetcode.com/problems/letter-combinations-of-a-phone-number/ (top-interview-questions)


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits.length == 0) return [];
  const hashMap = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};
  const combinations = [];
  const combination = [];

  function backtracking(i) {
    if(combination.length === digits.length) {
      combinations.push(combination.join(""));
      return;
    }

    for(const char of hashMap[digits[i]]) {
      combination.push(char);
      backtracking(i+1);
      combination.pop();
    }
  }

  backtracking(0);
  return combinations;

};

console.log(letterCombinations("23"));