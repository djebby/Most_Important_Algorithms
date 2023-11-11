import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

// 200 - https://leetcode.com/problems/number-of-islands/ (top-interview-questions)

public class NumberOfIslands200 {
	
	public HashSet<String> visited = new HashSet<>();

	public int numIslands(char[][] grid) {
		int islands = 0;
		for(int r = 0; r < grid.length; r++) {
			for(int c = 0; c < grid[0].length; c++) {
				if(grid[r][c] == '1' && !this.visited.contains(r+","+c)) {
					this.visited.add(r+","+c);
					this.bfs(r, c, grid);
					islands++;
				}
			}
		}
		return islands;
	}

	public void bfs(int row, int col, char[][] grid) {

		Queue<Integer[]> queue = new LinkedList<>();
		Integer[] land = {row, col};
		queue.add(land);
		int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

		while(queue.size() > 0) {
			land = queue.poll();
			int r = land[0];
			int c = land[1];

			for(int i = 0; i < 4; i++) {
				int dr = directions[i][0];
				int dc = directions[i][1];
				if(Math.min(r+dr, c+dc) > -1 && r+dr < grid.length && c+dc < grid[0].length && grid[r][c] == '1' && !this.visited.contains((r+dr)+","+(c+dc))) {
					Integer[] nextLand = {r+dr, c+dc};
					queue.add(nextLand);
					this.visited.add((r+dr)+","+(c+dc));
				}
			}
		}
	}









	public int num_islands(char[][] grid) {
		int islands = 0;
		for(int r = 0; r < grid.length; r++) {
			for(int c = 0; c < grid[0].length; c++) {
				if(grid[r][c] == '1') {
					this.markAsCountedLand(r, c, grid);
					islands++;
				}
			}
		}
		return islands;
	}
	
	public void markAsCountedLand(int row, int col, char[][] grid) {
		if(Math.min(row, col) < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] != '1') {
			return;
		}
		grid[row][col] = '*';
		this.markAsCountedLand(row+1, col, grid);
		this.markAsCountedLand(row-1, col, grid);
		this.markAsCountedLand(row, col+1, grid);
		this.markAsCountedLand(row, col-1, grid);
	}
}
