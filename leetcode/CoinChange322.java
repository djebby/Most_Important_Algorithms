public class CoinChange322 {
	// https://leetcode.com/problems/coin-change/ (top-interview-questions)
	public int coinChange(int[] coins, int amount) {

		int[] cache = new int[amount+1];
		cache[0] = 0;
		for(int i = 1; i <= amount; i++) {
			cache[i] = 10_001; // max possible coins = 1001
		}

		for(int amt = 1; amt <= amount; amt++) {
			for(int j = 0; j < coins.length; j++) {
				if(amt >= coins[j]) {
					cache[amt] = Math.min(cache[amt], 1 + cache[amt-coins[j]]);
				}
			}
		}
	
		return cache[amount] < 10_001 ? cache[amount] : -1;
	}
	
}
