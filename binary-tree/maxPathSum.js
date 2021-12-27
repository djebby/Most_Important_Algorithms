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
//-------------------------------------------------------------------
const maxPathSum = (root)=>{
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) return root.val;
    let maxChildPath = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.val + maxChildPath;
}
//-------------------------------------------------------------------
console.log(maxPathSum(a));
//Should Return: 22
