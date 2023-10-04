// https://leetcode.com/problems/course-schedule/ (top-interview-questions)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

  const coursePrerequisites = {};

  for (let i = 0; i < numCourses; i += 1) {
    coursePrerequisites[i] = [];
  }

  for (const [course, prerequisite] of prerequisites) {
    coursePrerequisites[course].push(prerequisite);
  }

  const visited = new Set();
  const dfs = (course) => {
    if (coursePrerequisites[course].length === 0) {
      return true;
    }

    if (visited.has(course)) {
      return false;
    }

    visited.add(course);
    for (const prerequisite of coursePrerequisites[course]) {
      if (!dfs(prerequisite)) return false;
    }
    visited.delete(course);
    coursePrerequisites[course] = [];

    return true;
  }

  for (let course = 0; course < numCourses; course += 1) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};
