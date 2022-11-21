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
    if (!this.root) return this.root = newNode;

    let node = this.root;
    while(true)
      if (node.value < value)
        if (node.right === null) return node.right = newNode;
        else node = node.right;
      else
        if (node.left === null) return node.left = newNode;
        else node = node.left;
  }

  contains(value) {
    let node = this.root;
    while (node) {
      if (node.value === value) return true;
      else if (node.value < value) node = node.right;
      else node = node.left;
    }
    return false;
  }

  findNode(value) {
    let parent = null;
    let node = this.root;

    while(node.value !== value) {
        parent = node;
        if( node.value < value ) node = node.right;
        else node = node.left;
    }

    return [parent, node];
  }

  #findNextNode(node) {
    if(!node.right) return null;

    let child = node.right;
    while(child.left)
        child = child.left;
    return child;
  }

  remove(value) {
    if(!this.contains(value))  return false;
    const [parent, node] = this.findNode(value);

    if(node.left && node.right) {
      // first case : the to be deleted node has two childs
      /**
       * step 01 is to find who can compensate the node that will be deleted 
       * and the next bigger node is look as a good candidate...
       * we should first CLONE it seperatally in a variable and remove it from the tree.
       */
      const nextBiggerNode = {...this.#findNextNode(node)};
      this.remove(nextBiggerNode.value);
      // step 02 is to override the value of the to be deleted node with the nextBiggerNode value.
      node.value = nextBiggerNode.value;
      
    } else if(node.left || node.right) {
    // second case : the to be deleted node has one single child
      const child = node.left || node.right;
      node.value = child.value;
      node.left = child.left;
      node.right = child.right;

    } else {
    // third case : the to be deleted node has no child (leaf node)
      if(parent.left === node) parent.left = null;
      if(parent.right === node) parent.right = null;
    }

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
  
  /**
   * 
   * @param {boolean} iterativelyOrRecursively 1 for iteratively, 0 for recursively
   * @returns array of values
   */
  depthFirstPreOrderValues(iterativelyOrRecursively = true) { // root left right
    const values = [];

    if(iterativelyOrRecursively) {
      // iteratively...
      const stack = [this.root];
      while (stack.length > 0) {
        const node = stack.pop();
        values.push(node.value);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
      }
    } else {
      // recursively...
      (function traverse(node) {
        values.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
      })(this.root);
    }

    return values;
  }


  depthFirstInOrderValues(iterativelyOrRecursively = true) { // left - root - right
    const values = [];
    let node = this.root;

    if(iterativelyOrRecursively) {
      // iterative...
      const stack = [];
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
    } else {
      // recursive...
      (function traverse(node) {
          if(!node) return;
          traverse(node.left);
          values.push(node.value);
          traverse(node.right);
      })(this.root);
    }
    return values;
  }

  depthFirstPostOrderValues(iterativelyOrRecursively = true) { // left - right - root
    const values = [];
    
    if(iterativelyOrRecursively) {
      // iteratively...
      const stack01 = [this.root], stack02 = [];
      while (stack01.length > 0) {
        const node = stack01.pop();
        stack02.push(node);
        if (node.left) stack01.push(node.left);
        if (node.right) stack01.push(node.right);
      }
      while (stack02.length > 0) 
        values.push(stack02.pop().value);
    } else {
      // recursively...
      (function traverse(node) {
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
          values.push(node.value);
      })(this.root);
    }

    return values;
  }

}