# https://leetcode.com/problems/longest-palindromic-substring/ (top-interview-questions)

class Solution:
    def longestPalindrome(self, s: str) -> str:
        palindrome = ''
        length = 0

        for i in range(len(s)):
            # check odd palindroms
            l, r = i, i
            # two-pointer approach to expand around each character in the string
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > length:
                    palindrome = s[l:r+1]
                    length = r-l+1
                l -= 1
                r += 1
            
            # check even palindroms
            l, r = i, i+1
            # two-pointer approach to expand around each character in the string
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > length:
                    palindrome = s[l:r+1]
                    length = r - l + 1
                l -= 1
                r += 1

        return palindrome