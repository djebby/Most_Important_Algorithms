import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

// https://leetcode.com/problems/binary-tree-postorder-traversal/

public class BinaryTreePostorderTraversal145 {

	public List<Integer> postorderTraversal(TreeNode root) {

		ArrayList<Integer> values = new ArrayList<>();
		ArrayList<TreeNode> stack = new ArrayList<>();
		if(root != null) { 
			stack.add(root);
		}
	
		while(stack.size() > 0) {
			TreeNode node = stack.get(stack.size()-1);
			stack.remove(stack.size()-1);
			values.add(node.val);
			
			if(node.left != null) {
				stack.add(node.left);
			}

			if(node.right != null) {
				stack.add(node.right);
			}
		}
		// hint: [ left - right - root ] is just the inverse of [ root - right - left ]
		Collections.reverse(values);
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
