// 1. Normal function calling with Arguments and Prameters
function makeTea(typeOfTea) //Parameters
{
    return `Making ${typeOfTea}`
}
let teaOrder=makeTea("Green Tea");
console.log(teaOrder);  //Arguments
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
