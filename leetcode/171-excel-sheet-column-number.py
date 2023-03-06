# https://leetcode.com/problems/excel-sheet-column-number/ (top-interview-questions)

class Solution:
	def titleToNumber(self, columnTitle: str) -> int:
		column_number = 0
		for i in range(len(columnTitle)):
			column_number += (ord(columnTitle[i]) - 64) * (26 ** (len(columnTitle)-1-i))
		return column_number


	def title_to_number(self, columnTitle: str) -> int:
		columnTitle = columnTitle[::-1] # reverse
		column_number = 0
		for i in range(len(columnTitle)):
			column_number += (ord(columnTitle[i]) - 64) * (26 ** i)
		return column_number
