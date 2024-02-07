# https://leetcode.com/problems/sort-characters-by-frequency/

class Solution:
    def frequencySort(self, s: str) -> str:
        char_freqs = Counter(s)

        def compare_fn(a, b):
            return char_freqs[b] - char_freqs[a]
        
        sorted_keys = sorted(char_freqs.keys(), key = cmp_to_key(compare_fn))

        sorted_s = []
        for key in sorted_keys:
            sorted_s.append(key * char_freqs[key])

        return ''.join(sorted_s)
