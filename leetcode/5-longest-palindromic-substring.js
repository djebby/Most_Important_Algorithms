// https://leetcode.com/problems/longest-palindromic-substring/ (top-interview-questions)

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  
  let palindrome = "";

  for (let i = 0; i < s.length; i++) {
    const longestPalAroundI = longestPalindromAround(i, s);
    if ( palindrome.length < longestPalAroundI.length ) {
      palindrome = longestPalAroundI;
    }
  }

  return palindrome;
};


const longestPalindromAround = function (i, s) {

  let palindrome = "";
  
  // check odd length palindroms
  let l = i;
  let r = i;
  while ( l >= 0 && r < s.length && s[l] === s[r]) {
    if (palindrome.length < (r-l+1)) {
      palindrome = s.slice(l, r+1);
    }
    l -= 1;
    r += 1;
  }

  // check for even length palindroms
  l = i;
  r = i + 1;
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    if (palindrome.length < (r-l+1)) {
      palindrome = s.slice(l, r+1);
    }
    l -= 1;
    r += 1;
  }

  return palindrome;
}