import java.util.Arrays;

// https://leetcode.com/problems/longest-increasing-subsequence/ (top-interview-questions)

public class LongestIncreasingSubsequence300 {
	public int lengthOfLIS(int[] nums) {
		int[] dp = new int[nums.length];
		Arrays.fill(dp, 1);

		for(int i = dp.length-2; i >= 0; i--) {
			for(int j = i+1; j < dp.length; j++) {
				if(nums[i] < nums[j]) {
					dp[i] = Math.max(dp[i], 1+dp[j]);
				}
			}
		}
		
		return Arrays.stream(dp).max().getAsInt();
	}
}