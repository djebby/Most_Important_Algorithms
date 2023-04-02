// https://leetcode.com/problems/climbing-stairs/ (top-interview-questions)

class ClimbingStairs70 {
	public int climbStairs(int n ) {
		if(n <= 2) {
			return n;
		}

		int preLast = 1, last = 2;
		for(int i = n-3; i >= 0; i--) {
			int temp = last;
			last = last + preLast;
			preLast = temp;
		}
		return last;
	}
}