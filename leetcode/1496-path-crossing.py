# https://leetcode.com/problems/path-crossing/

class Solution:
    def isPathCrossing(self, path: str) -> bool:
        x, y = 0, 0
        point = str(x) + ',' + str(y)
        visited_points = set([point])
        for dir in path:
            if dir == 'N': y += 1
            elif dir == 'S': y -= 1
            elif dir == 'E': x += 1
            else: x -= 1
            point = str(x) + ',' + str(y)
            if point in visited_points: return True
            visited_points.add(point)
        
        return False
