import java.util.HashMap;
import java.util.HashSet;

// https://leetcode.com/problems/valid-sudoku/ (top-interview-questions)
public class ValidSudoku36 {
	public static boolean isValidSudoku(char[][] board) {
		HashMap<Integer, HashSet<Character>> rows = new HashMap<>();
		HashMap<Integer, HashSet<Character>> cols = new HashMap<>();
		HashMap<String, HashSet<Character>> squares = new HashMap<>();
		
		HashSet<Character> hashSet = null;
		for(int i = 0; i < 9; i++) {
			hashSet = new HashSet<>();
			rows.put(i, hashSet);
			hashSet = new HashSet<>();
			cols.put(i, hashSet);
			if(i < 3) {
				for(int j = 0; j < 3; j++) {
					hashSet = new HashSet<>();
					squares.put(i+"-"+j, hashSet);
				}
			}
		}

		for(int r = 0; r < 9; r++) {
			for(int c = 0; c < 9; c++) {
				if(board[r][c] != '.') {
					char currChar = board[r][c];
					if(rows.get(r).contains(currChar) || cols.get(c).contains(currChar) || squares.get((r/3)+"-"+(c/3)).contains(currChar))
						return false;
					rows.get(r).add(currChar);
					cols.get(c).add(currChar);
					squares.get((r/3)+"-"+(c/3)).add(currChar);
				}
			}
		}

		return true;
	}
}