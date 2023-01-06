# https://leetcode.com/problems/longest-common-prefix/ (top-interview-questions)
from typing import List

def longestCommonPrefix(strs: List[str]) -> str:
    min_str = strs[0]
    for string in strs:
        if len(string) < len(min_str): min_str = string

    prefix = min_str

    for string in strs:
        for i in range(len(min_str)):
            if i < len(prefix) and prefix[i] != string[i]:
                prefix = prefix[:i]
                break

    return prefix