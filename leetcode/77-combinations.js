// https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const combinations = [];
  const combination = [];
  const backtracking = (num) => {
    if (combination.length === k) {
      combinations.push([...combination]);
      return;
    }

    if (num>4) {
      console.log(num);
      console.log(combination);
    }

    for (let i = num; i <= n; i++) {
      combination.push(i);
      backtracking(i+1);
      combination.pop();
    }
  };

  backtracking(1);
  return combinations;
};


console.log(combine(4, 2));