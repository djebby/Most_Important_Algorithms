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
const linkedListValuesIterative = (head) => {
    let current = head;
    let values = [];
    while(current !== null ){
        values.push(current.val);
        current = current.next;
    }
    return values;
}
//-------------------------------------------------------------------------------
const linkedListValuesRecursive = (head) => {
    if(head === null) return [];
    return [head.val, ...linkedListValuesRecursive(head.next)];
}
//-------------------------------------------------------------------------------
let iterativeResult = linkedListValuesIterative(a);
let recursiveResult = linkedListValuesRecursive(a);
console.log("Iterative Result => ",iterativeResult);
console.log("Recursive Result => ",recursiveResult);
//Result should be : [ 'A', 'B', 'C', 'D' ]