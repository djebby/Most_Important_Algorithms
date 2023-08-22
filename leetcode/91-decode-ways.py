# https://leetcode.com/problems/decode-ways/ (top-interview-questions)

class Solution:
    def numDecodings(self, s: str) -> int:
        cache = dict()
        
        def dfs(i):
            if i == len(s):
                return 1
            if i in cache:
                return cache[i]
            if s[i] == '0':
                return 0
            
            result = dfs(i+1) # in this recursion call we try to split the number into part of single digit
            # here we see if we can to split the number into part of two digits
            if i+1 < len(s) and s[i:i+2] < '27':
                result += dfs(i+2)

            cache[i] = result
            return result
        
        return dfs(0)
