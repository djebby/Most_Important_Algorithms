import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

// https://leetcode.com/problems/course-schedule/ (top-interview-questions)

public class CourseSchedule207 {

	HashMap<Integer, ArrayList<Integer>> adjList = new HashMap<>();
	HashSet<Integer> visited = new HashSet<>();

	public boolean canFinish(int numCourses, int[][] prerequisites) {
		
		
		for(int i = 0; i < numCourses; i++) {
			this.adjList.put(i, new ArrayList<Integer>());
		}

		for(int i = 0; i < prerequisites.length; i++) {
			int course = prerequisites[i][0];
			int pre = prerequisites[i][1];
			this.adjList.get(course).add(pre);
		}


		for(int i = 0; i < numCourses; i++) {
			if(!this.depthFirstSearch(i)) {
				return false;
			}
		}
		
		return true;
	}



	private boolean depthFirstSearch(int crs) {
		
		if(this.visited.contains(crs)) {
			return false;
		}

		if(this.adjList.get(crs).size() == 0) {
			return true;
		}

		this.visited.add(crs);
		for(int i = 0; i < this.adjList.get(crs).size(); i++) {
			if(!this.depthFirstSearch(this.adjList.get(crs).get(i))) {
				return false;
			}
		}
		this.visited.remove(crs);
		this.adjList.put(crs, new ArrayList<Integer>());
		return true;
	}
}