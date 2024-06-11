// Method 1
// let str1 = "hello";

// console.log(str1.indexOf('l'))

// let i=str1.indexOf('l')
// let str2 = str1.slice(i,i+2)
// console.log(str2)


// Method 2
// function validAnagram(str1, str2){
// if(str1.length !== str2.length) {
// return false }

// let frequencyCounter1 = {}
// let frequencyCounter2 = {}

// for(let val of str1){
// frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
// }

// for(let val of str2){
// frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
// }
// console.log(frequencyCounter1)
// console.log(frequencyCounter2)
// }


// Method 3
// function validAnagram(str1, str2){
// if(str1.length !== str2.length) {
// return false }

// let frequencyCounter1 = {}
// let frequencyCounter2 = {}

// for(let val of str1){
// frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
// }

// for(let val of str2){
// frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
// let x = 1;
// for(let key in frequencyCounter1) {
// // console.log(frequencyCounter2[key])
//     console.log(`${x} = ${key}`)
//     x++
// }}}



// Method 4
function validAnagram(str1, str2){
if(str1.length !== str2.length) {
return false }

let frequencyCounter1 = {}
let frequencyCounter2 = {}

for(let val of str1){
frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
}

for(let val of str2){
frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
}

// console.log(frequencyCounter1)
// console.log(frequencyCounter2)

for(let key in frequencyCounter1) {
// console.log(`${key} = ${frequencyCounter2[key]}`)
    
if(frequencyCounter2[key] !== frequencyCounter1[key]){
    // console.log(key)
return false }
    }
    return true;
}
