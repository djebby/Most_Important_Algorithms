# https://leetcode.com/problems/reverse-prefix-of-word/

class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        word = list(word)
        l = 0
        r = 0
        for i in range(len(word)):
            if word[i] == ch:
                r = i
                break
        
        while l < r:
            word[l], word[r] = word[r], word[l]
            l += 1
            r -= 1
        
        return "".join(word)
