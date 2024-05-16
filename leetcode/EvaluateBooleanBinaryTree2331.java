// https://leetcode.com/problems/evaluate-boolean-binary-tree/

// Definition for a binary tree node.
public class TreeNode {
	int val;
	TreeNode left;
 	TreeNode right;
 	TreeNode() {}
 	TreeNode(int val) { this.val = val; }
 	TreeNode(int val, TreeNode left, TreeNode right) {
 		this.val = val;
 		this.left = left;
 		this.right = right;
 	}
}


public class EvaluateBooleanBinaryTree2331 {
    public boolean evaluateTree(TreeNode root) {
        if (root.val == 0) return false;
        else if (root.val == 1) return true;
        else if (root.val == 2) return evaluateTree(root.left) || evaluateTree(root.right); 
        else return evaluateTree(root.left) && evaluateTree(root.right);
    }
}
