function insertionSort(unsortedArray) {
    let sortedArray = unsortedArray.slice();

    for(let i=1; i<sortedArray.length; i++)
        for(let j=i; j>0; j--)
            if( sortedArray[j-1] > sortedArray[j] )
                [sortedArray[j], sortedArray[j-1]] 
                                = 
                [sortedArray[j-1], sortedArray[j]];
            else break;

    return sortedArray;
}


// https://www.linkedin.com/in/djebby-firas/
