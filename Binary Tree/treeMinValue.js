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
const f = new Node(-6);
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
const treeMinValueIterative = (root) => {
    let minVal = Infinity;
    let Stack = [root];

    while(Stack.length > 0){
        let current = Stack.pop();
        if(current.val < minVal) minVal = current.val;
        if(current.left !== null) Stack.push(current.left);
        if(current.right !== null) Stack.push(current.right);
    }

    return minVal;
}
//-------------------------------------------------------------------RECURSIVELY
const treeMinValueRecursive = (root) => {
    if(root === null) return Infinity;
    let minLeft = treeMinValueRecursive(root.left);
    let minRight = treeMinValueRecursive(root.right);
    return Math.min(minLeft, root.val, minRight);
}



let iterativeResult = treeMinValueIterative(a);
let recursiveResult = treeMinValueRecursive(a);
console.log("Iterative Result => ", iterativeResult);
console.log("Recursive Result => ", recursiveResult);
//Result Should be -6