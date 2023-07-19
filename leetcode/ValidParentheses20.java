import java.util.HashMap;
import java.util.Stack;

// https://leetcode.com/problems/valid-parentheses/ (top-interview-questions)
public class ValidParentheses20 {
	public boolean isValid(String s) {
		
		HashMap<Character, Character> opening = new HashMap<>();
		opening.put('(', ')');
		opening.put('{', '}');
		opening.put('[', ']');
		
		Stack<Character> stack = new Stack<>();

		for(int i = 0; i < s.length(); i++) {
			if(opening.containsKey(s.charAt(i))) {
				stack.push(s.charAt(i));
			} else {
				if(stack.isEmpty() || opening.get(stack.pop()) != s.charAt(i))
					return false;
			}
		}
		
		return stack.isEmpty();
	}
}
