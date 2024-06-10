// https://leetcode.com/problems/height-checker/

class Solution {
    public int heightChecker(int[] heights) {
        int[] heightsCount = new int[101];

		for (int height: heights) {
			heightsCount[height] += 1;
		}

		int unexpected = 0;
		int i = 0;

		for (int j = 1; j <= 100; j += 1) {
			while (heightsCount[j] > 0) {
				if (heights[i] != j) unexpected += 1;
				heightsCount[j] -= 1;
				i += 1;
			}
		}

		return unexpected;
    }
}
