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
const reverseListIterative = (head) => {
  let current = head;
  let prev = null;
  while(current !== null){
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
  return prev;
}
//-------------------------------------------------------------------------------
const reverseListRecursive = (head, prev = null) => {
    if(head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseListRecursive(next, head);
}
//-------------------------------------------------------------------------------
let iterativeResult = reverseListIterative(a);
let recursiveResult = reverseListRecursive(a);
console.log("Iterative Result => ",iterativeResult);
console.log("Recursive Result => ",recursiveResult);
//Return the new head of the reversed list: d