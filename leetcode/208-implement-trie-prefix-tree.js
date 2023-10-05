// https://leetcode.com/problems/implement-trie-prefix-tree/ (top-interview-questions)

class Node {
  constructor() {
    this.childs = {};
    this.isWordEnd = false;
  }
}

var Trie = function() {
  this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  
  let node = this.root;
  for (const char of word) {
    if (!node.childs.hasOwnProperty(char)) {
      node.childs[char] = new Node();
    }
    node = node.childs[char];
  }

  node.isWordEnd = true;

};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  
  let node = this.root;
  for (const char of word) {
    if (!node.childs.hasOwnProperty(char)) {
      return false;
    }
    node = node.childs[char];
  }

  return node.isWordEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (const char of prefix) {
    if (!node.childs.hasOwnProperty(char)) {
      return false;
    }
    node = node.childs[char];
  }

  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
