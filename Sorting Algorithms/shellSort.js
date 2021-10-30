function shellSort(unsortedArray){
    let sortedArray = unsortedArray.slice();

    let increment = Math.floor(sortedArray.length/2);

    while(increment!=0){
        let i = increment;
        while(i<sortedArray.length){
            let j = i - increment;
            while(j>=0 && sortedArray[j] > sortedArray[j+increment]){
                [sortedArray[j], sortedArray[j+increment]] = [sortedArray[j+increment], sortedArray[j]];
                j -= increment;
            }
            i++;
        }
        increment = Math.floor(increment / 2) ;
    }

    return sortedArray;
}