import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

public class RandomizedSet {
	private HashMap<Integer, Integer> valIndex;
	private List<Integer> valSet;
	private Random random;

	public RandomizedSet() {
		this.valIndex = new HashMap<Integer, Integer>();
		this.valSet = new ArrayList<Integer>();
		this.random = new Random();
	}
		
	public boolean insert(int val) {
		if(this.valIndex.containsKey(val)) {
			return false;
		}
		
		this.valIndex.put(val, this.valSet.size());
		this.valSet.add(val);
		return true;
	}
		
	public boolean remove(int val) {
		if(!this.valIndex.containsKey(val)) {
			return false;
		}

		int index = this.valIndex.get(val);
		int lastValue = this.valSet.get(this.valSet.size()-1);
		
		// the overriding phase--------------------------------------------------
		// override the to be removed value in the array with the last value
		this.valSet.set(index, lastValue);
		// update the index of the last value in the hash map to her new index
		this.valIndex.replace(lastValue, index);
		
		// the removing phase-----------------------------------------------------
		// remove the last value in the array
		this.valSet.remove(this.valSet.size()-1);
		// remove the value index pair of the removed value of the hash map
		this.valIndex.remove(val);

		return true;
	}
		
	public int getRandom() {
		// generate a random integer from 0 to valSet.size() [exclusive]
		int randomIndex = this.random.nextInt(this.valSet.size());
		return this.valSet.get(randomIndex);
	}
}