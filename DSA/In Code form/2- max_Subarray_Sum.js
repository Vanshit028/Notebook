//  function maxSubarraySum(arr, window){
// let mainSum = 0, sum = 0;

// for(let i = 0; i< arr.length; i++){
//     let arr2 = arr.slice(i, i+window)
//     for(let val of arr2){
//         sum += val
//    }
//     if(mainSum < sum){
//     mainSum = sum
//     sum = 0
//    }   else{
//     sum = 0
//    }
// }
// return `max sum of ${window} consecutive elements in ${arr} is ${mainSum}`
//  }


// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

    function maxSubarraySum(arr, num) {
        if (num > arr.length) {
            return null;
        }
        var max = -Infinity;
     console.log(max)
        for (let i = 0; i < arr.length - num + 1; i++) {
            temp = 0;
            for (let j = 0; j < num; j++) {
                temp += arr[i + j];
            }
            if (temp > max) {
                max = temp;
            }
        }
        return max;
    }