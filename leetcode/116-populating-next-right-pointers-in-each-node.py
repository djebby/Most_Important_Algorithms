# https://leetcode.com/problems/populating-next-right-pointers-in-each-node/ (top-interview-questions)


from typing import Optional


# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
    

class Solution:
    def connect(self, root: Optional[Node]) -> Optional[Node]:
        curr = root
        # pointer for the first node of the next level
        nxt_level = root.left if root else None

        while curr and nxt_level:
            # connect the left child with the right child
            curr.left.next = curr.right
            
            # connect the right child of the current node with the left child of the next neighbor
            if curr.next:
                curr.right.next = curr.next.left
            
            # visit the next neighboor
            curr = curr.next
            
            # if we reach the end of this level of nodes 
            # we should go to the starting node of the next level
            if not curr:
                curr = nxt_level
                nxt_level = curr.left
        
        
        return root
