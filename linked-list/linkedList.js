/* +----------------------------head of the linked list
   A --> B --> C --> D
                     +----------------------------------tail of the linked list
*/

//----------HOW WE REPRESENT THIS LINKED LIST PROGRAMMATICALLY ?-----------------
//1ST CREATION OF NODES----------------------------------------------------------
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
//2nd CREATION OF LINKED LIST----------------------------------------------------
a.next = b;
b.next = c;
c.next = d;