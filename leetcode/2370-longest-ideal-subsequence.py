# https://leetcode.com/problems/longest-ideal-subsequence/

class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        n = len(s)
        dp = [1] * n
        hashmap = {}
        ascii = []
        for c in s:
            ascii.append(int(ord(c)) - 96)
                
        hashmap[ascii[n-1]] = 1

        for i in reversed(range(n - 1)):
            for j in range(max(1, ascii[i] - k), 1 + min(26, ascii[i] + k), 1):
                if j in hashmap:
                    dp[i] = max(dp[i], (1 + hashmap[j]))
            
            hashmap[ascii[i]] = max(dp[i], (hashmap[ascii[i]] if (ascii[i] in hashmap ) else 1))

        return max(dp)
