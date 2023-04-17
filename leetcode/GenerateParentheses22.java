import java.util.ArrayList;
import java.util.List;


// https://leetcode.com/problems/generate-parentheses/ (top-interview-questions)
public class GenerateParentheses22 {
	
	private List<String> parentheses = new ArrayList<>();

	public List<String> generateParenthesis(int n) {
		StringBuilder currParentheses = new StringBuilder();
		this.backtracking(currParentheses, 0, 0, n);
		return this.parentheses;
	}

	private void backtracking(StringBuilder currParentheses, int opened, int closed, int n) {
		if(opened == closed && opened == n) { // the base case
			this.parentheses.add(currParentheses.toString());
			return;
		}

		/**
		 * we have two decission to make THE FIRST (and must be the first) is to add an opened parenthese
		 * the second is to add a closed parenthese. but there is two condition:
		 * we add an opened parenthese if opened < n
		 * and we close if closed < opened
		 */

		if(opened < n) {
			currParentheses.append('(');
			this.backtracking(currParentheses, opened+1, closed, n);
			currParentheses.deleteCharAt(currParentheses.length()-1);
		}

		if(closed < opened) {
			currParentheses.append(')');
			this.backtracking(currParentheses, opened, closed+1, n);
			currParentheses.deleteCharAt(currParentheses.length()-1);
		}
	}
}