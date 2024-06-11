<link rel="stylesheet" href="../style.css">

# Sorting Algorithms 
## 1. What is Sorting Algorithm?
Sorting is the process of rearranging the items in a collection (eg: an array) so that the items are in some kind of order.

Another website which compare different sorting algo in different cases.  
[Website](https://www.toptal.com/developers/sorting-algorithms "compare different sorting algo in different cases")

1. The built-in sort method accepts an optional comparator function.  
2. You can use this comparator function to tell JavaScript how you want it to sort.  
3. The comparator looks at pairs of elements (a and b), determines their sort order based on the return value.
   - If it returns a **-ve**, a should come before b.  
   - If it returns a **+ve**, a should come after b.  
   - If it returns 0, a and b are the same as far as the sort is concerned.  

Eg:
```javascript
function numberCompare(num1, num2){
    return num1 - num2;
}

function JsCompare(arr){
    arr.sort(numberCompare)
}
```

Sample input --> `[6, 4, 15, 16]`

<div class="note">

Note: Array **sort** method use qick sort algo. means order by which value of a & b is decided is given by method use in qick sort algo.

</div>

Shorting Algorithm involve some type of swapping functionality
1. Common Code

```javascript
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
```

2. Professional Code

```javascript
const swap = (arr, idx1, idx2) => {
[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] 
}
```

<br>

Types of sorting algorithm
1. Selection Short
2. Insertion Short
3. Quick Short
4. Heap Short
5. Bubble Short
6. Merge Short
7. Counting Short
8. Radix Short
9. Bucket Short
10. Shell Short
11. Cocktail Shaker Short
12. Gnome Short
13. Bitonic Short
14. Bogo Short

<br>

Time Complexity chart
<img src="Time Complexity chart.jpg" alt="Time Complexity chart" title="Time Complexity chart">

## 1. Bubble Short

A sorting algo. where the largest values bubble up to the top.

[Visualize Shorting Algorithm](https://visualgo.net/en/sorting)

Cycle 1   
<img class="sort-cycle" src="Bubble Short 1 Cycle.jpg" alt="Bubble Short 1 Cycle" title="Bubble Short 1 Cycle">

Pseudocode
- Start looping from with a variable called i the end of the array towards the beginning.
- Start an inner loop with a variable called j from the beginning until i - 1.
- If arr[j] is greater than arr[j+1], swap those two values.
- Return the sorted array.


Mine Idea
- We need to create a function which take an array.
- Then need select 2 consective number in array.
- Than compare those number if left > right than swap left & right. This goes till end.
- In next cycle length of array reduce by 1.
- when no swapping occur then code terminate.

Try 1
```javascript

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
```

Try 2

```javascript
    function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    function bubbleShort(arr) {
        for (let i = (arr.length - 1); i >= 0; i--) {
            for (let j = 0; j <= i; j++) {
                let leftIndex = arr[j];
                let rightIndex = arr[j + 1];

                if (leftIndex > rightIndex) {
                    swap(arr, j, (j + 1))
                }
            }
        }
        return arr;
    }

    bubbleShort([7, 43, 48, 35, 6, 42, 43, 16, 20, 23])
```

<div class="note">

If we made these changes than the sorting algo. break the execution when no swapping occur.

```javascript
    function bubbleShort(arr) {
    // let noSwap;
        for (let i = (arr.length - 1); i >= 0; i--) {
        // noSwap = true;
            for (let j = 0; j <= i; j++) {
                let leftIndex = arr[j];
                let rightIndex = arr[j + 1];

                if (leftIndex > rightIndex) {
                    swap(arr, j, (j + 1))
                // noSwap = false
                }
            }
        // if (noSwap) break;
        }
        return arr;
    }
```

</div>

Time Complexity --> O(n<sup>2</sup>)

But in best situtation (mean when array is nearly sorted) & we also break execution when no swapping occur then Time Complexity --> O(n)

<br>
<br>

## 2. Selection Short
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.


[Visualize Shorting Algorithm](https://visualgo.net/en/sorting)

Cycle 1   
<img class="sort-cycle" src="Selection Short 1 Cycle.jpg" alt="Selection Short 1 Cycle" title="Selection Short 1 Cycle">

**Pseudocode**
- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.

**Mine Idea**
- We need to create a function which take an array.
- Then loop the array and mark the first number of array as "minNum".
- Then compare other number of array with "minNum" & if it is left than "minNum" then mark that number as "minNum".
- When 1 cycle end then the "minNum" move to 0 index of array.
- Then shorten the array so than loop start with next index.
- Add algo. breaks when no swap occurs.


```javascript
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
```

<br>
<br>

## 3. Insertion Short
Builds up the sort by gradually creating a large left half which is always sorted.

[Visualize Shorting Algorithm](https://visualgo.net/en/sorting)

Cycle 1   
<img class="sort-cycle" src="Insertion Short 1 Cycle.jpg" alt="Insertion Short 1 Cycle" title="Insertion Short 1 Cycle">

**Pseudocode**
- Start by picking the second element in the array.
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted.

**Mine Idea**
- First create a function insertionShort which accept an array.
- Creat a window in which element are sorted.
    - For sort element in sorted window we will create a for loop which compare each element of sorted window with new element and add the element after that element which is less than it.

- After sorting element in window, length of window increase by 1 & length of array reduce by 1 (mean from 0 to n reduce to 1 to n & so on...)
- Algo. terminates when loop run 1 time.

Mine Code
```javascript
    function insertionShort(arr) {
        let result = [arr[0]]

        for (let i = 1; i < arr.length; i++) {

            for (j = (i - 1); j >= 0; j--) {
                if (arr[i] > result[j]) {
                    if (j == (result.length - 1)) {
                        result.push(arr[i])
                        break;
                    }

                    let x = result.slice(j + 1)

                    let resultLength = result.length
                    result.splice((j + 1), (resultLength))
                    result[j + 1] = arr[i]
                    result = result.concat(x)

                    break;
                }
            }
        }
        return result;
    }

    insertionShort([3, 44, 38, 5, 47, 15])
```

Instructor Code
```javascript
    function insertionSort(arr) {
        // Complexity Start
        for (var i = 1; i < arr.length; i++) {
            var currentVal = arr[i];
            for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
                arr[j + 1] = arr[j]
            }
            arr[j + 1] = currentVal;
            // console.log(arr)
        }
        // Complexity End

        return arr;
    }
    insertionSort([2, 1, 9, 76, 4])
```

To undestand Complexity Part watch below video.  
[Complex Part Explaination](https://t.me/c/1644648004/421 "Complex Part Explaination")

<br>
<br>

<div class="note">

Note: Why learn below sorting?  
1. The above sorting algorithms fail when scale of data become bigger.
Like run above sorting algorithms for array of 1,00,000 elements. 
 
</div>


## 4. Merge Short

[Visualize Shorting Algorithm](https://visualgo.net/en/sorting)

Cycle 1   
<img class="long-cycle" src="Merge Short 1 Cycle.jpg" alt="Merge Short 1 Cycle" title="Merge Short 1 Cycle">

Merge Sort first split the array into array which contain only 1 element then merge the arrays in a way that element are in sorted order.


Part 1 --> code to merge 2 sorted array in sorted order.

**Pseudocode**
1. Create an empty array, take a look at the smallest values in each input array.
2. While there are still values we haven't looked at...
   1. If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
   2. If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
   3. Once we exhaust one array, push in all remaining values from the other array.  

**Mine Idea**
1. Write a function which accept 2 sorted array, & has an empty array which store the result.
2. Compare 1st element of first array with 1st element of second array if it is less than 1st element of first array than add it into empty array otherwise add 1st element of first array then similarly compare other elements.

Eg: [1,4,5]  [2,3,7] --> [1,2,3,4,5,7]

Mine Code
```javascript
function mergeSortedArr(arr1, arr2){
    let result = []
    let i=0, j=0;
    
    for(let i=0; i<arr1.length; i++){

        while(arr1[i] > arr2[j] && j<arr2.length){
            result.push(arr2[j])
            j++;
        }
        result.push(arr1[i])

    }

    if(j !== arr2.length){
        let left_element = arr2.slice(j)
        result = result.concat(left_element)
    }

    return result
}

mergeSortedArr([1,4,5],[2,3,7])
```

Instructor Code
```javascript
function mergeSortedArr(arr1, arr2){
    let result = []
    let i=0, j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr1[i])
            i++;
        }else{
            result.push(arr2[j])
            j++;
        }
    }

    if(j !== arr2.length){
        let left_element = arr2.slice(j)
        result = result.concat(left_element)
    }   
    
    if(i !== arr1.length){
        let left_element = arr2.slice(i)
        result = result.concat(left_element)
    }

    return result
 }
```

Part 2 --> code to Merge Sort

**Pseudocode**
1. Break up the array into halves until you have arrays that
are empty or have one element.
2. Once you have smaller sorted arrays, merge those arrays
with other sorted arrays until you are back at the full length of the array.
3. Once the array has been merged back together, return the merged (and sorted!) array.


```javascript

let count = 1                                                                        // EXTRA

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
  console.log(`${count}. is ${result}`)                                              // EXTRA
  count++                                                                            // EXTRA
    
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

```

<br>
<br>


## 5. Quick Short

[Visualize Shorting Algorithm](https://visualgo.net/en/sorting)

Cycle 1   
<img class="sort-cycle" src="Selection Short 1 Cycle.jpg" alt="Selection Short 1 Cycle" title="Selection Short 1 Cycle">

**Pseudocode**

**Mine Idea**

Instructor Code
```javascript

```


<br>
<br>


## 6. Heap Short

[Visualize Shorting Algorithm](https://visualgo.net/en/sorting)

Cycle 1   
<img class="sort-cycle" src="Selection Short 1 Cycle.jpg" alt="Selection Short 1 Cycle" title="Selection Short 1 Cycle">

**Pseudocode**

**Mine Idea**

```javascript

```



```javascript

```
