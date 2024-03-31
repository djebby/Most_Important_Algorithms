// https://leetcode.com/problems/insert-interval/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

  if (intervals.length === 0) return [newInterval];

  let isNewIntervInserted = false;

  let mergedIntervals;

  if (intervals[0][0] < newInterval[0]) {
    mergedIntervals = [intervals[0]];
  } else {
    mergedIntervals = [newInterval];
    isNewIntervInserted = true;
  }

  let i = 0;

  while (i < intervals.length) {
    const interval = intervals[i];
    let toInsert;
    if (isNewIntervInserted) {
      toInsert = interval;
      i += 1;
    }
    else if (mergedIntervals[mergedIntervals.length - 1][0] <= newInterval[0] && mergedIntervals[mergedIntervals.length - 1][0] <= interval[0]) {
      if ( interval[0] < newInterval[0]) {
        toInsert = interval;
        i += 1;
      } else {
        isNewIntervInserted = true;
        toInsert = newInterval;
      }
    }
    else {
      if (mergedIntervals[mergedIntervals.length - 1][0] < newInterval[0]) {
        isNewIntervInserted = true;
        toInsert = newInterval;
      } else {
        toInsert = interval;
        i += 1;
      }
    }
    
    if (toInsert[0] <= mergedIntervals[mergedIntervals.length - 1][1]) mergedIntervals[mergedIntervals.length - 1][1] = Math.max(toInsert[1], mergedIntervals[mergedIntervals.length - 1][1]);
    else mergedIntervals.push(toInsert);
  }



  if (!isNewIntervInserted) {
    if (newInterval[0] <= mergedIntervals[mergedIntervals.length - 1][1]) mergedIntervals[mergedIntervals.length - 1][1] = Math.max(newInterval[1], mergedIntervals[mergedIntervals.length - 1][1]);
    else mergedIntervals.push(newInterval);
  }
  

  return mergedIntervals;
};
// console.log(insert([[10, 15], [20, 25], [30, 35]], [25, 30]));


// console.log(insert([[6, 8]], [5, 10]));
console.log(insert([[3, 7]], [5, 10]));
// console.log(insert([[8, 13]], [5, 10]));
// console.log(insert([[3, 13]], [5, 10]));
// console.log(insert([[0, 4]], [5, 10]));
// console.log(insert([[11, 15], [20, 25], [30, 35]], [5, 10]));