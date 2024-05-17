// https://leetcode.com/problems/delete-leaves-with-a-given-value/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode removeLeafNodes(TreeNode root, int target) {
        return this.dfs(root, target) ? null : root;
    }

    private boolean dfs(TreeNode node, int target) {
        if (node == null) return true;
        boolean left = this.dfs(node.left, target);
        boolean right = this.dfs(node.right, target);
        if (left) node.left = null;
        if (right) node.right = null;
        if (left && right && node.val == target) return true;
        return false;
    }
}
