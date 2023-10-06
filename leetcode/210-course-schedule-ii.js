// https://leetcode.com/problems/course-schedule-ii/ (top-interview-questions)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const coursePrerequisites = {};

  for (let course = 0; course < numCourses; course += 1) {
    coursePrerequisites[course] = [];
  }

  for (const [course, prerequisite] of prerequisites) {
    coursePrerequisites[course].push(prerequisite);
  }

  const ordering = [];
  const visited = new Set();
  const processed = new Set();

  const dfs = (course) => {
    if (processed.has(course)) {
      return true;
    }

    if (visited.has(course)) {
      return false;
    }

    visited.add(course);
    for (const prerequisite of coursePrerequisites[course]) {
      if (!dfs(prerequisite)) {
        return false;
      }
    }
    visited.delete(course);

    processed.add(course);
    ordering.push(course);
    return true;
  }


  for (let course = 0; course < numCourses; course += 1) {
    if (!dfs(course)) {
      return [];
    }
  }

  return ordering;
};
