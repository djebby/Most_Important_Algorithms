# https://leetcode.com/problems/counting-bits/


from typing import List


class Solution:
    # O(n) runtime solution
    def countBits(self, n: int) -> List[int]:
        ans = [0]
        offset = 1
        for i in range(1, n+1):
            if offset * 2 == i: offset = i
            ans.append(1 + ans[i - offset])
        return ans

    # O(n log n) runtime solution
    def count_bits(self, n: int) -> List[int]:
        ans = []
        for i in range(n+1):
            ones, n = 0, i
            while n:
                n &= n-1
                ones += 1
            ans.append(ones)
        return ans