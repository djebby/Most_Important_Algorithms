// https://leetcode.com/problems/reverse-integer/ (top-interview-questions)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX = (2 ** 31) - 1;
  const MIN = -(2**31);

  let reversedX = 0;

  while (x !== 0) {
    const digit = x % 10;

    if ((reversedX > (MAX - digit) / 10) || (reversedX < (MIN - digit) / 10)) {
      /**
       * what's meaning reversedX > (MAX - digit) / 10 ?
       * => reversedX * 10 > (MAX - digit) => reversedX * 10 + digit > MAX
       * => so that's mean that when i will calculate the next value of reversedX
       * i will get a value greater then the MAX value ( 2^31 - 1 )
       * 
       * what's meaning reversedX < (MIN - digit) / 10 ?
       * => reversedX * 10 < (MIN - digit) => reversedX * 10 + digit < MIN
       * => so that's mean that when i will calculate the next value of reversedX
       * i will get a value less then the MIN value -(2^31)
       */
      return 0;
    }

    reversedX = reversedX * 10 + digit;
    x = Math.trunc(x / 10);

  }

  return reversedX;

};
