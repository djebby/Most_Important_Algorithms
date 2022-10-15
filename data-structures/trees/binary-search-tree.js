class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value < value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        } else {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        }
      }
    }
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return true;
      else if (currentNode.value < value) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }
    return false;
  }
  breadthFirstValues() {
    const values = [],
      queue = [this.root];
    while (queue.length > 0) {
      const node = queue.pop();
      values.push(node.value);
      if (!!node.left) queue.unshift(node.left);
      if (!!node.right) queue.unshift(node.right);
    }
    return values;
  }
  
  depthFirstPreOrderValues() {
    const values = [],
      stack = [this.root];
    while (stack.length > 0) {
      const node = stack.pop();
      values.push(node.value);
      if (!!node.right) stack.push(node.right);
      if (!!node.left) stack.push(node.left);
    }
    return values;
  }

  depthFirstPostOrderValues() {
    const values = [],
      stack01 = [this.root],
      stack02 = [];

    // iterative...
    while (stack01.length > 0) {
      const node = stack01.pop();
      stack02.push(node);
      if (!!node.left) {
        stack01.push(node.left);
      }
      if (!!node.right) {
        stack01.push(node.right);
      }
    }

    while (stack02.length > 0) values.push(stack02.pop().value);

    /* recursive...
    function traverse(node) {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        values.push(node.value);
    }
    traverse(this.root);
    */
    return values;
  }

  depthFirstInOrderValues() {
    const values = [];
    // iterative...
    let node = this.root,
      stack = [];
    while (stack.length > 0 || node !== null) {
      if (node !== null) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        values.push(node.value);
        node = node.right;
      }
    }
    /* recursive...
    function traverse(node) {
        if(!node) return;
        traverse(node.left);
        values.push(node.value);
        traverse(node.right);
    }
    traverse(this.root);
    */
    return values;
  }
}
