public class RemoveDuplicates26 {
	public int removeDuplicates(int[] nums) {
		int i = 1;
		for(int j = 1; j < nums.length; j++) {
			if(nums[i-1] < nums[j]) {
				// if we found an element greater then the element at index i-1
				// we insert it at index i and we increment i
				nums[i] = nums[j];
				i++;
			}
		}
		return i;
	}
}