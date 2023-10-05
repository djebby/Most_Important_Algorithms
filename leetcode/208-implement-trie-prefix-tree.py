# https://leetcode.com/problems/implement-trie-prefix-tree/ (top-interview-questions)

class Node:
    def __init__(self):
        self.childs = dict()
        self.is_word_end = False

class Trie:

    def __init__(self):
        self.root = Node()

    def insert(self, word: str) -> None:
        curr = self.root
        for char in word:
            if char not in curr.childs:
                curr.childs[char] = Node()
            curr = curr.childs[char]
        curr.is_word_end = True

    def search(self, word: str) -> bool:
        curr = self.root
        for char in word:
            if char not in curr.childs:
                return False
            curr = curr.childs[char]
        return curr.is_word_end

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for char in prefix:
            if char not in curr.childs:
                return False
            curr = curr.childs[char]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)