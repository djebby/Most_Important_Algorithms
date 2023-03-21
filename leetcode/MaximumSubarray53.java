
// https://leetcode.com/problems/maximum-subarray/ (top-interview-questions)

public class MaximumSubarray53 {
	public int maxSubArray(int[] nums) {
		int maxSum = Integer.MIN_VALUE;
		int currSum = 0;
		for(int i = 0; i < nums.length; i++) {
			if(currSum < 0) {
				currSum = 0;
			}
			currSum += nums[i];
			maxSum = Math.max(maxSum, currSum);
		}
		return maxSum;
	}
}
