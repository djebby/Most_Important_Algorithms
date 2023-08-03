// https://leetcode.com/problems/merge-intervals/ (top-interview-questions)

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  
  intervals.sort((interval1, interval2) => (interval1[0] - interval2[0]));
  
  const mergedIntervals = [ intervals[0] ];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if ( interval[0] <= mergedIntervals[mergedIntervals.length - 1][1] ) {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], interval[1]);
    } else {
      mergedIntervals.push(interval);
    }
  }

  return mergedIntervals;
};
