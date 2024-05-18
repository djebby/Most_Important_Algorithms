// https://leetcode.com/problems/distribute-coins-in-binary-tree/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *	 int val;
 *	 TreeNode left;
 *	 TreeNode right;
 *	 TreeNode() {}
 *	 TreeNode(int val) { this.val = val; }
 *	 TreeNode(int val, TreeNode left, TreeNode right) {
 *		 this.val = val;
 *		 this.left = left;
 *		 this.right = right;
 *	 }
 * }
 */

class Solution {
	private int minMoves = 0;

	public int distributeCoins(TreeNode root) {
		this.dfs(root);
		return this.minMoves;
	}

	private int[] dfs(TreeNode node) {
		if (node == null) return new int[]{0, 0};
		int[] left = this.dfs(node.left);
		int[] right = this.dfs(node.right);
		int size = 1 + left[0] + right[0];
		int coins = node.val + left[1] + right[1];
		this.minMoves += Math.abs(size - coins); // Inequality between size and coins will create more required moves, either sending coins (coins > size) or receiving them (coins < size).
		return new int[]{size, coins};
	}
}
