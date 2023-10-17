import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// https://leetcode.com/problems/combination-sum-ii/
public class CombinationSumII40 {
	private List<List<Integer>> combinations = new ArrayList<>();

	public List<List<Integer>> combinationSum2(int[] candidates, int target) {
		
		Arrays.sort(candidates);
		this.backtracking(0, new ArrayList<Integer>(), 0, candidates, target);
		return this.combinations;

	}

	private void backtracking(int idx, ArrayList<Integer> combination, int curSum, int[] sortedCandidates, int target) {
		
		if(curSum > target) {
			return;
		}
		else if(curSum == target) {
			this.combinations.add(new ArrayList<Integer>(combination));
			return;
		}

		int previous = -1;
		for(int i = idx; i < sortedCandidates.length; i++) {
			if(sortedCandidates[i] != previous) {
				combination.add(sortedCandidates[i]);
				this.backtracking(i+1, combination, curSum+sortedCandidates[i], sortedCandidates, target);
				combination.remove(combination.size() - 1);
				previous = sortedCandidates[i];
			}
		}

	}
}