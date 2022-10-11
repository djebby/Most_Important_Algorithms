/* +----------------------------head node of the singly linked list
   A --> B --> C --> D
                     +----------------------------------tail node of the singly linked list
*/


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // append means "add node to the end of the linked list" like the push in arrays
    append(value) {
        const node = new Node(value);
        if(!this.head) this.head = node;
        if(this.tail) this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    // prepend means "add value to the beginning of the linkedlist" like the unshift in arrays
    prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;
        if(!this.tail) this.tail = node;
        this.length++;
        return this;
    }

    insertAfter(afterValue, value) {
        const existingNode = this.search(afterValue);
        if(!existingNode) {
            throw new Error('could not find a the to be inserted after value ' + afterValue);
        }
        const node = new Node(value, existingNode.next);
        if(existingNode === this.tail) this.tail = node;
        existingNode.next = node;
        
        this.length++;
        return true;
    }

    insertAt(position, value) {
        if(position < 0 || position > this.length) throw new Error('invalid position');
        if(position === 0) return this.prepend(value);
        if(position === this.length) return this.append(value);

        const prevNode = this.get(position-1);
        const newNode = new Node(value, prevNode.next);
        prevNode.next = newNode;
        this.length++;
        return newNode;
    }

    search(value) {
        if(!this.head) return undefined;
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) return currentNode;
            currentNode = currentNode.next;
        }
        return undefined;
    }

    get(position) {
        if(position < 0 || position >= this.length) return undefined;

        let returnedNode = this.head;
        for(let i = 1; i <= position; i++) {
            returnedNode = returnedNode.next;
        }

        return returnedNode;
    }

    set(position, newValue) {
        const node = this.get(position);
        if(!node) throw new Error('invalid position');
        node.value = newValue;
        return node;
    }

    // return the last node (the tail) and delete it... like pop in arrays
    popping() {
        // if the linkedlist is empty
        if(!this.head) return undefined;
        // if there is just one node in the linkedlist
        if(!this.head.next) {
            const uniqueNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return uniqueNode;
        }
        // if there is more then one node int he linkedlist
        let newTail = this.head;
        let currentNode = this.head;
        while(currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        
        newTail.next = null;
        this.tail = newTail;
        this.length--;

        return currentNode;
    }

    // return the first node (the head) and remove it... like shift in arrays
    shifting() {
        if(!this.head) return undefined;
        const firstNode = this.head;
        this.head = this.head.next;
        if(!this.head) this.tail = null;
        this.length--;
        return firstNode;
    }

    deleteByValue(value) {
        if(!this.head) return 0;

        let deletionCounter = 0;

        while(this.head && this.head.value === value) {
            this.head = this.head.next;
            deletionCounter++;
        }

        let currentNode = this.head;

        while(currentNode.next) {
            if(currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                deletionCounter++;
            } else {
                currentNode = currentNode.next;
            }
        }

        /*
         * if the value to be deleted is equal to the value in the tail node that's mean 
         * that at this line of code the previous while loops deleted the node of the tail
         * so we need to update our tail to be the currentNode (which -currentNode- 
         * should be until this line of code the last node of our linkedlist)
         */
        if(this.tail.value === value) {
            this.tail = currentNode;
        }

        this.length -= deletionCounter;
        return deletionCounter;
    }

    deleteByPosition(position) {
        if(position < 0 || position >= this.length) throw new Error('invalid position');
        if(position === 0) return this.shifting();
        if(position === this.length - 1) return this.popping();

        const prevNode = this.get(position - 1);
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    toArray() {
        if(!this.head) return [];

        const nodeValues = [this.head.value];

        let currentNode = this.head.next;
        while(currentNode) {
            nodeValues.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return nodeValues;
    }

    toString() {
        const linkedListValues = this.toArray();
        let string = linkedListValues[0];
        for(const value of linkedListValues.slice(1)) {
            string += '-->'+value;
        }
        string += '-->null';
        return string;
    }

    reverse() {
        let node = this.head; // step 01 - save the original head of the linked-list
        this.head = this.tail; // step 02 - switch the head node with the tail node and vice versa
        this.tail = node;

        let next; // should store the next node 
        let prev = null; // should store the previous node
        while (node !== null) { // step 03 - loop through all the nodes of our linked list and reverse the next pointer of every node...
            next = node.next; // slid the next-node up
            node.next = prev; // switch the pointer of the current node to be pointing to the prev node (we just reverse the pointer...)
            prev = node; // slid the prev-node up
            node = next; // slid the current-node up
        }
        return this;
    }
}


