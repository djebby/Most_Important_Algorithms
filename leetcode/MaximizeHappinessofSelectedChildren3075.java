// https://leetcode.com/problems/maximize-happiness-of-selected-children/

import java.util.Arrays;

public class MaximizeHappinessofSelectedChildren3075 {
    public long maximumHappinessSum(int[] happiness, int k) {
        int n = happiness.length;
        Arrays.sort(happiness);
        int l = 0;
        int r = n - 1;
        while (l < r) {
            int tmp = happiness[l];
            happiness[l] = happiness[r];
            happiness[r] = tmp;
            l += 1;
            r -= 1;
        }

        long sum = 0;
        
        for (int i = 0; i < k; i += 1) {
            if (happiness[i] - i <= 0) break;
            sum += (happiness[i] - i);
        }

        return sum;
    }
}
