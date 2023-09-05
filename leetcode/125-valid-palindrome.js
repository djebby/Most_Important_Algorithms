// https://leetcode.com/problems/valid-palindrome/ (top-interview-questions)

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
  let l = 0;
  let r = s.length - 1;

  while (l <= r) {
    
    if (!/^[a-zA-Z0-9]*$/.test(s.charAt(l))) {
      l += 1;
      continue;
    };

    if (!/^[a-zA-Z0-9]*$/.test(s.charAt(r))) {
      r -= 1;
      continue;
    };

    if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) return false;
    
    l += 1;
    r -= 1;
  }

  return true;
  
};
