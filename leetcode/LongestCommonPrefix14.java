// https://leetcode.com/problems/longest-common-prefix/ (top-interview-questions)

public class LongestCommonPrefix14 {
	public String longestCommonPrefix(String[] strs) {
		String prefix = strs[0];
		// get the string with the minimum length and save it in prefix
		for(String str: strs) {
			if(str.length() < prefix.length()) {
				prefix = str;
			}
		}

		// compare the charachters of this prefix with every other string charachters in the array
		for(String str: strs) {
			for(int i = 0; i < prefix.length(); i++) {
				if(prefix.charAt(i) != str.charAt(i)) {
					// if we found a difference betwen the charachters we need to cut out the differentiated part from the prefix
					prefix = prefix.substring(0, i);
					// we don't need to compare the charachters of the current string with the prefix anymore so we break the inner loop
					break;
				}
			}
			// if at some iteration the length of the prefix = 0, that's mean that there's no more hope to found any common prefix so we are done
			if(prefix.length() == 0) {
				break;
			}
		}

		return prefix;
	
	}
}
