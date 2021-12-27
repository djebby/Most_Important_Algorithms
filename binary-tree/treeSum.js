//1ST CREATION OF NODES------------------------------------
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);
const h = new Node(8);
const i = new Node(9);
const j = new Node(10);
const k = new Node(11);

//2nd CREATION OF TREE-------------------------------------
a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.left=f;
c.right=g;
d.left=h;
e.left=i;
e.right=j;
g.right=k;

//-------------------------------------------------------------------ITERATIVELY
const treeSumIterative = (root) => {
    if(root === null) return 0;
    let Queue = [root];
    let totalSum = 0;

    while(Queue.length > 0){
        const current = Queue.pop();
        totalSum += current.val;

        if(current.left !== null) Queue.unshift(current.left);
        if(current.right !== null) Queue.unshift(current.right);
    }
    return totalSum;
}
//-------------------------------------------------------------------RECURSIVELY
const treeSumRecursive = (root) => {
    if(root === null) return 0;

    return treeSumRecursive(root.left) + root.val + treeSumRecursive(root.right);
}
//-------------------------------------------------------------------
let iterativeResult = treeSumIterative(a);
let recursiveResult = treeSumRecursive(a);
console.log("Iterative Result => ", iterativeResult);
console.log("Recursive Result => ", recursiveResult);
//Result Should be : 66