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
function breadthFirstTraversalIterative(root){
    if (root.length === 0) return [];

    let Queue = [root];
    let Values = [];
    while(Queue.length>0){
        let currentNode = Queue.pop();
        Values.push(currentNode.val);
        if(currentNode.left !== null) Queue.unshift(currentNode.left);
        if(currentNode.right !== null) Queue.unshift(currentNode.right);
    }
    return Values;
}
//-------------------------------------------------------------------
let iterativeResult = breadthFirstTraversalIterative(a);
console.log("Iterative Result => ",iterativeResult);
//Result Must ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']