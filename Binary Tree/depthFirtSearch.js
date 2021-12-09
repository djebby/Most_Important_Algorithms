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
function depthFirstSearchIterative(root,target){
    if(root == null) return false;

    let Stack = [root];
    while(Stack.length > 0){
        let current = Stack.pop();
        if(current.val === target) return true;

        if(current.left !== null) Stack.push(current.left);
        if(current.right !== null) Stack.push(current.right);

    }
    return false;
}
//-------------------------------------------------------------------RECURSIVELY
function depthFirstSearchRecursive(root,target){
    if(root == null) return false;
    if(root.val === target) return true;

    return depthFirstSearchRecursive(root.right,target) || depthFirstSearchRecursive(root.left,target);
}