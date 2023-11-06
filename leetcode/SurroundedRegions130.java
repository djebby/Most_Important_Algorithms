// https://leetcode.com/problems/surrounded-regions/ (top-interview-questions)

public class SurroundedRegions130 {
	
	public void solve(char[][] board) {
		for(int i = 0; i < board.length; i++) {
			if(board[i][0] == 'O'){
				this.markAsUnsurroundedDFS(i, 0, board);
			}
			if(board[i][board[0].length-1] == 'O') {
				this.markAsUnsurroundedDFS(i, board[0].length-1, board);
			}
		}

		for(int i = 0; i < board[0].length; i++) {
			if(board[0][i] == 'O') {
				this.markAsUnsurroundedDFS(0, i, board);
			}
			if(board[board.length-1][i] == 'O') {
				this.markAsUnsurroundedDFS(board.length-1, i, board);
			}
		}

		for(int r = 0; r < board.length; r++) {
			for(int c = 0; c < board[0].length; c++) {
				if(board[r][c] == 'O') {
					board[r][c] = 'X';
				} else if (board[r][c] == 'U') {
					board[r][c] = 'O';
				}
			}
		}
	}

	public void markAsUnsurroundedDFS(int row, int col, char[][] board) {
		if(Math.min(row, col) < 0 || row >= board.length || col >= board[0].length || board[row][col] != 'O') {
			return;
		}
		board[row][col] = 'U';
		markAsUnsurroundedDFS(row+1, col, board);
		markAsUnsurroundedDFS(row-1, col, board);
		markAsUnsurroundedDFS(row, col+1, board);
		markAsUnsurroundedDFS(row, col-1, board);
	}
}