class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value, null, this.tail);
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  // return and remove the last node...
  popping() {
    if (!this.tail) return undefined;
    const currentTail = this.tail;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      this.length--;
      return currentTail;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    currentTail.prev = null;
    return currentTail;
  }

  // adding node in the beginning...
  prepend(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.length++;
    return this;
  }

  shifting() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return currentHead;
    }

    this.head = this.head.next;
    this.head.prev = null;
    currentHead.next = null;
    this.length--;
    return currentHead;
  }

  insertAt(position, value) {
    if (position === 0) return this.prepend(value).head;
    if (position === this.length) return this.append(value).tail;

    const prevNode = this.get(position - 1);
    const newNode = new Node(value, prevNode.next, prevNode);
    prevNode.next = newNode;
    newNode.next.prev = newNode;
    this.length++;
    return newNode;
  }

  get(position) {
    if (
      position < 0 ||
      position >= this.length ||
      position == undefined ||
      !Number.isInteger(position)
    )
      throw new Error("invalid position");

    let searchedNode;

    if (position > this.length - 1 / 2) {
      searchedNode = this.tail;
      for (let i = this.length - 2; i >= position; i--)
        searchedNode = searchedNode.prev;
      return searchedNode;
    }

    searchedNode = this.head;
    for (let i = 1; i <= position; i++) searchedNode = searchedNode.next;
    return searchedNode;
  }

  // this is an update for the value of a node and not a create of a new node
  set(position, newValue) {
    const node = this.get(position);
    node.value = newValue;
    return node;
  }

  deleteByPosition(position) {
    if (position === 0) return !!this.shifting();
    if (position === this.length - 1) return !!this.popping();
    const deletedNode = this.get(position);

    deletedNode.prev.next = deletedNode.next;
    deletedNode.next.prev = deletedNode.prev;
    (deletedNode.next = null), (deletedNode.prev = null);
    this.length--;
    return true;
  }

  toArray() {
    if (!this.head) return [];
    const values = [this.head.value];

    let currentNode = this.head.next;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }

  toString() {
    const values = this.toArray();
    if (values.length === 0) return "empty doubly linked list";
    let string = "length: " + this.length + " null<--" + values[0];
    for (const value of values.slice(1)) {
      string += "<-->" + value;
    }
    string += "-->null";
    return string;
  }
}