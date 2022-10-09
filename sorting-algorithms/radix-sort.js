// we need a helper function to get the digit in a specific position inside a number
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


// and we need to know the length of the maximum number inside our array...
function digitCount(num) {
    if(num === 0) return 1;
    return Math.ceil(Math.log10(Math.abs(num)));
}

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


function radixSort(nums) {
    let maxNumLength = mostDigits(nums); // this will give us the length of the maximum number in the array
    
    for(let k = 0; k < maxNumLength; k++) {
        let digitBuckets = Array.from({length: 10}, ()=>[]); // this will generate a matrix (an array full with 10 sub arrays) each sub-array represent a bucket.
        for(let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i]); // here we just push every number in the right bucket base on his digit number (i)
        }
        nums = [].concat(...digitBuckets);
    }

    return nums;
}
// Time Complexity Best-Average-Worst => O(n*k) where n is the length of the array of number and k is the number of digits (length) of the largest number