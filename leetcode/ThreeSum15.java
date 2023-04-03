import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// https://leetcode.com/problems/3sum/ (top-interview-questions)

public class ThreeSum15 {
	public List<List<Integer>> threeSum(int[] nums) {
		List<List<Integer>> triplets = new ArrayList<>();
		Arrays.sort(nums);
		
		for(int i = 0; i < nums.length-2; i++) {
			if(i > 0 && nums[i-1] == nums[i])
				continue;
			
			int l = i+1;
			int r = nums.length-1;
			while(l < r) {
				int tripletSum = nums[i] + nums[l] + nums[r];
				if(tripletSum < 0) {
					l++;
				} else if (tripletSum > 0) {
					r--;
				} else {
					List<Integer> triplet = new ArrayList<>();
					triplet.add(nums[i]);
					triplet.add(nums[l]);
					triplet.add(nums[r]);
					triplets.add(triplet);
					l++;
					while(nums[l-1] == nums[l] && l < r) l++;
					r--;
					while(nums[r] == nums[r+1] && l < r) r--;
				}
			}
		}

		return triplets;
	}
}