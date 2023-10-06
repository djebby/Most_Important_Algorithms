# https://leetcode.com/problems/course-schedule-ii/ (top-interview-questions)

from typing import List


class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adjList = {course:[] for course in range(numCourses)}

        for course, prereq in prerequisites:
            adjList[course].append(prereq)

        ordering = list()
        processed = set()
        path_visited = set() # visited verteces in the current path
        def depthFirstSearch(course):
            # cycle detection
            if course in path_visited:
                return False
            
            # course already processed
            if course in processed:
                return True
            
            # add the course to the current path courses
            path_visited.add(course)
            # run dfs on the current course prerequisites
            for prereq in adjList[course]:
                # if a cycle has ben detected
                if depthFirstSearch(prereq) == False:
                    return False
            # remove the course from the current path courses
            path_visited.remove(course)

            # until this point the course does not require any prerequisites or all his
            # prerequisites has already ben processed and added to the ordering list
            # so we are now allowed to push him to the ordering list (since his prerequisite has alrady pushed)
            ordering.append(course)
            # we should mark this course as processed because it is possible that we can visit it again from another path
            # so to avoid add the course multiple time in the ordering list we need to mark him as processed
            processed.add(course)
            return True
        
        
        for course in range(numCourses):
            if depthFirstSearch(course) == False:
                return list()
        
        return ordering
