class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


class Stack {

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value, this.first);
        if(!this.first && !this.last) {
            this.first = newNode, this.last = newNode;
        }

        this.first = newNode;
        return ++this.size;
    }

    pop() {
        if(!this.first && !this.last) return null;
        
        let firstNode = this.first;

        if(this.first === this.last) this.last = null;

        this.first = this.first.next;
        this.size--;
        return firstNode;
    }


    toString() {
        if(!this.first) return 'the stack is empty';
        let str = '';
        let currentNode = this.first;
        while(currentNode) {
            str += '|' + currentNode.value + '|\n';
            currentNode = currentNode.next;
        }

        return str+'|__|';
    }

}