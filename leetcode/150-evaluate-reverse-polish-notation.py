# https://leetcode.com/problems/evaluate-reverse-polish-notation/ (top-interview-questions)

from typing import List

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        resultStack = list()
        for token in tokens:
            if token == '+':
                resultStack.append(resultStack.pop() + resultStack.pop())
            elif token == '-':
                num2 = resultStack.pop()
                num1 = resultStack.pop()
                resultStack.append(num1 - num2)
            elif token == '*':
                resultStack.append(resultStack.pop() * resultStack.pop())
            elif token == '/':
                num2 = resultStack.pop()
                num1 = resultStack.pop()
                resultStack.append(int(num1 / num2))
            else:
                resultStack.append(int(token))
        return resultStack.pop()
