import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class RelativeRanks506 {

	public String[] findRelativeRanks(int[] score) {
		int n = score.length;
		Map<Integer, Integer> scorePlaces = new HashMap<>();

		for (int i = 0; i < n; i += 1) {
			scorePlaces.put(score[i], i);
		}

		Arrays.sort(score);
		int l = 0;
		int r = n - 1;
		while (l < r) {
			int temp = score[l];
			score[l] = score[r];
			score[r] = temp;
			l += 1;
			r -= 1;
		}

		String[] output = new String[n];
		for (int i = 0; i < n; i += 1) {
			if (i == 0) output[scorePlaces.get(score[i])] = "Gold Medal";
			else if (i == 1) output[scorePlaces.get(score[i])] = "Silver Medal";
			else if (i == 2) output[scorePlaces.get(score[i])] = "Bronze Medal";
			else output[scorePlaces.get(score[i])] = Integer.toString(i+1);
		}


		return output;
	}
}
