# https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

from collections import Counter
from typing import List

class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        counter = Counter(students)

        for sandwiche in sandwiches:
            if counter[sandwiche] == 0:
                return max(counter[0], counter[1])
            else:
                counter[sandwiche] -= 1

        return 0
