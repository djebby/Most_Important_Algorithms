// https://leetcode.com/problems/sum-of-all-subset-xor-totals/

class Solution {
	private int subsetsXORSum = 0;

	public int subsetXORSum(int[] nums) {
		this.getSubsetsXOR(0, 0, nums);
		return this.subsetsXORSum;
	}

	private void getSubsetsXOR(int i, int xorAccumulator, int[] nums) {
		if (i == nums.length) {
			subsetsXORSum += xorAccumulator;
			return;
		}
		this.getSubsetsXOR(i+1, xorAccumulator, nums);
		this.getSubsetsXOR(i+1, xorAccumulator ^ nums[i], nums);
	}
}
