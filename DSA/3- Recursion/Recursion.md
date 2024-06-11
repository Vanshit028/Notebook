<link rel="stylesheet" href="../style.css">

# Recursion
## 1. Story to know Recursion.

Once Ram go his guru with a list of number --> 314 256 454 588 & ask his guru that in the list which number is odd.   

But his guru told him that he will only tell does the first number is odd or not.  

So Ram does so trick he take this list of number again & again but each time remove the first number from the list   
1st - [314 256 454 588]  
2nd - [256 454 588]  
3rd - [454 588]  
4th - [588]  
5th - [ ]  

Each time his guru told him that 1st number in the list is not odd.

After 5th time Ram's know that as in all 5 time list 1st  number is not odd so list does not have odd number.

In the end his guru told him that he learned recursion.

<br>
<br>

## 2. Defination of Recursion?
Process in which a function that call itself.  
In other words a process in which a function call itself till certain condtion, that process is called recursion.

<br>
<br>

## 3. Why we need to learn Recursion?
Because it is use in many algorithms.

<br>
<br>

## 4. In Recursion <span style="color: salmon;">Call Stack</span> has very important rule?

[Telegram Video](https://t.me/c/1644648004/420 "JS Call Stack  for Recursion")

<br>
<br>

## 5. How Recursion work?
It invoke the same function with different input util it reach ending case or base case.

Essential Parts of a Recursion function
- Base Case or ending case 
- Each time when function get called it get different input.

Eg 1: 
```javascript
function countDown(num) {
if(num <= 0) {
console.log("All done!");
return;
}
console.log(num);
num--;
countDown(num);
}
```

Eg 2: 
```javascript 
function sumRange(num) {
if(num === 1) return 1;
return num + sumRange(num-1);
}
```

Eg 3: 
Normal Code
```javascript 
function factorial(num){
    let total = 1;
    for(let i=num; i>1; i--){
        total *= i;
    }
    return total;
}
```

Recursion Code
```javascript 
function factorial(num){
    if(num === 1) return 1
    return num * factorial(num-1);
}
```

<br>
<br>

## 6. Common Mistake in Recursion
   
### 1. No base case or ending case   
   
As no base case or ending case leads to **stack overflow**.


Eg:
```javascript
function factorial(num){
    // if(num === 1) return 1
    return num * factorial(num-1);
}
```

As in above eg we remove base case or ending case due to which recursion goes on and lead to **"stack overflow"** means number of function in call stack is more than the number of function a call stack can hold.


### 2. Forgetting to return or returning the wrong thing  

As the excution of function end when it return something so if we made recursion but not made a proper return statement recursion lead to stack overflow.

But sometimes we enter wrong return statement like
```javascript
function factorial(num){
    if(num === 1) console.log(1)
    return num * factorial(num-1);
}
```
As function only end when it gets a **return** statement not any other statement like **console.log()**

<br>
<br>

## 7. Helper Method Recursion (1 Method to write recursion)

Syntax:
```javascript
function outer(input){

    let outerScopedVariable = []

    // recursion start
    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    // recursion end

    helper(input)

    return outerScopedVariable;

}
```

Eg: Collect all of the odd values in an array.
```javascript
function collectOddValues(arr){

    let result = []

    // recursion start
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }
    // recursion end

    helper(arr)

    return result;

}
```

<br>
<br>

## 8. Pure Recursion (1 Method to write recursion)


```javascript
function collectOddValues(arr){

    let result = []

    if(arr.length === 0){
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    for(let i=0; i<newArr.length; i++){
        console.log(`Number on ${i} index is ${newArr[i]}`)
    }

    return newArr;
}
```

--> What role concat plays in above Eg?  
```
[1].concat(collectOddValues([2,3,4,5]))

    [ ].concat(collectOddValues([3,4,5]))   

        [3].concat(collectOddValues([4,5]))  

            [ ].concat(collectOddValues([5]))
                
                [5].concat(collectOddValues([ ]))
```
