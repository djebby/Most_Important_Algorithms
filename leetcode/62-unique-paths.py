# https://leetcode.com/problems/unique-paths/ (top-interview-questions)

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # top-down approach (memoization)

        cache = dict()

        def dfs(r, c):
            if r == m-1 or c == n-1:
                return 1
            if (r, c) in cache:
                return cache[(r, c)]

            unique_paths = dfs(r+1, c) + dfs(r, c+1)
            cache[(r, c)] = unique_paths
            return unique_paths

        return dfs(0, 0)
    

    def uniquePaths2(self, m: int, n: int) -> int:
        # bottom-up approach (tabulation)

        tab = [1] * n

        for _ in range(m-1):
            for i in reversed(range(n-1)):
                tab[i] += tab[i+1]

        return tab[0]

