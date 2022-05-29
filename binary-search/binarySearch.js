function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) start = mid + 1;
    else end = mid - 1;
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}
