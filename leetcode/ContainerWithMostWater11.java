// https://leetcode.com/problems/container-with-most-water/ (top-interview-questions)

public class ContainerWithMostWater11 {
	public int maxArea(int[] height) {
		int area = 0, left = 0, right = height.length - 1;

		while(left < right) {
			int distance = right - left;
			int currArea = 0;

			if(height[left] > height[right])
				currArea = distance * height[right--];
			else
				currArea = distance * height[left++];
			
			
			area = Math.max(area, currArea);
		}

		return area;
	}
}