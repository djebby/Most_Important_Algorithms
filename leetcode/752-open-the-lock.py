# https://leetcode.com/problems/open-the-lock/

from collections import deque
from typing import List


class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        target = int(target)
        source = 0
        deadends_vtx = set()
        for deadend in deadends:
            deadends_vtx.add(int(deadend))

        # base cases 
        if source in deadends_vtx or len(self.get_neighbors(source, deadends_vtx)) == 0 or len(self.get_neighbors(target, deadends_vtx)) == 0:
            return -1

        queue = deque([source])

        length = 0
        visited = set([source])

        while len(queue) > 0:
            layer_length = len(queue)
            while layer_length > 0:
                node = queue.popleft()
                if node == target:
                    return length
                neighbors = self.get_neighbors(node, deadends_vtx)
                for neighboor in neighbors:
                    if neighboor not in visited:
                        visited.add(neighboor)
                        queue.append(neighboor)
                
                layer_length -= 1
            
            length += 1
        
        return -1
    
    def get_neighbors(self, vertex, deadend_set):
        digits = [
            int(vertex / 1000),
            int((vertex % 1000) / 100),
            int((vertex % 100) / 10),
            vertex % 10
        ]

        neighbors = []
        for i in range(4):
            up = digits[:]
            down = digits[:]

            if digits[i] == 0:
                up[i] = 9
                down[i] = 1
            elif digits[i] == 9:
                up[i] = 8
                down[i] = 0
            else:
                up[i] -= 1
                down[i] += 1
            
            up_neighbor = (1000 * up[0] + 100 * up[1] + 10 * up[2] + up[3])
            down_neighbor = (1000 * down[0] + 100 * down[1] + 10 * down[2] + down[3])

            if up_neighbor not in deadend_set: neighbors.append(up_neighbor)
            if down_neighbor not in deadend_set: neighbors.append(down_neighbor)
        
        return neighbors
