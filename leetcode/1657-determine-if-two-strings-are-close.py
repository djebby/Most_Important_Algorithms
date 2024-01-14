# https://leetcode.com/problems/determine-if-two-strings-are-close/ 

from collections import Counter

class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False
        
        word1_char_count = Counter(word1)
        word2_char_count = Counter(word2)
        word1_char_set = set(word1_char_count.keys())
        word2_char_set = set(word2_char_count.keys())

        if word1_char_set != word2_char_set:
            return False
    
        if word1_char_count == word2_char_count:
            return True

        # at this point we are sure that all char set are the same 
        # so we just need to check the chars frequencies count values 
        return Counter(list(word1_char_count.values())) == Counter(list(word2_char_count.values()))
