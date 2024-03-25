import java.util.ArrayList;
import java.util.List;

public class FindAllDuplicatesInAnArray442 {
    public List<Integer> findDuplicates(int[] nums) {

        List<Integer> duplicates = new ArrayList<>();

        for (int i = 0; i < nums.length; i += 1) {
            int x = Math.abs(nums[i]);
            if (nums[x - 1] < 0) {
                duplicates.add(x);
            }
            nums[x-1] *= -1;
        }

        return duplicates;
    }

    public static void main(String[] args) {
        FindAllDuplicatesInAnArray442 self = new FindAllDuplicatesInAnArray442();
        int[] nums = {4,3,2,7,8,2,3,1};
        self.findDuplicates(nums);
    }
}
