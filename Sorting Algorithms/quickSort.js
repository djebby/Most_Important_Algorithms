const quickSort = (unsortedArray) => {
    if(unsortedArray.length <= 1) return unsortedArray;

    const pivot = unsortedArray[unsortedArray.length-1];
    let leftArray = [];
    let rightArray = [];

    for(let element of unsortedArray.slice(0, unsortedArray.length-1))
        element > pivot ? rightArray.push(element) : leftArray.push(element);

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

//https://www.linkedin.com/in/djebby-firas/