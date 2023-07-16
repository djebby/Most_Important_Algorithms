# https://leetcode.com/problems/roman-to-integer/ (top-interview-questions)

class Solution:
    def romanToInt(self, s: str) -> int:
        symbolValue = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

        integer = 0

        for i in range(len(s)):
            if i < len(s)-1 and symbolValue[s[i]] < symbolValue[s[i+1]]:
                integer -= symbolValue[s[i]]
            else: 
                integer += symbolValue[s[i]]

        return integer