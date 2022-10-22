// fib(n) = 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...
//     n  = 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12,  13,  14,  15,  16,   17,   18,   19,   20,    21,    22,   23,    24,     25,     26,     27,     28,  ...

function fibonacci(number, memo = {0: undefined, 1: 1, 2:1}) {
    if(memo[number] || number === 0) return memo[number];
    const result = fibonacci(number-1, memo) + fibonacci(number-2, memo);
    memo[number] = result;
    return result;
}