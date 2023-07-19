import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// https://leetcode.com/problems/4sum/

public class FourSum18 {
	private List<List<Integer>> quadruplets = new ArrayList<>();
	private List<Integer> quadruplet = new ArrayList<>();

	public List<List<Integer>> fourSum(int[] nums, int target) {
		// sort the array
		Arrays.sort(nums);

		this.helper(nums, 4, 0, target);
		return this.quadruplets;
	}


	private void helper(int[] nums, int k, int index, long target) {
		if(k == 2) {
			// k == 2, the base case
			int l = index;
			int r = nums.length - 1;
			while(l < r) {
				if(target < nums[l] + nums[r])
					r--;
				else if (nums[l] + nums[r] < target)
					l++;
				else {
					// target == nums[l] + nums[r] we found a valid set of numbers so we add it to the result array
					List<Integer> validQuadruplet = new ArrayList<>(this.quadruplet);
					validQuadruplet.add(nums[l]);
					validQuadruplet.add(nums[r]);
					this.quadruplets.add(validQuadruplet);
					// now move the left and the right pointer until we avoid duplications
					l++;
					while(nums[l-1] == nums[l] && l < r) l++;
					r--;
					while(nums[r] == nums[r+1] && l < r) r--;
				}
			}

		} else {
			for(int i = index; i <= nums.length - k; i++) {
				if(i > index && nums[i-1] == nums[i])
					continue;
				this.quadruplet.add(nums[i]);
				this.helper(nums, k-1, i+1, target - nums[i]);
				this.quadruplet.remove(this.quadruplet.size() - 1);
			}
		}
	}
}