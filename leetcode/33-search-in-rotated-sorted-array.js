// https://leetcode.com/problems/search-in-rotated-sorted-array/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // finding the index of the pivot element
  let pivot = findPivot(nums);
  
  // decide in wich part should we search for the target
  let l, r;
  if (target <= nums[nums.length - 1]) {
    // target belong to the lower part [pivot..n]
    l = pivot;
    r = nums.length - 1;
  } else {
    // target > nums[nums.length - 1] target belong to the higher part [0..pivot-1]
    l = 0;
    r = pivot - 1;
  }


  // typical binary search in the appropriate part
  while ( l <= r ) {

    const mid = l + Math.floor((r-l) / 2);

    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      return mid;
    }

  }

  return -1;
};



const findPivot = (nums) => {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = l + Math.floor((r-l) / 2);

    // we found the pivot element
    if (nums[mid] > nums[mid+1]) { 
      return mid+1;
    }

    /**
     * there are TWO and ONLY TWO cases to handle :
     * 1) l and mid are in the higher zone of values [0 .. pivot-1]
     * 2) l in the higher zone and mid in the lower zone [pivot .. n] (lower zone includes the pivot) 
     *
     * there is NO possibility that l and mid are simultaneously in the lower zone of values
     * l pointer guaranteed to stay in the higher zone
     * r pointer guaranteed to stay in the lower zone
     */

    if (nums[l] <= nums[mid]) {
      // 1) l and mid are in the higher zone of values
      l = mid + 1;
    } else { // nums[l] > nums[mid]
      // 2) l in the higher zone and mid in the lower zone (lower zone includes the pivot)
      r = mid;
    }
  }

  return 0; // in case that the array is not shifted
}


console.log(findPivot([5, 1, 3]));