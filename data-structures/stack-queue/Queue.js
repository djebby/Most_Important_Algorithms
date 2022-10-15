class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value, null);
        if(!this.first && !this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if(!this.first && !this.last) return null;

        const firstNode = this.first;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return firstNode.value;
    }

}

// O(1) in enqueue & O(1) in dequeue... constant time for adding and removing from the queue...