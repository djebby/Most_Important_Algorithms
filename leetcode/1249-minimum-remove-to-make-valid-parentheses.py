# https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        s = list(s)
        stack = []
        for i in range(len(s)):
            if stack and s[i] == ')' and stack[-1]['parenthese'] == '(':
                stack.pop()
            elif s[i] == '(' or s[i] == ')':
                stack.append({'parenthese': s[i], 'index': i})
        
        for invalid_parenthese in stack:
            s[invalid_parenthese['index']] = ''
        
        return "".join(s)
