/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
	isAllZeros = true;
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] != 0) {
			isAllZeros = false;
		}
		nums[i] = nums[i].toString();
	}

	if(isAllZeros) {
		return "0";
	}

	nums.sort((num1, num2) => num1+num2 < num2+num1 ? 1 : -1);

	return nums.join('');
};