const quickSort = (array) => {
  if (array.length <= 1) return array;
  // this second base case will save us a lot of recursive call...
  else if (array.length === 2)
    return array[0] < array[1] ? array : [array[1], array[0]];

  const pivot = array[0];
  let lowerArray = [];
  let upperArray = [];

  for (const element of array.slice(1))
    element > pivot ? upperArray.push(element) : lowerArray.push(element);

  return [...quickSort(lowerArray), pivot, ...quickSort(upperArray)];
};

// https://www.linkedin.com/in/djebby-firas/
