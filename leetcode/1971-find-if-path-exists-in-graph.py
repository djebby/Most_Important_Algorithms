# https://leetcode.com/problems/find-if-path-exists-in-graph/

from collections import defaultdict
from typing import List

class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        adj_list = defaultdict(list)
        for src, dest in edges:
            adj_list[src].append(dest)
            adj_list[dest].append(src)
        
        visited = set()
        def dfs(vertex):
            if vertex in visited: return False
            if vertex == destination: return True

            visited.add(vertex)
            for neighboor in adj_list[vertex]:
                if dfs(neighboor): return True
            
            return False

        return dfs(source)
