import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

// https://leetcode.com/problems/group-anagrams/ (top-interview-questions)
public class GroupAnagrams49 {
	public List<List<String>> groupAnagrams(String[] strs) {
		HashMap<String, List<String>> backets = new HashMap<>();

		for(String str: strs) {
			char[] chars = str.toCharArray();
			Arrays.sort(chars);
			String hash = new String(chars);

			if(!backets.containsKey(hash))
				backets.put(hash, new ArrayList<String>());

			backets.get(hash).add(str);
		}

		return new ArrayList<List<String>>(backets.values());
	}
}
