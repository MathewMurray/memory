/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const array = require('./Array');

function main(){

  Array.SIZE_RATIO = 3;
  //Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
  //Print the 1st item in the array arr.
  console.log(arr[0]);

  //Empty the array and add just 1 item: arr.push("tauhida");
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  // Print this 1 item that you just added. What is the result? Can you explain your result?
  // A: because we cleared the array using the pop() method, the array only contains the word "tauhida".
  return arr;
}
console.log(main());
//What is the length, capacity and memory address of your array?
//A: length = 1, capacity = 3, address is 0

//What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
//A: length = 6, capacity = 6, address 0-5

//What is the purpose of the _resize() function in your Array class?
//A: _resize() copies the pointer to a new veriable called oldptr, sets the new ptr to another location asigned by the user, deletes the oldptr, then reallocates the array based on array_size.

const urlify = (string) => {
  const res = string.replace(/ /g, '%20');
  return res;
};
urlify('testing this out now');

function naiveSearch(array, item) {
  const arr = [];
  for (let i=0; i<array.length; i++) {
    if (array[i] >= item) {
      arr.push(array[i]);
    }
  }
  return arr;
}

// const newArr = [1,2,3,4,5,6,7,8,9,10];
const newArr = [10, 2, 7, 1, 8, 1, 9, 3];
naiveSearch(newArr,5);

function largestSum(array) {
  let currMax = 0;
  let maxSoFar = 0;
  for(let i=0;i<array.length;i++){
    currMax = Math.max(0,currMax + array[i]);
    maxSoFar = Math.max(currMax,maxSoFar);
  }
  return maxSoFar;
}
console.log(largestSum([-2,1,-3,4,-1,2,1,-5,4]));// 6 :[4,-1,2,1]


function mergeArray(a,b){
  const result = [...new Set(a),...new Set(b)];
  result.sort(function(a,b){
    return a - b;
  });
  return result;
}
console.log(mergeArray([1,4,6],[10,2,3]));

function removeChar(string){
  let strArr = '';
  const vowels = ['a','e','i','o','u'];
  for(let i = 0; i<string.length;i++){
    let found = false;
    for(let j=0;j<vowels.length;j++){
      if(string[i] === vowels[j]){
        found = true;
      }
    }
    if(!found){
      strArr += string[i];
    }
  }
  return strArr;
}
console.log(removeChar('answers are awesome'));

function productOfArrayExceptSelf(array){
  var resultArray = [], product;
  for(var i = 0; i < array.length; i++){
    product = 1;
    for(var j = 0; j < array.length; j++){
      if(i !== j) product *= array[j];
    }
    resultArray.push(product);
  }
  return resultArray;
}
console.log(productOfArrayExceptSelf([1,2,3,4]));

// const input = 
//   [[1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]];


function stringRev(str1,str2){
  const newStr1 = str1 + str1;
  if(newStr1.includes(str2)){
    return true;
  }
  return false;
}

console.log(stringRev('quest','estuq'))
//find the intersection of two sorted arrays
function intersection(a,b){
  let i = 0;
  let j = 0;
  const result = [];
  while(i < a.length && j < b.length){
    const valueA = a[i];
    const valueB = b[j];
    if(valueA === valueB){
      result.push(valueA);
      i++;
      j++;
    }
    else if(valueA < valueB){
      i++;
    }
    else {
      j++;
    }
  }
  return result;

}

function intersection2(a,b){
  const result = [];
  for(let i=0;i<a.length;i++){
    for(let j = 0;j<b.length;j++){
      if(a[i] === b[j]){
        result.push(a[i]);
      }
    }
  }
  const resultAsSet = [...new Set(result)];
  return resultAsSet;
}

function intersection3(a,b){
  const result = [];
  const mergedArray = [...new Set(a),...new Set(b)];
  mergedArray.sort();
  for(let i = 0; i<mergedArray.length;i++){
    if(mergedArray[i] === mergedArray[i+1]){
      result.push(mergedArray[i]);
    }
  }
  return result;
}
// console.log(intersection([1,2,3,6],[1,3,4,7]));//[1,3]
// console.log(intersection([1,2,3,6],[5,9,12,15]));//[]
// console.log(intersection([5,9,12,15],[1,2,3,6]));//[]
// console.log(intersection([1,2,3,6],[1,2,3,6]));//[1,2,3,6]
// console.log(intersection([1,1,1,1],[1,2,3,6]));//[1]
// console.log(intersection([1,1,2,2],[-1,1,1,2,2,6]));//[1,1,2,2] or [1,2]
// console.log(intersection([],1,2,3,6));//[]
// console.log(intersection([1,2,3,6],[]));//[]
// console.log(intersection2([1,2,3,6],[1,3,4,7]));//[1,3]
// console.log(intersection2([1,2,3,6],[5,9,12,15]));//[]
// console.log(intersection2([5,9,12,15],[1,2,3,6]));//[]
// console.log(intersection2([1,2,3,6],[1,2,3,6]));//[1,2,3,6]
// console.log(intersection2([1,1,1,1],[1,2,3,6]));//[1]
// console.log(intersection2([1,1,2,2],[-1,1,1,2,2,6]));//[1,1,2,2] or [1,2]
// console.log(intersection2([],1,2,3,6));//[]
// console.log(intersection2([1,2,3,6],[]));//[]
