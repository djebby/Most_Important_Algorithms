// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/ (top-interview-questions)

class MinHeap {
  constructor() {
    this.heap = new Array(1);
  }

  push(tuple) {
    this.heap.push(tuple);
    let i = this.heap.length - 1;
    while (i > 1 && this.heap[i][0] < this.heap[Math.floor(i / 2)][0]) {
      [this.heap[Math.floor(i / 2)], this.heap[i]] = [this.heap[i], this.heap[Math.floor(i / 2)]];
      i = Math.floor(i / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    let min = this.heap[1];
    this.heap[1] = this.heap.pop();
    let i = 1;
    // percolate down
    while (2 * i < this.heap.length) {
      if (2*i+1 < this.heap.length && this.heap[i][0] > this.heap[2*i+1][0] && this.heap[2*i+1][0] < this.heap[2*i][0]) {
        // parent > right child && right child < left child
        [this.heap[i], this.heap[2*i+1]] = [this.heap[2*i+1], this.heap[i]];
        i = 2 * i + 1;
      } else if (this.heap[i][0] > this.heap[2*i][0]) {
        // parent > left child && right child > left child
        [this.heap[i], this.heap[2*i]] = [this.heap[2*i], this.heap[i]];
        i = 2 * i;
      } else {
        break;
      }
    }

    return min;
  }
}


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {

  const minHeap = new MinHeap();

  for (let i = 0; i < matrix.length; i += 1) {
    minHeap.push([matrix[i][0], i, 0]); // [val, row, col]
  }

  while (true) {
    const [val, row, col] = minHeap.pop();
    if (col+1 < matrix[0].length) {
      minHeap.push([matrix[row][col+1], row, col+1]);
    }
    k -= 1;
    if (k==0) return val;
  }

};
