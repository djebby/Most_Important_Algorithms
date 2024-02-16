# https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/

from typing import List

class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        freq = Counter(arr)
        heap = list(freq.values())
        heapq.heapify(heap) # min heap

        while len(heap) > 0 and k >= heap[0]:
            k -= heapq.heappop(heap)
        
        return len(heap)
