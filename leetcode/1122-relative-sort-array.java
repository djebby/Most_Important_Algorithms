// https://leetcode.com/problems/relative-sort-array/

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

class Solution {
	public int[] relativeSortArray(int[] arr1, int[] arr2) {
		Map<Integer, Integer> arr1NumsFreq = new HashMap<>();
		for (int num: arr1) arr1NumsFreq.put(num, (arr1NumsFreq.getOrDefault(num, 0) + 1));

		int[] sortedArr1 = new int[arr1.length];
		int i = 0;
		for (int num: arr2) {
			while (arr1NumsFreq.get(num) > 0) {
				sortedArr1[i] = num;
				i += 1;
				arr1NumsFreq.put(num, arr1NumsFreq.get(num) - 1);
			}
			arr1NumsFreq.remove(num);
		}

		Set<Integer> keySet = arr1NumsFreq.keySet();
		int[] keys = new int[keySet.size()];
		int j = 0;
		for (Integer num: keySet) {
			keys[j++] = (int) num;
		}
		Arrays.sort(keys);

		for (int num: keys) {
			while (arr1NumsFreq.get(num) > 0) {
				sortedArr1[i] = num;
				i += 1;
				arr1NumsFreq.put(num, arr1NumsFreq.get(num) - 1);
			}
		}

		return sortedArr1;
	}
}
