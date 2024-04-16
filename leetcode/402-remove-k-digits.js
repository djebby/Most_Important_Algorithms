// https://leetcode.com/problems/remove-k-digits/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const nums = num.split('').map(digit => Number(digit));
  const stack = [];
  
  for (let digit of nums) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k -= 1;
    }

    stack.push(digit);
  }

  let i = 0;
  while(i < stack.length - k && stack[i] === 0) i += 1;
  if (stack.length === 0 || i === stack.length - k) return '0';

  return stack.slice(i, stack.length - k).join('');
};
