// Easy Code
    // function sumZero(arr) {
    //     let ans = []
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = i + 1; j < arr.length; j++) {
    //             let sum = arr[i] + arr[j]
    //             if (sum == 0) {
    //                 ans.push(arr[i], arr[j])
    //             }
    //         }
    //     }
    //     return ans
    // }



// Adv Code
    function sumZero(arr) {
        let leftPointer = 0;
        let rightPointer = arr.length - 1;

        let sum = arr[leftPointer] + arr[rightPointer]
        let ans = []

        while (leftPointer < rightPointer) {
sum = arr[leftPointer] + arr[rightPointer]
            
            if (sum < 0) {
                leftPointer++
            } else if (sum > 0) {
                rightPointer--
            } else if(sum == 0){
                ans.push(arr[leftPointer], arr[rightPointer])
                 leftPointer++
                 rightPointer--
            }
        }
        return ans
    }