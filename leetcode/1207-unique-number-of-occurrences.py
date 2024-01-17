# https://leetcode.com/problems/unique-number-of-occurrences/

from typing import List
from collections import Counter

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        number_occurrences = Counter(arr)
        occurrences_set = set()
        for occurrence in number_occurrences.values():
            if occurrence in occurrences_set:
                return False
            occurrences_set.add(occurrence)
        
        return True
