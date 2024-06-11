// Method 1
// function insertionShort(arr){
//     let result = [arr[0]]                               

//     for(let i = 1; i < arr.length; i++){                

//             for(j=(i-1); j >= 0; j--){                  
//                 if(arr[i] > result[j]){                 
//                     if(j == (result.length-1)){         
//                         result.push(arr[i])   
//                         break;
//                     }

//                     let x = result.slice(j+1)

//                     let resultLength = result.length
//                     result.splice((j+1), (resultLength))
//                     result[j+1] = arr[i]    
//                     result = result.concat(x)

//                     break;
//                  }
//         }
//     }
//     return result;
// }

// insertionShort([3,44,38,5,47,15])




// Method 2
function insertionSort(arr) {
for (var i = 1; i < arr.length; i++) {                              
    var currentVal = arr[i];                                        
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {       
        arr[j + 1] = arr[j]                                         
        }
    arr[j+1] = currentVal;                                          
    console.log(arr)
    }
    return arr;
}
insertionSort([2, 1, 9, 76, 4])
