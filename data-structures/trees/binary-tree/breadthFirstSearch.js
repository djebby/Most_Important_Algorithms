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
function breadthFirstSearch(root,target){
    if(root == null) return false;

    let Queue = [root];
    while(Queue.length > 0){
        let current = Queue.pop();
        if(current.val == target) return true;
        
        if(current.left !== null) Queue.unshift(current.left);
        if(current.right !== null) Queue.unshift(current.right);
    }
    return false;
}