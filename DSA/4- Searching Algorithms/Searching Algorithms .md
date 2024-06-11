<link rel="stylesheet" href="../style.css">


# Searching Algorithms 
## 1. What is Searching Algorithms & it's types?
It defines a step-by-step method for locating specific data in a data set. Every search algorithm uses a search key in order to complete the process and returns a success or failure status.

Types of Searching Algorithms
1. Linear Search
2. Binary Search
3. Naive Search
4. KMP String Search

## 1. Linear Search
It examines each element until it finds a match, starting at the beginning of the data set, until the end. The search is finished once the targeted element is located.

Many array JS methods uses linear search
1. IndexOf
2. Includes
3. Find
4. FindIndex

Eg: Make a function accepts an array and a value.  
Loop through the array and check if the current array element is equal to the value.  
If it is, return the index at which the element is found.  
If the value is never found, return -1.


```javascript
    function linearSearch(arr, search) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == search) {
                return `index of ${search} is ${i}`
            }
        }
        return -1
    }
```
input sample : ```["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Federated States of Micronesia", "Florida", "Georgia", "Guam", "Hawa ii", "Idaho", "Illinois", "India", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northe rn Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Wa shington", "West Virginia", "Wisconsin", "Wyoming"]```

<br>

Time Complexity 
1. O(1) --> Best Case       
2. O(n) --> Average & Worst Case
     

## 2. Binary Search
Advantage of Binary Search over Linear Search
1. Binary Search is a much faster from of search.
2. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
3. Binary Search only works on sorted arrays.

Eg: This function accepts a sorted array and a value Create a left pointer at the start of the array, and a right pointer at the end of the array.  
While the left pointer comes before the right pointer:  
- Create a pointer in the middle.  
- If you find the value you want, return the index.  
- If the value is too small, move the left pointer up.  
- If the value is too large, move the right pointer down.
  
If you never find the value, return -1.  

Mine Code
```javascript
    function binarySearch(arr, search) {
        let index_val = arr.length / 2;
        if (arr.length / 2 == 0) {
            for (let i = (arr.length / 2); i > 0;) {
                if (arr[i] < search) {
                    arr = arr.slice(i)
                    // console.log(arr)
                    i = Math.floor(arr.length / 2)
                    // console.log(i)
                }

                else if (arr[i] > search) {
                    arr = arr.slice(0, i)
                    // console.log(arr)
                    i = Math.floor(arr.length / 2)
                    // console.log(i)
                }

                else {
                    return `index of ${search} is ${i}`
                }
            }
        } else {
            for (let i = ((arr.length + 1) / 2); i > 0;) {
                if (arr[i] < search) {
                    arr = arr.slice(i)
                    // console.log(arr)
                    i = Math.floor(arr.length / 2)
                    // console.log(i)
                }

                else if (arr[i] > search) {
                    arr = arr.slice(0, i)
                    // console.log(arr)
                    i = Math.floor(arr.length / 2)
                    // console.log(i)
                }

                else {
                    return `index of ${search} is ${i}`
                }
            }
        }
        return -1
    }
```

Sample Input --> ```[1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]```

Instructor Code
```javascript
function binarySearch(arr, search) {

        let lastIndex = 0;
        let rightIndex = arr.length - 1;
        let middleIndex = Math.floor((lastIndex + rightIndex) / 2)

        while ((middleIndex != 0) && (lastIndex < rightIndex)) {
            if (arr[middleIndex] < search) {
                lastIndex = middleIndex + 1
                middleIndex = Math.floor((lastIndex + rightIndex) / 2)
            } else if (arr[middleIndex] > search) {
                rightIndex = middleIndex - 1
                middleIndex = Math.floor((lastIndex + rightIndex) / 2)
            }
        }
        if (arr[middleIndex] == search) {
            return `index of ${search} is ${middleIndex}`
        } else {
            return -1
        }
    }
```

<div class="note">Binary Search only work for those array or data which is sorted.</div>

<br>

Time Complexity 
1. O(1) --> Best Case
2. O(log n) --> Average & Worst Case

## 3. Naive Search
It is use when we want to count the number of times a smaller string appears in a longer string.

**Idea** 
1. Loop over the longer string.  
2. Loop over the shorter string.  
3. If the characters don't match, break out of the inner loop.  
4. If the characters do match, keep going.  
5. If you complete the inner loop and find a match,increment the count of matches.  
6. Return the count.  

Mine Code
```javascript
    function naiveSearch(mainString, search) {
        let count = 0;
        for (let i = 0; i < mainString.length; i++) {
            if (mainString[i] == search[0]) {
                for (let j = 1; j < search.length; j++) {
                    i++
                    if (mainString[i] !== search[j]) {
                        break;
                    } else if (mainString[i] == search[(search.length - 1)]) {
                        count++
                    }
                }

                if (search.length == 1) count++
            }
        }
        return `String ${search} is repeated ${count} times in  ${mainString}`
    }
```

Instructor Code
```javascript
    function naiveSearch(long, short) {
        var count = 0;
        for (var i = 0; i < long.length; i++) {
            for (var j = 0; j < short.length; j++) {
                if (short[j] !== long[i + j]) break;
                if (j === short.length - 1) count++;
            }
        }
        return count;
    }
```



## 4. KMP String Search
```javascript

```



