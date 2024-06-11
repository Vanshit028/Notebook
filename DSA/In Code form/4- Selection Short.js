    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    function selectionShort(arr){
    for(let i=0; i<arr.length; i++){
        let minNumIndex=i
        let noSwap;
        for(let j=i+1; j<arr.length; j++){
            noSwap=true
            if(arr[minNumIndex] > arr[j]){
                minNumIndex=j
            }
            if(j == (arr.length-1)){
                swap(arr, i, minNumIndex )
                noSwap=false
            }
        }
        if(noSwap) break;
    }
    return arr;
    }

    selectionShort([47, 1, 19, 7, 7, 36, 31, 1, 20, 10])