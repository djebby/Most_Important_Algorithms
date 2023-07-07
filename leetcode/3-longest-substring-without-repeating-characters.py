# https://leetcode.com/problems/longest-substring-without-repeating-characters/ (top-interview-questions)

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start, longest = 0, 0
        charSet = set()
        for end in range(len(s)):
            while s[end] in charSet:
                charSet.remove(s[start])
                start += 1
            charSet.add(s[end])
            longest = max(end - start + 1, longest)
        return longest