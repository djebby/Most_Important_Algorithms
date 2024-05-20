// https://leetcode.com/problems/find-the-maximum-sum-of-node-values/

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

class Solution {
	public long maximumValueSum(int[] nums, int k, int[][] edges) {
		List<Integer> diff = new ArrayList<>();
		for (int i = 0; i < nums.length; i += 1) diff.add((nums[i] ^ k) - nums[i]);
		Collections.sort(diff);
		int l = 0;
		int r = diff.size() - 1;
		while (l < r) {
			int tmp = diff.get(l);
			diff.set(l, diff.get(r));
			diff.set(r, tmp);
			l += 1;
			r -= 1;
		}

		long maximum = 0;
		for (int i = 0; i < nums.length; i += 1) maximum += nums[i];
		for (int i = 0; i < diff.size() - 1; i += 2) {
			if (diff.get(i) + diff.get(i+1) <= 0) break;
			maximum += diff.get(i) + diff.get(i+1);
		}

		return maximum;
	}
}
