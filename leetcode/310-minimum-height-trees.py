# https://leetcode.com/problems/minimum-height-trees/

from collections import defaultdict, deque
from typing import List

class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n == 1: return [0]

        adj_list = defaultdict(list)
        for a, b in edges:
            adj_list[a].append(b)
            adj_list[b].append(a)
        
        queue = deque()
        edges_count = {}
        for node in range(n):
            if len(adj_list[node]) == 1:
                queue.append(node)
            edges_count[node] = len(adj_list[node])
        
        while n > 2:
            for _ in range(len(queue)):
                node = queue.popleft()
                for neighbor in adj_list[node]:
                    edges_count[neighbor] -= 1
                    if edges_count[neighbor] == 1:
                        queue.append(neighbor)
                n -= 1

        return list(queue)
