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
const getNodeValueIterative = (head, index) => {
    let current = head;
    let currentIndex = 0;
    while(current !== null ){
        if(currentIndex === index) return current.val;
        currentIndex++;
        current = current.next;
    }
    return null;
}
//-------------------------------------------------------------------------------
const getNodeValueRecursive = (head, index) => {
    if(head === null) return null;
    if(index === 0) return head.val;
    return getNodeValueRecursive(head.next, index-1);
}
//-------------------------------------------------------------------------------
let iterativeResult = getNodeValueIterative(a,5);//Return null
let recursiveResult = getNodeValueRecursive(a,3);//Return D
console.log("Iterative Result => ",iterativeResult);
console.log("Recursive Result => ",recursiveResult);