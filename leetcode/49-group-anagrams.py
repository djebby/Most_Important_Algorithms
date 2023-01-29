# https://leetcode.com/problems/group-anagrams/ (top-interview-questions)
from collections import Counter, defaultdict
from typing import List

# slow solution
def groupAnagrams00(strs: List[str]) -> List[List[str]]:
    bucket = [ [strs[0]] ]
    for string in strs[1:]:
        is_groupped = False
        for i in range(len(bucket)):
            if Counter(string) == Counter(bucket[i][0]):
                bucket[i].append(string)
                is_groupped = True
                break
        if not is_groupped:
            bucket.append([string])
    return bucket



# more optimal solutions
def groupAnagrams01(strs: List[str]) -> List[List[str]]:
    buckets = defaultdict(list)
    for string in strs:
        count = [0] * 26
        # we give every anagrame of the same group the same hash
        for char in string: count[ord(char) - ord('a')] += 1
        
        buckets[tuple(count)].append(string)
    return buckets.values()



def groupAnagrams02(strs: List[str]) -> List[List[str]]:
    buckets = dict()
    for string in strs:
        # we give every anagrame of the same group the same hash
        hash = ''.join(sorted(string))
        if hash in buckets: buckets[hash].append(string)
        else: buckets[hash] = [string]

    return buckets.values()