import java.util.HashMap;

public class TwoSum1 {
    // 1 - https://leetcode.com/problems/two-sum/ (top-interview-questions)
	public int[] twoSum(int[] nums, int target) {
		int[] result = new int[2];
		HashMap<Integer, Integer> complement = new HashMap<Integer, Integer>();

		for(int i = 0; i < nums.length; i++) {
			int difference = target - nums[i];
			if(complement.containsKey(difference)) {
				result[0] = complement.get(difference);
				result[1] = i;
				break;
			}
			complement.put(nums[i], i);
		}
		return result;
	}
}
