// Method 1
    // function binarySearch(arr, search) {
    //     let index_val = arr.length / 2;
    //     if (arr.length / 2 == 0) {
    //         for (let i = (arr.length / 2); i > 0;) {
    //             if (arr[i] < search) {
    //                 arr = arr.slice(i)
    //                 // console.log(arr)
    //                 i = Math.floor(arr.length / 2)
    //                 // console.log(i)
    //             }

    //             else if (arr[i] > search) {
    //                 arr = arr.slice(0, i)
    //                 // console.log(arr)
    //                 i = Math.floor(arr.length / 2)
    //                 // console.log(i)
    //             }

    //             else {
    //                 return `index of ${search} is ${i}`
    //             }
    //         }
    //     } else {
    //         for (let i = ((arr.length + 1) / 2); i > 0;) {
    //             if (arr[i] < search) {
    //                 arr = arr.slice(i)
    //                 // console.log(arr)
    //                 i = Math.floor(arr.length / 2)
    //                 // console.log(i)
    //             }

    //                                     else if (arr[i] > search) {
    //                 arr = arr.slice(0, i)
    //                 // console.log(arr)
    //                 i = Math.floor(arr.length / 2)
    //                 // console.log(i)
    //             }

    //             else {
    //                 return `index of ${search} is ${i}`
    //             }
    //         }
    //     }
    //     return -1
    // }



// Method 2
function binarySearch(arr, search) {

        let lastIndex = 0;
        let rightIndex = arr.length - 1;
        let middleIndex = Math.floor((lastIndex + rightIndex) / 2)
        console.log("start")

        while ((middleIndex != 0) && (lastIndex < rightIndex)) {
            if (arr[middleIndex] < search) {
                lastIndex = middleIndex + 1
                middleIndex = Math.floor((lastIndex + rightIndex) / 2)
            } else if (arr[middleIndex] > search) {
                rightIndex = middleIndex - 1
                middleIndex = Math.floor((lastIndex + rightIndex) / 2)
            }
        }
    if(arr[middleIndex] == search){
        return `index of ${search} is ${middleIndex}`
    }else{
        return -1
    }        
    }