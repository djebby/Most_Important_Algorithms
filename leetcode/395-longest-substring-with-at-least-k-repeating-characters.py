# https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/ (top-interview-questions)

from collections import Counter

class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        if len(s) == 0 or len(s) < k:
            return 0
        if k == 1:
            return len(s)
        
        count = Counter(s) # the frequency of each character in the string

        # set of the invalid characters ( chars with freq less then k )
        # a set of characters that for sure they can not existed in any valid substring
        invalid = set() 
        for char in count:
            if count[char] < k:
                invalid.add(char)
        
        # if there is no invalid chars (the hole freq. of chars >= k) return the hole length of s
        if len(invalid) == 0: 
            return len(s)
        # if there are no valid chars (the hole freqs of chars < k) return 0
        if len(invalid) == len(s):
            return 0
        
        result = 0
        start = 0
        for i in range(len(s)):
            if s[i] in invalid:
                # if we found a char that we know for sure that is can not be included in any valid substring
                # we need to check the substring that we reached until this point using a recursion call of the func
                result = max(result, self.longestSubstring(s[start:i], k))
                start = i + 1 # we need to update our start pointer
        
        return max(result, self.longestSubstring(s[start:], k))
