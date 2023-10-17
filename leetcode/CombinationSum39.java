import java.util.List;
import java.util.ArrayList;

public class CombinationSum39 {
	private List<List<Integer>> combinations = new ArrayList<>();

	public List<List<Integer>> combinationSum(int[] candidates, int target) {
		List<Integer> combination = new ArrayList<>();
		this.backtracking(0, combination, 0, candidates, target);
		return this.combinations;
	}

	private void backtracking(int i, List<Integer> combination, int currSum, int[] candidates, int target) {
		if(currSum > target || i >= candidates.length)
			return;
		if(currSum == target) {
			List<Integer> currCombination = new ArrayList<>(combination);
			this.combinations.add(currCombination);
			return;
		}

		combination.add(candidates[i]);
		this.backtracking(i, combination, currSum+candidates[i], candidates, target);
		combination.remove(combination.size() - 1);
		this.backtracking(i+1, combination, currSum, candidates, target);
	}
}
