let arr=["NDA", "IMA", "CDS"];
// Accessing elements

let first=arr[0];
let arr1= new Array("NDA", "IMA", "CDS");
// Addidng elements
arr[3]="OTA";
let exam="AFCAT";
arr[arr.length]=exam;
arr.push("TGC")
arr.push("TGC Tech")
arr.push("TGC Tech Entry")
console.log(arr);
// Removing elements
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
console.log(delete arr[arr.length-1]);
console.log(arr);
// Pushing from front
arr.unshift(10)
console.log(arr);
// Removing from front
arr.shift();
console.log(arr);
// Joining the elements
console.log(arr.join(' | '));
// Converting to string
let s=arr.toString()
console.log(s);
// Splice to remove from index1 to index2  
let a = [20, 30, 40, 50, 60];
a.splice(1, 3);
console.log(a);
console.log(a[1]);
// Splice to add from index1 and the elements
a.splice(1, 0, 3, 4, 5);
console.log(a);
a.splice(4, 0, 33, 44, 55);
console.log(a);
a.splice(0,3);
console.log(a);
// Type of Array
console.log(typeof a);
// Softcopy
let array1=[10,20,30,40,50];
let array2=array1;
console.log(array2);
array1.pop();
console.log(array2);
// Hardcopy: no changes
// First way
let array3=[...array1];
array1.pop();
console.log(array3);
// Second way
let array4=array1.slice();
array1.pop();
array1.pop();
console.log(array4);
// Merging two Arrays to form a new Array
let a1=[1, 3, 5, 7, 9]
let a2=[2, 4, 6, 8, 10]
let a3=a1+","+a2;
console.log(a3);
console.log(typeof a3);

let a4=[a1, a2]
console.log(a4);
console.log(typeof a4);

let a5=a1.concat(a2);
console.log(a5);
console.log(typeof a5);
// Search
let n1=[1,2,3,4,5, "Yash"]
let isExists=n1.includes("Yash")  //Case Sensitive
console.log(isExists);