# https://leetcode.com/problems/word-break/ (top-interview-questions)

from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        tabulation = [False] * (len(s)+1)
        tabulation[len(s)] = True

        for i in reversed(range(len(s))):
            for word in wordDict:
                if i+len(word) < len(tabulation) and s[i: i+len(word)] == word and tabulation[i+len(word)] == True:
                    tabulation[i] = True
                    break
                    
        print(tabulation)
        return tabulation[0]
