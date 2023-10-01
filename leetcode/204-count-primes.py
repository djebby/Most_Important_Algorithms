# https://leetcode.com/problems/count-primes/ (top-interview-questions)

from math import sqrt


class Solution:
    def countPrimes(self, n: int) -> int:
        """
        In mathematics, the sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit.
        https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
        """
        primes = [True] * n

        for i in range(2, int(sqrt(n))+1):
            if primes[i]:
                j = i
                while i * j < n:
                    primes[i*j] = False
                    j += 1

        counter = 0
        # of course we do not count 0 and 1 as prime numbers (the first prime number is 2)
        for i in range(2, n):
            if primes[i]:
                counter += 1
        return counter




        
    # TIME LIMIT EXCEEDED - TIME LIMIT EXCEEDED - TIME LIMIT EXCEEDED - TIME LIMIT EXCEEDED - TIME LIMIT EXCEEDED
    # TIME LIMIT EXCEEDED - TIME LIMIT EXCEEDED - TIME LIMIT EXCEEDED - TIME LIMIT EXCEEDED - TIME LIMIT EXCEEDED
    def count_primes(self, n: int) -> int: 
        """
        time limit exceeded a correct solution but slow
        even a greek mathematician born in 276 BC can solve leetcode problem more efficient then me in 2023 :(
        """
        counter = 1 if n > 2 else 0

        def isPrime(num):
            for i in range(3, int(sqrt(num))+1):
                if num % i == 0:
                    return False
            return True
        
        for i in range(3, n, 2):
            if isPrime(i):
                counter += 1
        
        return counter
