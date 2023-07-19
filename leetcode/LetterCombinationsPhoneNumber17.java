import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/ (top-interview-questions)
public class LetterCombinationsPhoneNumber17 {
	
	private List<String> lettersCombinations = new ArrayList<>();
	private HashMap<Character, String> hashMap = new HashMap<>();

	public List<String> letterCombinations(String digits) {
		if(digits.length() == 0) {
			return this.lettersCombinations;
		}
		this.hashMap.put('2', "abc");
		this.hashMap.put('3', "def");
		this.hashMap.put('4', "ghi");
		this.hashMap.put('5', "jkl");
		this.hashMap.put('6', "mno");
		this.hashMap.put('7', "pqrs");
		this.hashMap.put('8', "tuv");
		this.hashMap.put('9', "wxyz");
		StringBuilder currStr = new StringBuilder();
		this.backtracking(digits, 0, currStr);
		return this.lettersCombinations;
	}

	private void backtracking(String digits, int index, StringBuilder currStr) {
		if(index == digits.length()) {
			this.lettersCombinations.add(currStr.toString());
			return;
		}
		String letters = this.hashMap.get(digits.charAt(index));
		
		for(int i = 0; i < letters.length(); i++) {
			currStr.append(letters.charAt(i));
			this.backtracking(digits, index+1, currStr);
			currStr.deleteCharAt(currStr.length()-1);
		}
	}
}