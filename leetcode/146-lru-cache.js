// https://leetcode.com/problems/lru-cache/ (top-interview-questions)

// Definition for doubly-linked list.
function ListNode(val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.head = new ListNode(null, null);
  this.tail = new ListNode(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.cache = new Map();

  // helper functions... append a new node to a linked list
  this.appendNode = (node) => {
    const prev = this.tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
  }

  // helper functions... remove a node from a doubly linked list
  this.removeNode = (node) => {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    this.removeNode(node);
    this.appendNode(node);
    return node.val;
  }
  
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  
  // in case that we have add a new key-value and we have reach our capacity...
  if (!this.cache.has(key) && this.cache.size === this.capacity) {
    // the number of keys will exceeds the capacity, so evict the least recently used key
    const lRUNode = this.head.next;
    this.cache.delete(lRUNode.key); // delete from the hash map
    this.removeNode(lRUNode); // delete from the doubly linked list
  }

  // in case that we have to replace an existed key with a new value
  if (this.cache.has(key)) {
    // delete the old one
    const node = this.cache.get(key);
    this.removeNode(node); // delete from the doubly linked list
  }


  // in the two cases we have to insert a new key - value pair
  const newNode = new ListNode(key, value);
  this.cache.set(key, newNode); // insertion in the hash map
  this.appendNode(newNode); // insertion in the doubly linked list

};
