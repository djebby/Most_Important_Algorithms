# https://leetcode.com/problems/group-anagrams/ (top-interview-questions)

from typing import List
from collections import defaultdict

def groupAnagrams(strs: List[str]) -> List[List[str]]:
	buckets = defaultdict(list)
	for string in strs:
		# we give every anagrame of the same group the same hash
		hash = ''.join(sorted(string))
		buckets[hash].append(string)

	return buckets.values()