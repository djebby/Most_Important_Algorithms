

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  // follow up: could you solve it without converting the integer to a string ?
  let originalX = x;
  let reversedX = 0;

  while (x > 0) {
    reversedX = reversedX * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }

  return originalX === reversedX;
};


isPalindrome(121);