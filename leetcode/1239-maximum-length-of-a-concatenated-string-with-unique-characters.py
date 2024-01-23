# https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

from typing import List

class Solution:
    def maxLength(self, arr: List[str]) -> int:
        

        def backtracking(i, subsequence):
            char_set = set()
            for string in subsequence:
                for char in string:
                    if char in char_set:
                        return 0
                    char_set.add(char)
            
            if i == len(arr):
                return len(char_set)


            subsequence.append(arr[i])
            max_ = backtracking(i+1, subsequence)
            subsequence.pop()
            max_ = max(max_, backtracking(i+1, subsequence))
            return max_
        
        return backtracking(0, [])
