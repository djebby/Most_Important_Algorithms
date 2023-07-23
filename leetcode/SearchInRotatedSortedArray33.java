

// https://leetcode.com/problems/search-in-rotated-sorted-array/ (top-interview-questions)

public class SearchInRotatedSortedArray33 {
	public int search(int[] nums, int target) {
		/**
		 * let's take an example nums = [4,5,6,7,0,1,2] as you see our array is divided into two main subarrays
		 * the first one is the greater subarray [4,5,6,7] and the second one is the less subarray [0,1,2]
		 * if we can somehow find the index of first element of the smallest subarray ( wish is 4 in the example)
		 * we can decide easely in what subarray our target belong, then we run a binary search in that subarray
		 */
		int left = 0;
		int right = nums.length - 1;
		
		// search for the pivot index (the pivot index is the first index of the smallest subarray)
		while(left < right) {
			int middle = left + (right - left) / 2;
			if(nums[middle] > nums[right])
				left = middle + 1;
			else
				right = middle;
		}

		int pivot = left;
		// now let's decide in what subarray our target is belong
		if(target <= nums[nums.length - 1])
			right = nums.length - 1;
		else {
			left = 0;
			right = pivot - 1;
		}
		// let's run a normale binary search in the appropriate subarray
		while(left <= right) {
			int middle = left + (right - left) / 2;
			if(nums[middle] == target)
				return middle;
			else if (nums[middle] < target)
				left = middle + 1;
			else
				right = middle - 1;
		}

		return -1;
	}
}