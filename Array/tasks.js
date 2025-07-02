function filterNumbers(arr) {
   return arr.filter(item => typeof item === "number");
}

function reverseArray(arr) {
    return arr.slice().reverse();
}

function findMax(arr) {
    let mx=Math.max(...arr);
    return mx;
}

function removeDuplicates(arr) {
    
  return [...new Set(arr)];
}

function flattenArray(arr) {
    let arr1=arr.flat(Infinity);
  return arr1;
}
let arr=[1,2,3,4,5,[1,[2,2,3],4],6,8,9,7,1,2,"Yes", "No", "Okay", 5,6,7,8,9,10,11,7,18];

let arr1=filterNumbers(arr);
console.log(arr1);
let arr2=removeDuplicates(arr);
console.log(arr2);
let arr3=flattenArray(arr);
console.log(arr3);
let arr4=reverseArray(arr);
console.log(arr4);
let mx=findMax(arr1);
console.log(mx);
