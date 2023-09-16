# https://leetcode.com/problems/lru-cache/ (top-interview-questions)

class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = dict() # key maped to: Node(key, val)
        self.head = Node(None, None) # head is a dummy node
        self.tail = Node(None, None) # tail is a dummy node
        # connect the doubly linked list head and tail together
        self.head.next = self.tail # head.next is the LRU
        self.tail.prev = self.head # tail.next is the MRU

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            # update the node to be the most recently used node
            self._remove(node)
            self._append(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:

        if key not in self.cache and len(self.cache) == self.capacity:
            # the number of keys will exceeds the capacity
            # so evict the least recently used key
            lru_node = self.head.next
            self._remove(lru_node)
            del self.cache[lru_node.key]

        if key in self.cache:
            self._remove(self.cache[key])
        
        node = Node(key, value)
        self._append(node)
        self.cache[key] = node

    
    def _append(self, node):
        """ insert a node as the penultimate node (most recently used) """
        prev, tail = self.tail.prev, self.tail
        prev.next = node
        node.prev = prev
        tail.prev = node
        node.next = tail
    
    def _remove(self, node):
        """ remove a given node from the doubly linked list """
        prev = node.prev
        next = node.next
        prev.next = next
        next.prev = prev


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
