# https://leetcode.com/problems/basic-calculator-ii/ (top-interview-questions)

class Solution:
    def calculate(self, s: str) -> int:
        stack = list()
        num = 0 # the default first number is 0
        last_op = '+' # "x-y*z" == "0+x-y*z" the default last operation is +

        for i in range(len(s)):
            if s[i].isdigit():
                num = num * 10 + int(s[i])
            
            if (not s[i].isdigit() and s[i] != " ") or i == len(s)-1:
                if last_op == "+":
                    stack.append(num)
                elif last_op == "-":
                    stack.append(-num)
                elif last_op == "*":
                    stack[-1] = stack[-1] * num
                else: # last_op == "/"
                    stack[-1] = int(stack[-1] / num)
                num = 0 # reset the num
                last_op = s[i] # update the last operation
        
        return sum(stack)
