import java.util.ArrayList;
import java.util.List;

public class Subsets78 {
	public List<List<Integer>> subsets(int[] nums) {
		List<List<Integer>> numsSubsets = new ArrayList<>();
		List<Integer> numsSubset = null;
		
		int n = (int) (Math.pow(2, nums.length) - 1);
		
		while(n >= 0) {
			numsSubset = new ArrayList<>();
			for(int i = 0; i < nums.length; i++) {
				if((n & (1<<i)) != 0) {
					numsSubset.add(nums[i]);
				}
			}
			numsSubsets.add(numsSubset);
			n--;
		}

		return numsSubsets;
	}
}