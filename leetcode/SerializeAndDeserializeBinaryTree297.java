import java.util.ArrayList;

public class SerializeAndDeserializeBinaryTree297 {
	
	private int i = 0;


	// Encodes a tree to a single string.
	public String serialize(TreeNode root) {
		ArrayList<String> values = new ArrayList<>();
		this.depthFirstSerialize(root, values);

		String serializedValues = new String();
		for(int i = 0; i < values.size(); i++) {
			serializedValues += values.get(i)+",";
		}

		return serializedValues.substring(0, serializedValues.length()-1);
	}

	private void depthFirstSerialize(TreeNode root, ArrayList<String> values) {
		if(root == null) {
			values.add("N");
			return;
		}
		values.add(Integer.toString(root.val));
		this.depthFirstSerialize(root.left, values);
		this.depthFirstSerialize(root.right, values);
	}



	
	// Decodes your encoded data to tree.
	public TreeNode deserialize(String data) {
		return this.depthFirstDeserialize(data.split(","));
	}

	private TreeNode depthFirstDeserialize(String[] values) {
		if(values[this.i].equals("N")) {
			this.i++;
			return null;
		}
		TreeNode node = new TreeNode(Integer.parseInt(values[this.i++]));
		node.left = this.depthFirstDeserialize(values);
		node.right = this.depthFirstDeserialize(values);
		return node;
	}


	public static void main(String[] args) {
		SerializeAndDeserializeBinaryTree297 ser = new SerializeAndDeserializeBinaryTree297();
		TreeNode binaryTree = new TreeNode(220);
		binaryTree.left = new TreeNode(11);
		binaryTree.right = new TreeNode(33);
		String data = ser.serialize(binaryTree);
		System.out.println(data);

		TreeNode tree = ser.deserialize(data);
		System.out.println(tree.val);
		System.out.println(tree.left.val);
		System.out.println(tree.right.val);
	}
}

// Definition for a binary tree node.
class TreeNode {
	public int val;
	public TreeNode left;
	public TreeNode right;
	TreeNode(int x) { val = x; }
}