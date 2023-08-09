// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  
  const totalSum = [];

  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');

  let carray = 0;

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    
    const bitSum = carray + ( a.length > i ? Number(a[i]) : 0) + ( b.length > i ? Number(b[i]) : 0);

    switch(bitSum) {
      case 0: {
        totalSum.push('0');
        carray = 0;
        break;
      }
      case 1: {
        totalSum.push('1');
        carray = 0;
        break;
      }
      case 2: {
        totalSum.push('0');
        carray = 1;
        break;
      }
      case 3: {
        totalSum.push('1');
        carray = 1;
        break;
      }
    }

    // also work instead of the switch
    // if (bitSum === 0 || bitSum === 2) totalSum.push('0');
    // else totalSum.push('1'); // bitSum === 1 || bitSum === 3
    // if (bitSum >= 2) carray = 1;
    // else carray = 0;

    // also work instead of the switch
    // totalSum.push(String(bitSum % 2));
    // carray = Math.floor(bitSum / 2);
  }

  if (carray === 1) {
    totalSum.push('1');
  }
  
  return totalSum.reverse().join('');
};

const sum = addBinary('1010', '1011');
console.log(sum);