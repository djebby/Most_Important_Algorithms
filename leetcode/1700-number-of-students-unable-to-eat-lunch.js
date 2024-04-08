// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {

  const counter = {'0': 0, '1': 0};

  for (let student of students) {
    counter[student] += 1;
  }

  for (let sandwiche of sandwiches) {
    if (counter[sandwiche] === 0) return Math.max(counter['0'], counter['1']);
    else counter[sandwiche] -= 1;
  }

  return 0;
};
