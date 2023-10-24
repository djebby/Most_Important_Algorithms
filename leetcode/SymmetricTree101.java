// https://leetcode.com/problems/symmetric-tree/ (top-interview-questions)

public class SymmetricTree101 {
	public boolean isSymmetric(TreeNode root) {
		return this.isMirror(root.left, root.right);
	}

	private boolean isMirror(TreeNode node1, TreeNode node2) {
		if(node1 == null || node2 == null)
			return node1 == node2;
		return node1.val == node2.val && this.isMirror(node1.left, node2.right) && this.isMirror(node1.right, node2.left);
	}
}



// Definition for a binary tree node.
class TreeNode {
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