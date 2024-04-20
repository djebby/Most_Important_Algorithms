# https://leetcode.com/problems/find-all-groups-of-farmland/

from typing import List

class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        m = len(land)
        n = len(land[0])
        groups_coordinations = []

        visited = set()
        def find_bottom_right(r, c):
            right = c
            while right + 1 < n and land[r][right + 1] == 1: right += 1
            bottom = r
            while bottom + 1 < m and land[bottom + 1][right] == 1: bottom += 1
            for i in range(r, bottom + 1):
                for j in range(c, right + 1):
                    visited.add((i, j))

            return [bottom, right]

        for i in range(m):
            for j in range(n):
                if land[i][j] == 1 and (i, j) not in visited:
                    groups_coordinations.append([i, j] + find_bottom_right(i, j))

        return groups_coordinations
