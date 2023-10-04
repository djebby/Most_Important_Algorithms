# https://leetcode.com/problems/course-schedule/ (top-interview-questions)

from typing import List

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # { courseNumber: [course_prerequisites1, course_prerequisites2, ...], ...}
        adjList = {i:[] for i in range(numCourses)}

        # every course point to his prerequisites
        for crs, pre in prerequisites:
            adjList[crs].append(pre)
        
        visited = set()

        def depthFirstSearch(crs):
            # if we detect a loop that mean it's impossible to take this course
            # because this course require him self wich is impossible...
            if crs in visited:
                return False
            
            # if a course does not require any prerequisites...
            # that's mean that we can take this course...
            if len(adjList[crs]) == 0:
                return True
            
            visited.add(crs)
            for pre in adjList[crs]:
                if not depthFirstSearch(pre):
                    return False
            visited.remove(crs)
            # if we reach this point that's mean that this course can be completed
            # so we just remove his prerequisites to mark him as course that we can complete
            adjList[crs] = []
            return True
        
        # we make a loop through every course number because it is possible that the graph of
        # course prerequisition not connected totaly it's possible to have seperated graphs...
        for course in range(numCourses):
            if not depthFirstSearch(course):
                return False

        return True
