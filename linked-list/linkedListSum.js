//1ST CREATION OF NODES----------------------------------------------------------
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(79);
const b = new Node(5);
const c = new Node(3);
const d = new Node(81);
//2nd CREATION OF LINKED LIST----------------------------------------------------
a.next = b;
b.next = c;
c.next = d;
//-------------------------------------------------------------------------------
const linkedListSumIterative = (head) => {
    let current = head;
    let sum = null;
    while(current !== null){
        sum += current.val;
        current = current.next;
    }
    return sum;
}
//-------------------------------------------------------------------------------
const linkedListSumRecursive = (head) => {
    if(head === null) return 0;

    return head.val + linkedListSumRecursive(head.next);
}
//------------------------------------TEST---------------------------------------
let iterativeResult = linkedListSumIterative(a);
let recursiveResult = linkedListSumRecursive(a);
console.log("Iterative Result => ",iterativeResult);
console.log("Recursive Result => ",recursiveResult);
//Correct Result should be : 168