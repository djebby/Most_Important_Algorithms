import java.util.HashSet;
import java.util.Set;

public class LongestSubstringWithoutRepeatingCharacters3 {
    public int lengthOfLongestSubstring(String s) {
		int longest = 0, start = 0;
		Set<Character> charSet = new HashSet<>();

		for(int end = 0; end < s.length(); end++) {

			while(charSet.contains(s.charAt(end))) {
				charSet.remove(s.charAt(start++));
			}

			charSet.add(s.charAt(end));
			longest = Math.max(longest, charSet.size());
		}

		return longest;
	}
}
