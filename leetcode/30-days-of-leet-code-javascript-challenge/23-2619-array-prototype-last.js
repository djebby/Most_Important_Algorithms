// https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function() {
  return this.length > 0 ? this[this.length-1] : -1;
};

console.log(Object.getOwnPropertyNames(Array.prototype)); // logs all the Array.pototype chain
/**
  [
    'length',        'constructor',    'at',
    'concat',        'copyWithin',     'fill',
    'find',          'findIndex',      'findLast',
    'findLastIndex', 'lastIndexOf',    'pop',
    'push',          'reverse',        'shift',
    'unshift',       'slice',          'sort',
    'splice',        'includes',       'indexOf',
    'join',          'keys',           'entries',
    'values',        'forEach',        'filter',
    'flat',          'flatMap',        'map',
    'every',         'some',           'reduce',
    'reduceRight',   'toLocaleString', 'toString',
    'toReversed',    'toSorted',       'toSpliced',
    'with',          'last'
  ]
 */

const arr = [1, 2, 3];
arr.last(); // 3
