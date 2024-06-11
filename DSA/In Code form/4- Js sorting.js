// function numberCompare(num1, num2){   
//     // console.log(num1)
//     // console.log(num2)
//     // console.log(num1 - num2)    
    
//     // return num1 - num2;
//     return num2 - num1;  
// }

// function JsCompare(arr){
//     let sortArr = arr.sort(numberCompare)
    // console.log(arr, sortArr)
//     return sortArr;
// }

let numbers = [3, 25, 1, 8];

numbers.sort(function(b,a) {
      console.log("a = "+a)
    console.log("b = "+b)
  console.log("End")
    return b-a;
});

console.log(numbers);


// const numberSortFn = (a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// };

// let numbers = [9, 3, 12, 11, 40, 28, 5];
// const sortedNumbers = numbers.sort(numberSortFn);
// console.log(sortedNumbers);

