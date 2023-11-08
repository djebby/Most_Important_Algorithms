import java.util.ArrayList;
import java.util.List;

// https://leetcode.com/problems/binary-tree-preorder-traversal/

public class BinaryTreePreorderTraversal144 {
	public List<Integer> preorderTraversal(TreeNode root) {
		ArrayList<Integer> values = new ArrayList<>();
		ArrayList<TreeNode> stack = new ArrayList<>();
		if(root != null) { 
			stack.add(root);
		}

		while(stack.size() > 0) {
			TreeNode node = stack.get(stack.size()-1);
			stack.remove(stack.size()-1);
			values.add(node.val);
			if(node.right != null) {
				stack.add(node.right);
			}
			if(node.left != null) {
				stack.add(node.left);
			}
		}

		return values;
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