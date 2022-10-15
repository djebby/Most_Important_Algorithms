function mergeSortedArrays(leftArray, rightArray) {
  let i = 0;
  let j = 0;
  let mergedArray = [];

  while (i < leftArray.length && j < rightArray.length)
    if (leftArray[i] > rightArray[j]) mergedArray.push(rightArray[j++]);
    else mergedArray.push(leftArray[i++]);

  return [...mergedArray, ...leftArray.slice(i), ...rightArray.slice(j)];
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  else if (array.length === 2)
    return array[0] < array[1] ? array : [array[1], array[0]];

  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf));
}

// https://www.linkedin.com/in/djebby-firas/
