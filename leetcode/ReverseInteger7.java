// https://leetcode.com/problems/reverse-integer/ (top-interview-questions)

public class ReverseInteger7 {
	public int reverse(int x) {
		int reversedX = 0;

		while (x != 0) {
			int digit = x % 10;
			x /= 10;

			boolean overflow = (reversedX > Integer.MAX_VALUE / 10 || (reversedX == Integer.MAX_VALUE / 10 && digit > Integer.MAX_VALUE % 10))
							|| (reversedX < Integer.MIN_VALUE / 10 || (reversedX == Integer.MIN_VALUE / 10 && digit < Integer.MIN_VALUE % 10));

			if (overflow)
				return 0;

			reversedX = (reversedX * 10) + digit;
		}

		return reversedX;
	}
}
