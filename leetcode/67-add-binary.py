# https://leetcode.com/problems/add-binary/

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        total_sum = ''
        carry = 0
        a = a[::-1]
        b = b[::-1]
        for i in range(max(len(a), len(b))):
            a_bit = int(a[i]) if i < len(a) else 0
            b_bit = int(b[i]) if i < len(b) else 0
            bit_sum = a_bit + b_bit + carry
            total_sum = str(bit_sum % 2) + total_sum
            carry = 1 if bit_sum > 1 else 0 # (bit_sum // 2) work also

        if carry == 1:
            total_sum = '1' + total_sum
        return total_sum
    

    
    # this also work...
    def add_binary(self, a: str, b: str) -> str:
        total_sum = int(a, 2) + int(b, 2)
        return bin(total_sum)[2:]
        