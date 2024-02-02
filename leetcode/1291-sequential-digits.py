# https://leetcode.com/problems/sequential-digits/

class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        sequences = []

        for offset in range(1, 10):
            acc = 0
            for i in range(10 - offset):
                acc = offset + (acc * 10 + i)
                if acc > high: break
                if acc >= low: sequences.append(acc)
        
        sequences.sort()
        return sequences
