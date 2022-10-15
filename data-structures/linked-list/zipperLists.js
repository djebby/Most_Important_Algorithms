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

const x = new Node("X");
const y = new Node("Y");
const z = new Node("Z");
//2nd CREATION OF THE FIRST LINKED LIST------------------------------------------
a.next = b;
b.next = c;
c.next = d;
//2nd CREATION OF THE SECOND LINKED LIST-----------------------------------------
x.next = y;
y.next = z;
//-------------------------------------------------------------------------------
const zipperListsIterative = (head1, head2) => {

    let tail = head1;

    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while(current1 !== null && current2 !== null){
        if(count % 2 === 0){
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }

        tail = tail.next;
        count ++;
    }

    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;

    return head1;
};
//-------------------------------------------------------------------------------
const zipperListsRecursive = (head1, head2) => {
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;

    head1.next = head2;
    head2.next = zipperListsRecursive(next1, next2);
    return head1;
};
//-------------------------------------------------------------------------------
let iterativeResult = zipperListsIterative(a,x);
let recursiveResult = zipperListsRecursive(a,x);
console.log("Iterative Result => ",iterativeResult);
console.log("Recursive Result => ",recursiveResult);
// Just run one approach at one time don't execute both at the same time
//It should return a linked list like that :
// a -> x -> b -> y -> c -> z -> d