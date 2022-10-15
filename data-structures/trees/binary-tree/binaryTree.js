/*
+-----------------------BINARY TREE-----------------------+
| -A binary tree is a tree that eavry node parent has at  |
| most 2 children.                                        |
| -A binary tree have exactly 1 root.                     |
| -A binary tree have exactly one path betwen root and    |
| any node.                                               |
+---------------------------------------------------------+

                EXAMPLE OF A BINARY TREE

                           a <------------Root of the tree
        Eadge ---------> /   \              (NO PARENT)
                        b     c <----+
                       / \   / \     +---Right Child of (a)
Left Child ---------> d   e  f  g     
   of (b)            /   / \     \
                    h   i   j     k 
                    ^___^___^_____^___+---> Leaf (NO CHILD)
*/


//------HOW WE REPRESENT THIS TREE PROGRAMMATICALLY ?------

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