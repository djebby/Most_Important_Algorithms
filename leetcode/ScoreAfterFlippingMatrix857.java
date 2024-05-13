// https://leetcode.com/problems/score-after-flipping-matrix/

public class ScoreAfterFlippingMatrix857 {
	
	public int matrixScore(int[][] grid) {
		int m = grid.length;
		int n = grid[0].length;

		// flip all the rows that start with zero
		for (int i = 0; i < m; i += 1) {
			if (grid[i][0] == 1) continue;
			for (int j = 0; j < n; j += 1) grid[i][j] = grid[i][j] == 0 ? 1 : 0;
		}

		// flip columns that have zero counts more than ones
		for (int j = 1; j < n; j += 1) {
			int ones = 0;
			for (int i = 0; i < m; i += 1) ones += grid[i][j];
			if (ones < m / 2.0) {
				for (int i = 0; i < m; i += 1) grid[i][j] = grid[i][j] ^ 1; // just inverse the number (1 to 0) or (0 to 1)
			}
		}

		int score = 0;

		for (int i = 0; i < m; i += 1) {
			int rowVal = 0;
			for (int j = 0; j < n; j += 1) rowVal = rowVal << 1 | grid[i][j];
			score += rowVal;
		}

		return score;
	}

}
