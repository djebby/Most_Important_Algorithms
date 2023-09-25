// https://leetcode.com/problems/factorial-trailing-zeroes/ (top-interview-questions)

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let counter = 0;

  // devise n by 5 as mush as you can...
  while (n > 0) {
    n = Math.floor(n / 5);
    counter += n;
  }

  return counter;
};

/**
 * why this works...
 * the presence of (5 * 2) PAIRS in the factorial numbers leads to a new zero since 5 * 2 = 10, and the result of multiplining any number by 10 is to add a new zero at the right of that number
 * if we can count the presence of the number 5 in the factoriel numbers we can found the result ( why the number 5 ? the number 2 occurence is always greater than the occurence of the number 5)
 * so the number of (5*2) pairs is related to the occurence of the number 5 not the occurence of the number 2
 * so the problem is to find from how mush fives in the numbers of n!
 * let n = 64;
 * n! = 64 * 63 * 62 * 61 * (60=12*5) * 59 * 58 * 57 * 56 * (55=11*5) * 54 * 53 * 52 * 51 * (50=2*5*5) * 49 * 48 * 47 * 46 * (45=9*5) * 44 * 43 * 42 * 41 * (40=8*5) * 39 * 38 * 37 * 36 * (35=7*5) * 34 * 33 * 32 * 31 * (30=6*5) * 29 * 28 * 27 * 26 * (25=5*5) * 24 * 23 * 22 * 21 * (20=4*5) * 19 * 18 * 17 * 16 * (15=3*5) * 14 * 13 * 12 * 11 * (10=2*5) * 9 * 8 * 7 * 6 * (5=1*5) * 4 * 3 * 2 * 1
 * trailing zeroes =           +1                               +1                              +2                              +1                             +1                             +1                             +1                             +2                             +1                             +1                             +1                          +1             = 14
 */