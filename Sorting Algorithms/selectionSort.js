function selectionSort(unsortedArray){
    let sortedArray = unsortedArray.slice();

    for(let i=0; i<sortedArray.length-1; i++)
        for(let j=i+1; j<sortedArray.length; j++)
            if(sortedArray[j] > sortedArray[i])
                [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
        
    return sortedArray;
}



// let array = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
let array = [5,2,6,1,10];

console.log(array);
console.log(selectionSort(array));
console.log(array);