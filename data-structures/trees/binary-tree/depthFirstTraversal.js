//1ST CREATION OF NODES------------------------------------
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');
const i = new Node('i');
const j = new Node('j');
const k = new Node('k');
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
function depthFirstTraversalIterative(root){
    if (root.length === 0) return [];

    let Stack = [root];
    let Values = [];
    while(Stack.length>0){
        let currentNode = Stack.pop();
        Values.push(currentNode.val);
        if(currentNode.right !== null) Stack.push(currentNode.right);
        if(currentNode.left !== null) Stack.push(currentNode.left);
    }
    return Values;
}
//-------------------------------------------------------------------RECURSIVELY
function depthFirstTraversalRecursive(root){
    if(root === null) return []; //BASE CASE
    let leftValues = depthFirstTraversalRecursive(root.left);
    let rightValues = depthFirstTraversalRecursive(root.right);

    return [root.val, ...leftValues, ...rightValues];
}
//-------------------------------------------------------------------
let iterativeResult = depthFirstTraversalIterative(a);
let recursiveResult = depthFirstTraversalRecursive(a);
console.log("Iterative Result => ",iterativeResult);
console.log("Recursive Result => ",recursiveResult);
//Result Must ['a', 'b', 'd', 'h', 'e', 'i', 'j', 'c', 'f', 'g', 'k']