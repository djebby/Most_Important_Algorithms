import java.util.ArrayList;

// https://leetcode.com/problems/min-stack/ (top-interview-questions)

class MinStack {

	ArrayList<Integer> minStack = new ArrayList<>();
	ArrayList<Integer> minValues = new ArrayList<>();

	public MinStack() {

	}
		
	public void push(int val) {
		this.minStack.add(val);
		if(this.minValues.isEmpty())
			this.minValues.add(val);
		else
			this.minValues.add(Math.min(val, this.minValues.get(this.minValues.size()-1)));
	}

	public void pop() {
		this.minStack.remove(this.minStack.size()-1);
		this.minValues.remove(this.minValues.size()-1);
	}
		
	public int top() {
		return this.minStack.get(this.minStack.size()-1);
	}
		
	public int getMin() {
		return this.minValues.get(this.minValues.size()-1);
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */