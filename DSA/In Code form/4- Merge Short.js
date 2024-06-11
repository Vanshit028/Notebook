// Code to merge 2 sorted array in sorted order.
// Method 1
// function merge(arr1, arr2){
//     let result = []
//     let i=0, j=0;
    
//     for(let i=0; i<arr1.length; i++){

//         while(arr1[i] > arr2[j] && j<arr2.length){
//             result.push(arr2[j])
//             j++;
//         }
//         result.push(arr1[i])
//     }

//     if(j !== arr2.length){
//         let left_element = arr2.slice(j)
//         result = result.concat(left_element)
//     }

//     return result;
// }

// mergeSortedArr([1,4,5],[2,3,7])



// Method 2
// function mergeSortedArr(arr1, arr2){
//     let result = []
//     let i=0, j=0;
    
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i])
//             i++;
//         }else{
//             result.push(arr2[j])
//             j++;
//         }
//     }

//     if(j !== arr2.length){
//         let left_element = arr2.slice(j)
//         result = result.concat(left_element)
//     }   
    
//     if(i !== arr1.length){
//         let left_element = arr1.slice(i)
//         result = result.concat(left_element)
//     }

//     return result
//  }

// mergeSortedArr([1,10,50],[2,3,14,99,100])

let count = 1

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }


  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  console.log(`${count}. is ${result}`)  
  count++
    
  return result  
}



function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}


mergeSort([1,10,50,2,3,14,99,100])
