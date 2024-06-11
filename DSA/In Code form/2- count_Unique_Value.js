function countUniqueValue(arr){
let num = arr[0], count = 1;
if(arr == []){
    return `Count of Unique Value is ${count}`
}
    
for(let i=0; i<arr.length; i++){
    if(num < arr[i]){
        count++ ;
        num = arr[i];
    }
    
}
    return `Count of Unique Value is ${count}`
    
}

// first run a loop tiil arr length.
// declare a variable 

// [1,1,1,2] --> 2
// [1,2,2,3,4,4,4,5,5,8,8,9] --> 7
// [-2,-1,0,5,10]  --> 5
// [1,1,1,1]  --> 1