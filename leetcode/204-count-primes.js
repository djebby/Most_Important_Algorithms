// https://leetcode.com/problems/count-primes/ (top-interview-questions)

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const primes = new Array(n).fill(true);

  let j;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (primes[i]) {
      j = i;
      while(i * j < n) {
        primes[i*j] = false;
        j += 1;
      }
    }
  }

  // return the number of prime numbers that are STRICTLY LESS than n.
  let counter = 0;
  for (let i = 2; i < n; i += 1) {
    if (primes[i]) {
      counter += 1;
    }
  }

  return counter;
};
