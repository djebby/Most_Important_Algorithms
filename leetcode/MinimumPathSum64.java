import java.util.Arrays;

// https://leetcode.com/problems/minimum-path-sum/

public class MinimumPathSum64 {
	
	public int minPathSum(int[][] grid) {
		int ROWS = grid.length;
		int COLS = grid[0].length;
		int[] dp = new int[COLS];
		Arrays.fill(dp, Integer.MAX_VALUE);
		dp[COLS-1] = grid[ROWS-1][COLS-1];

		for(int row = ROWS-1; row >= 0; row--) {
			for(int col = COLS-1; col >= 0; col--) {
				if(row == ROWS - 1 && col == COLS - 1)
					continue;
				int right =  col+1 < COLS ? dp[col+1] : Integer.MAX_VALUE;
				int down = dp[col];
				dp[col] = grid[row][col] + Math.min(right, down);
			}
		}

		return dp[0];
	}
}