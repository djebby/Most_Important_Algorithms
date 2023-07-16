// https://leetcode.com/problems/longest-palindromic-substring/ (top-interview-questions)

public class LongestPalindromicSubstring5 {
	public String longestPalindrome(String s) {

		int start = 0, end = 0;
		
		// expend around the center...
		for(int i = 0; i < s.length(); i++) {
			
			int l = i, r = i;

			while(0 <= l && r < s.length() && s.charAt(l) == s.charAt(r)) {
				if((r-l+1) > (end-start)) {
					start = l;
					end = r + 1;
				}
				l--;
				r++;
			}

			l = i;
			r = i+1;
			while(0 <= l && r < s.length() && s.charAt(l) == s.charAt(r)) {
				if((r-l+1) > (end-start)) {
					start = l;
					end = r + 1;
				}
				l--;
				r++;
			}
		}

		return s.substring(start, end);
	}
}