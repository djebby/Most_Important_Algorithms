// https://leetcode.com/problems/rotate-array/ (top-interview-questions)

public class RotateArray189 {

	public void rotate(int[] nums, int k) {
		k %= nums.length;
		if(k == 0) return;

		reverseArray(nums, 0, nums.length-1);
		reverseArray(nums, 0, k-1);
		reverseArray(nums, k, nums.length-1);
	}

	private static void reverseArray(int[] array, int start, int end) {
		while(start < end) {
			int aux = array[start];
			array[start++] = array[end];
			array[end--] = aux;
		}
	}

}