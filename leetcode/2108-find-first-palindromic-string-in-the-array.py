# https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

from typing import List

class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        def is_palindrome(s):
            l = 0
            r = len(s) - 1
            while l < r:
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True

        for word in words:
            if is_palindrome(word):
                return word
        
        return ""
