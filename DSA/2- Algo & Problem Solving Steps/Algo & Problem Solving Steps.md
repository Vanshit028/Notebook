<link rel="stylesheet" href="../style.css">

# Problem Solving Steps for 99% ques?
1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve / Simplify
5. Look Back & Refactor

<br>

## 1. Understand the Problem  
1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?   
(You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

<br>

Eg: Write a function which takes 2 numbers & returns thier sum.

<br>
<br>

## 2. Explore Concrete Examples
1. Start with Simple Examples
2. Progress to More Complex Examples
3. Explore Examples with Empty Inputs
4. Explore Examples with Invalid Inputs

Eg: Write a function which takes a string & returns counts of each character in the string.

inputs
1. aaa --> **{ a:1 b:0 c:0 ... }**
2. hello --> **{ h:1 e:1 l:2 o:1 }**
3. my phone number is 4646 --> **{ include space & special charactor or not }**
4. Hello Hi --> **{ Upper or Lower case count differently or same }**
5. "" --> { how to handle empty string, null, undefined }

<br>
<br>

## 3. Break It Down
Explicity write out the steps you need to take.

```javascript
// make object to return at end

// loop over string, for each character...
// if the char is a number / letter AND is a key in object, add one to count.
// if the char is a number/letter AND not in object, add it to object and set value to 1.
// if character is something else (space, period, etc.) don't do anything.

// return object at end
```

<br>
<br>

## 4. Solve / Simplify
1. Find the core difficulty in what you're trying to do 
2. Temporarily ignore that difficulty
3. Write a simplified solution
4. Then incorporate that difficulty back in

Eg: Write a function which takes a string & returns counts of each character in the string.

```javascript
function charCount (str) {
// make object to return at end
var result = {};
// loop over string, for each character...
for(var i = 0; i < str.length; i++) {
var char str[i].toLowerCase()
//if the char is a number/letter AND is a key in object, add one to count
if (result [char] > 0) {
result [char]++;
}
//if the char is a number/letter AND not in object, add it to object and set value to 1
else {
result [char] = 1;
};
//if character is something else (space, period, etc.) don't do anything
// Code....

}
// return object at end
return result;
}
```

<br>
<br>

## 5. Look Back & Refactor
Watch the video  
[Telegram Video](https://t.me/c/1644648004/419 "Step 5 to solve  Programming problem")  


<br>
<br>

# Pre Defined Problem Solving Steps?
1. Frequency Counter  
2. Anagram  
3. Multiple pointers  
4. Sliidng Window  
5. Divide & Conquer  

## 1. Frequency Counter  
This pattern uses objects or set to collect values / frequencies of value.
--> It helps to avoid **nested loops or O(n<sup>2</sup>)** operations with arrays / strings.

Eg: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```javascript
function same(arrl, arr2){
if(arrl.length !== arr2.length) {
return false;
}
for(let i = 0; i < arrl.length; i++) {
let correctIndex = arr2.indexOf(arrl[i] ** 2)
if(correctIndex === -1) {
return false;
}
arr2.splice(correctIndex, 1)
}
return true
}
```
Time Complexity = **O(n<sup>2</sup>)**

```javascript
function same(arrl, arr2){
// Check if Both array are of same length.
if(arrl.length !== arr2.length) {
return false }

let frequencyCounter1 = {}
let frequencyCounter2 = {}

for(let val of arrl){
frequencyCounter1[val] (frequencyCounter1[val] || 0) + 1
}

for(let val of arr2){
frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1

for(let key in frequencyCounterl) {
if(!(key ** 2 in frequencyCounter2)) {
return false }

if(frequencyCounter2[key ** 2] !== frequencyCounterl[key])
return false }

}
return true }
```
Time Complexity = **O(n)**

<div class="note">

(counter1[num] || 0) :- This uses the logical OR ( || ) operator. If counter1[num] is undefined or falsy, it is replaced with 0. This is a common JavaScript idiom to handle cases where a key might not exist in an object.

</div>

<br>

## 2. Anagram  
Two string with same set of character is called anagram

Anagram code with Frequency Counter

Mine Code
```javascript
function validAnagram(str1, str2) {
        if (str1.length !== str2.length) {
            return false
        }

        let frequencyCounter1 = {}
        let frequencyCounter2 = {}

        for (let val of str1) {
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        }

        for (let val of str2) {
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        }

        // console.log(frequencyCounter1)
        // console.log(frequencyCounter2)

        for (let key in frequencyCounter1) {
            // console.log(`${key} = ${frequencyCounter2[key]}`)

            if (frequencyCounter2[key] !== frequencyCounter1[key]) {
                // console.log(key)
                return false
            }
        }
        return true;
    }
```

Instructor Code
```javascript
function validAnagram(first, second) {
if (first.length !== second.length) {
}
return false;
const lookup = {};
for (let i = 0; i < first.length; i++) {
let letter = first[i];
// if letter exists, increment, otherwise set to 1
lookup [letter] ? lookup [letter] += 1: lookup [letter] = 1;
}
for (let i = 0; i < second.length; i++) {
let letter = second[i];
// can't find letter or letter is zero then it's not an anagram
if (!lookup [letter]) {
return false;
} else {
lookup [letter] = 1;
}
}
return true;    }
```


## 3. Multiple pointers  
Creating **pointer or values** that correspond to an **index or position** & move towards the **beginning end or middle** based on a certain condition.

Benfit --> Very effecient for solving problems with minimal space complexity.

Eg: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.  
sumZero ([-3,-2,-1,0,1,2,3]) // [-3,3]  
sumZero ([-2,0,1,3]) // undefined  
sumZero ([1,2,3]) // undefined  

Easy Code
```javascript
    function sumZero(arr) {
        let ans = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                let sum = arr[i] + arr[j]
                if (sum == 0) {
                    ans.push(arr[i], arr[j])
                }
            }
        }
        return ans
    }
```

Adv Code
```javascript
    function sumZero(arr) {
        let leftPointer = 0;
        let rightPointer = arr.length - 1;

        let sum = arr[leftPointer] + arr[rightPointer]
        let ans = []

        while (leftPointer !== rightPointer) {
            sum = arr[leftPointer] + arr[rightPointer]
            
            if (sum < 0) {
                leftPointer++
            } else if (sum > 0) {
                rightPointer--
            } else {
                ans.push(arr[leftPointer], arr[rightPointer])
                leftPointer++
                rightPointer--
            }
        }
        return ans
    }
```


## 4. Count Unique Value

Mine Code
```javascript
 function countUniqueValue(arr) {
        let num = arr[0], count = 1;
        if (arr == []) {
            return `Count of Unique Value is ${count}`
        }

        for (let i = 0; i < arr.length; i++) {
            if (num < arr[i]) {
                count++;
                num = arr[i];
            }

        }
        return `Count of Unique Value is ${count}`

    }
```

Instructor Code
```javascript
    function countUniqueValues(arr) {
        var i = 0
        for (var j = 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
            i++
            }
            i++
        }
    }
```

## 5. Sliidng Window  

- This pattern involves creating a window which can either be an array or number from one position to another.
- Depending on a certain condition, the window either increases or closes (and a new window is created).
- Very useful for keeping track of a subset of data in an array/string etc.


Eg: Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

<div class="remember">
If we take ***sum = 0*** then if -ve value in array satisfy the function condition then there is no solution so we must take ***sum = -Infinity***
</div>

Mine Code <span style="color: red; text-transform: uppercase;">**( find mistake )**</span>

```javascript
function maxSubarraySum(arr, window) {
        let mainSum = 0, sum = 0;
        

        for (let i = 0; i < arr.length; i++) {
            let arr2 = arr.slice(i, i + window)
            for (let val of arr2) {
                sum += val
            }
            if (mainSum < sum) {
                mainSum = sum
                sum = 0
            } else {
                sum = 0
            }
        }
        return `max sum of ${window} consecutive elements in ${arr} is ${mainSum}`
    }
 ```

Mine Code <span style="color: green; text-transform: uppercase;">**( correct )**</span>

```javascript
function maxSubarraySum(arr, window) {
        let mainSum = -Infinity, sum = 0;
        

        for (let i = 0; i < arr.length; i++) {
            let arr2 = arr.slice(i, i + window)
            for (let val of arr2) {
                sum += val
            }
            if (mainSum < sum) {
                mainSum = sum
                sum = 0
            } else {
                sum = 0
            }
        }
        return `max sum of ${window} consecutive elements in ${arr} is ${mainSum}`
    }
 ```

Instructor Code
```javascript
     function maxSubarraySum(arr, num) {
        if (num > arr.length) {
            return null;
        }
        let max = -Infinity;
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
 ```

## 6. Divide & Conquer 
This not have any Perticular code it is a concept use in other algo. like sorting algo.

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.  

This pattern can tremendously decrease
time complexity


Eg: Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1  
search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1


Mine Code 
```javascript
 function search(arr, num){
    arr.indexOf(num)
 }

 ```

Instructor Code
```javascript
function search(arr, val){
for(let i = 0; i < arr.length; i++) {
if(arr[i] === val) {
return i;
}
}
return -1;
}
```
Linear Seach --> Time Complexity O(n)

Instructor Code
```javascript
function search(array, val) {
let min = 0;
let max = array.length - 1;
while (min <= max) {
let middle = Math.floor((min + max) / 2);
let currentElement = array[middle];
if (array[middle] < val) {
min = middle + 1;
}
else if (array[middle] > val) {
max = middle - 1;
}
else {
return middle;
}
}
return -1;
}
```
Binary Seach --> Time Complexity Log(n)
