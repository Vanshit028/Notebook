// Method 1
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleShort(arr){
    for(let i= (arr.length-1); i>=0; i--){
        for(let j=0; j<=i; j++){
           let leftIndex = arr[j];
            let rightIndex = arr[j+1];
            
            if(leftIndex > rightIndex){
            swap(arr, j, (j+1))
            } 
        }
    }
    return arr;
}

bubbleShort([7,43,48,35,6,42,43,16,20,23])



// Method 2
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleShort(arr){
    let arr_length = arr.length;
    let swapping = false;

do{
    swapping = false;

    for(let i=0; i<arr_length; i++){
    let leftIndex = arr[i];
    let rightIndex = arr[i+1];
    if(leftIndex > rightIndex){
    swap(arr, i, (i + 1))
    swapping = true
    }

    if(i == arr_length){
        i = 0;
        arr_length--
    }}

}while (swapping)

return arr
}

bubbleShort([7, 43, 48, 35, 6, 42, 43, 16, 20, 23])