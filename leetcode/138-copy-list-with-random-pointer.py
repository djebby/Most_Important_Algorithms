# https://leetcode.com/problems/copy-list-with-random-pointer/ (top-interview-questions)


from typing import Optional

# Definition for a Node.
class Node:
	def __init__(self, x: int, next = None, random = None):
		self.val = int(x)
		self.next = next
		self.random = random

class Solution:
	def copyRandomList(self, head: Optional[Node]) -> Optional[Node]:
		nodes_map = { None: None } # original : copy

		curr = head
		while curr:
			nodes_map[curr] = Node(curr.val)
			curr = curr.next

		curr = head
		while curr:
			nodes_map[curr].next = nodes_map[curr.next]
			nodes_map[curr].random = nodes_map[curr.random]
			curr = curr.next

		return nodes_map[head]