// https://leetcode.com/problems/rotate-image/ (top-interview-questions)
public class RotateImage48 {
	public void rotate(int[][] matrix) {
		int l = 0;
		int r = matrix.length - 1;
		while(l < r) {
			for(int i = 0; i < r-l; i++) {
				int top = l;
				int bottom = r;
				// step 0: save the top left value in a temp variable
				int topLeft = matrix[top][l+i];
				// step 1: top left <=== bottom left
				matrix[top][l+i] = matrix[bottom-i][l];
				// step 2: bottom left <=== bottom right
				matrix[bottom-i][l] = matrix[bottom][r-i];
				// step 3: bottom right <=== top right
				matrix[bottom][r-i] = matrix[top+i][r];
				// step 4: top right <=== top left
				matrix[top+i][r] = topLeft;
			}
			l++;
			r--;
		}
	}
}
