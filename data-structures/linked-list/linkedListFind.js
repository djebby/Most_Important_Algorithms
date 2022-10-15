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
//-------------------------------------------------------------------------------
const linkedListFindIterative = (head, target) => {
    let current = head;
    while(current !== null){
        if(current.val === target) return true;
        current = current.next;
    }
    return false;
}
//-------------------------------------------------------------------------------
const linkedListFindRecursive = (head, target) => {
    if(head === null) return false;

    return head.val === target || linkedListFindRecursive(head.next,target);
}
//-------------------------------------------------------------------------------
let iterativeResult = linkedListFindIterative(a, 'D'); //Return true
let recursiveResult = linkedListFindRecursive(a, 'E');//Return false
console.log("Iterative Result => ",iterativeResult);
console.log("Recursive Result => ",recursiveResult);