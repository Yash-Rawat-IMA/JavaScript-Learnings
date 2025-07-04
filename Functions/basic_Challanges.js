// 1. Normal function calling with Arguments and Prameters
function makeTea(typeOfTea = "tea") //Default Parameters and Parameters
{
    return `Making ${typeOfTea}`
}
let teaOrder=makeTea("Green Tea");
let defautTea=makeTea();
console.log(teaOrder);  //Arguments
console.log(defautTea);  //Without Arguments, using the default argument
// 2. Function under Function
function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed, the ${teaType} tea will be ready`;
    }
    return confirmOrder();
}
let order=orderTea("Green");
console.log(order);

// Do it yourself: Function Execution Context
// 3. 
function calculateTotal(price, quantity) {
    return price*quantity;
}
let total=calculateTotal(599,100);
console.log(total);


// 4. Arrow Function
const calculateTotalArrow = (price, quantity) =>{
    return price*quantity
}
let totalCost=calculateTotalArrow(699, 100)
console.log(totalCost);

// 5. Implicit return by Arrow Funcion
const calculateTotalImplicit = (price, quantity) => price*quantity;
let totalImlicit=calculateTotalImplicit(799,100);
console.log(totalImlicit);
// 6. function as parameter(higher-order-function or first-class-function)
function processTeaOrder(Teas) {
    return Teas("Earl Grey");
}
function makeTeas(teaType) {
    return `Making ${teaType}`;
}
let orders=processTeaOrder(makeTeas);
console.log(orders);
// 7.
function processTeaOrder1(Teas) {
    return Teas;
}
let orders1=processTeaOrder1(makeTeas("Earl Grey"));
console.log(orders1);

// creating and returning function under function
function creator() {
    return function funct(name) {
        return `Hello ${name}`;
    }
}
let name=creator();    //name is holding the function definition, so we can pass arguments to name
let lname=name("Rawat");
console.log(name("Yash"));
console.log(lname);

// What if you don't know the number of parameters

function Nums(...num)       //rest operator(also used as spread in some cases...)
{
    return num;
}

const res = Nums(500, 699, 789, 5456, 121, 981, 104);
console.log(res);       //here returns the arguments as an array and then you can perform the algo to get the sum or whatever you want

// you know at least two values would be there, but don't know after that how many
// in that case follow this
function  twoNums(val1, val2, ...nums)
{
    return nums;
}
const resTwo = twoNums(100, 200, 300, 400, 500);
console.log(resTwo);        //initial two values don't get added in this array, rather after that all the values are added.


// Passing object as Parameters in the function
const user = {
    userName : "Sam",
    sports : "Basketball"
}

function callObject(anyObject)
{
    console.log(`Hi ${anyObject?.userName}! You play ${anyObject?.sports}! Well Done Keep it up`);
}
callObject(user);
callObject({
    userName: "Yash",
    sports : "Basketball"
});     //direct object passing


function arraySecondVal(getArray)
{
    return getArray[1]
}
const newArray = [1,2,3,4,5];
console.log(arraySecondVal(newArray));

console.log(arraySecondVal([100,200,300,400,500]));


// Another way of defining functions in a variable
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5));