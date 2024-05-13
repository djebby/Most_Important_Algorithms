// https://leetcode.com/problems/minimum-cost-to-hire-k-workers/

/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
  const n = quality.length;
  const maxHeap = new MaxHeap();

  const ratios = [];
  for (let i = 0; i < n; i += 1) {
    ratios.push({ q: quality[i], r: (wage[i] / quality[i]) });
  }

  ratios.sort((a, b) => (a.r - b.r)); // r = ratio of the i'th workers, it's mean basically how mush we should pay for him and his colleges per quality

  let totalQualities = 0;

  let minCost = Infinity;

  for (let i = 0; i < n; i += 1) {
    const { q, r } = ratios[i];
    totalQualities += q;
    maxHeap.add(q);

    if (maxHeap.heap.length > k) {
      totalQualities -= maxHeap.remove();
    }
    
    if (maxHeap.heap.length == k) {
      minCost = Math.min(minCost, totalQualities * r);
    } 
  }


  return minCost;

};



class MaxHeap {
  constructor() {
      this.heap = [];
  }
  
  // Helper Methods
  getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
  getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
  
  getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
  }
  
  hasLeftChild(index) {
      return this.getLeftChildIndex(index) < this.heap.length;
  }
  
  hasRightChild(index) {
      return this.getRightChildIndex(index) < this.heap.length;
  }
  
  hasParent(index) {
      return this.getParentIndex(index) >= 0;
  }
  
  leftChild(index) {
      return this.heap[this.getLeftChildIndex(index)];
  }
  
  rightChild(index) {
      return this.heap[this.getRightChildIndex(index)];
  }
  
  parent(index) {
      return this.heap[this.getParentIndex(index)];
  }
  
  swap(indexOne, indexTwo) {
      const temp = this.heap[indexOne];
      this.heap[indexOne] = this.heap[indexTwo];
      this.heap[indexTwo] = temp;
  }
  
  peek() {
      if (this.heap.length === 0) {
          return null;
      }
      return this.heap[0];
  }
   
  // Removing an element will remove the
  // top element with highest priority then
  // heapifyDown will be called 
  remove() {
      if (this.heap.length === 0) {
          return null;
      }
      const item = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.heapifyDown();
      return item;
  }
  
  add(item) {
      this.heap.push(item);
      this.heapifyUp();
  }
  
  heapifyUp() {
      let index = this.heap.length - 1;
      while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
          this.swap(this.getParentIndex(index), index);
          index = this.getParentIndex(index);
      }
  }
  
  heapifyDown() {
      let index = 0;
      while (this.hasLeftChild(index)) {
          let largerChildIndex = this.getLeftChildIndex(index);
          if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
              largerChildIndex = this.getRightChildIndex(index);
          }
          if (this.heap[index] > this.heap[largerChildIndex]) {
              break;
          } else {
              this.swap(index, largerChildIndex);
          }
          index = largerChildIndex;
      }
  }
}
