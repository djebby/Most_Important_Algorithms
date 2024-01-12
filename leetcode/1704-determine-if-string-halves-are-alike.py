# https://leetcode.com/problems/determine-if-string-halves-are-alike/

class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = set("aeiouAEIOU")
        aHalf = 0
        bHalf = 0
        for i in range(len(s) // 2):
            if s[i] in vowels:
                aHalf += 1
        for i in range(len(s) // 2, len(s)):
            if s[i] in vowels:
                bHalf += 1

        return aHalf == bHalf
