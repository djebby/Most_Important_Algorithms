function bubbleSort(unsortedArray) {
    let sortedArray = unsortedArray.slice();

    for(let i=0; i<sortedArray.length-1; i++) {
        for(let j=0; j<sortedArray.length-1-i; j++) {
            if(sortedArray[j] > sortedArray[j+1]){
                [sortedArray[j], sortedArray[j+1]] = [sortedArray[j+1], sortedArray[j]];
            }
        }
    }

    return sortedArray;
}

let array = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
console.log(array);
console.log(bubbleSort(array));
console.log(array);