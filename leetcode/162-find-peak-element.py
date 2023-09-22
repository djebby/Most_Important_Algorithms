# https://leetcode.com/problems/find-peak-element/ (top-interview-questions)

from typing import List


class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1

        while True:
            mid = left + (right - left) // 2
            # if we are not at the first value (index 0) and we are in a decrising order 
            # (nums[mid-1] > nums[mid]) then for sure there is a peek in the left side...
            if mid > 0 and nums[mid-1] > nums[mid]:
                right = mid - 1
            # else if we are not at the end value and we are in an incrising order 
            # (nums[mid] < nums[mid+1]) then for sure there is a peek in the right side...
            elif mid < len(nums) - 1 and nums[mid] < nums[mid+1]:
                left = mid + 1
            # else cases ( mid == 0 and nums[mid] > nums[mid+1] )
            # or ( nums[mid-1] < nums[mid] and nums[mid] > nums[mid+1] )
            # or ( mid == len(nums)-1 and nums[mid-1] < nums[mid] )
            # then nums[mid] is a peek so we return it
            else:
                return mid
