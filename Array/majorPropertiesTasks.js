const arr = [1,2,3,4,5,-1,-8,-9,-10,11,18, "Yash", "Rawat", {name: "Yash"}, {name: "Rawat"}, {name:"Ayush"}, {name: "Kamlesh"}, {name: "Ajay"}];

let arr1=[1,2,3,4,5]
const squareNumbers = (arr) => (arr.map(num => num*num));
console.log(squareNumbers(arr));
const filterEvenNumbers = (arr) => (arr.filter(num => num%2 === 0));
console.log(filterEvenNumbers(arr));

const sumPositiveNumbers = (arr) => (arr.filter(num => num>0).reduce((sum, num) => sum+num, 0));
const sumAllPositiveNumbers = (arr) => (arr.reduce((sum, num) => sum+num, 0));
console.log(sumAllPositiveNumbers(arr));

const getNames = (arr) => (arr.map(names => names.name));
console.log(getNames(arr));

const findLongestWord = (arr) => (arr.reduce((l,c) => c.length>l.length?c:l, ""));
console.log(findLongestWord(arr));
