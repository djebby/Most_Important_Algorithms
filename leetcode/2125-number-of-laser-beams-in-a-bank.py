# https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

from typing import List

class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        laser_beams = 0
        r1 = 0
        r2 = 0

        for i in range(len(bank)):
            ones = bank[i].count("1")
            if ones == 0: continue

            r1 = r2
            r2 = ones
            laser_beams += (r1 * r2)
        
        return laser_beams
