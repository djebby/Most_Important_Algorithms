# https://leetcode.com/problems/find-players-with-zero-or-one-losses/

from typing import List

class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        losses_count = {} # player lost matches count
        
        for winner, loser in matches:
            if winner not in losses_count:
                losses_count[winner] = 0
            if loser not in losses_count:
                losses_count[loser] = 0
            
            losses_count[loser] += 1
        
        answer = [[], []]
        
        for player, loses in losses_count.items():
            if loses == 0:
                answer[0].append(int(player))
            elif loses == 1:
                answer[1].append(int(player))
        
        answer[0].sort()
        answer[1].sort()

        return answer

