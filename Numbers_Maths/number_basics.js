const score = 500;

const balance = new Number(100);

console.log(typeof score);  //number
console.log(score); //500
console.log(typeof balance);    //object
console.log(balance);   //[Number: 100]
console.log(balance.toFixed(2));

console.log(balance.toString());    //doesn't originally coverts, we may store it in another variable and also we can use all the built-in functions of string by converting it
console.log(typeof balance);    //object


const num = 123.8978;
// toFixed: works for after decimals places
console.log(num.toFixed(2));    //123.89  
console.log(num.toFixed(3));    //123.898
console.log(num.toFixed(4));    //123.8978
console.log(num.toFixed(5));    //123.89780     //adds extra zero to get fixed

// toPrecision: works for all the digits of the number and gives a precise result
console.log(num.toPrecision(3));    //124
console.log(num.toPrecision(4));    //123.9
console.log(num.toPrecision(5));    //123.90

const num1 = 1123.8978;
console.log(num1.toPrecision(1))    //1e+3=1000
console.log(num1.toPrecision(2));   //1.1e+3 = 1.1 * 10^3 = 1.1 * 1000 = 1100
console.log(num1.toPrecision(3));    //1.12e+3 = 1.12 * 10^3 = 1120 gives result in exponential format
console.log(num1.toPrecision(4));    //1124
console.log(num1.toPrecision(5));    //1123.9


const num2 = 11123.8978;
console.log(num2.toPrecision(1))    //1e+4=1000
console.log(num2.toPrecision(2));   //1.1e+4 = 1.1 * 10^4 = 1.1 * 10000 = 11000
console.log(num2.toPrecision(3));    //1.11e+4 = 1.11 * 10^4 = 11100 gives result in exponential format
console.log(num2.toPrecision(4));    //1.112e4=1.112 * 10^4 = 11120
console.log(num2.toPrecision(5));    //11124

const bigNum = 1000000000;
console.log(bigNum.toLocaleString());    //gives output with separated commas like Indian Number system
console.log(bigNum.toLocaleString('en-US'));    //US number system wale commas 
console.log(bigNum.toLocaleString('en-IN'));

// We can have max, max safe, min, min safe, +ve/-ve infinity
console.log(Number.MAX_SAFE_INTEGER);

// Math Library
console.log(Math);
console.log(Math.abs(-55));     //55
console.log(Math.round(4.3));   //4
console.log(Math.round(4.6));   //5
console.log(Math.ceil(4.2));    //5
console.log(Math.floor(4.2));   //4
console.log(Math.sqrt(16));   //4
console.log(Math.sqrt(16.5));   //4.06201920231798
console.log(Math.max(5, 9, 1, 7, 0.5));   //9
console.log(Math.min(5, 9, 1, 7, 0.5));   //0.5


console.log(Math.random());     //gives a random value from 0 to 1, big-big decimals too
// What if I want a number between 0 to 10, multiply with ten and then do floor
const randomNum = (Math.random() * 10)

console.log((Math.floor(randomNum)))

// Random number between 1 to 6
const randomNum1 = Math.floor((Math.random() * 10) % 5) + 1;

console.log((randomNum1.toPrecision(1)));

const maxNum = 10;
const minNum = 100;

console.log(Math.floor(Math.random() * (maxNum - minNum + 1) + minNum));