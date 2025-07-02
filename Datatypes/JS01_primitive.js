// Data types

// 1. Number

let balance = 120;

console.log(balance);
console.log(typeof balance); //number

let anotherBalance = new Number(120);
console.log(anotherBalance);
console.log(typeof anotherBalance);

// 3. boolean
let isActive = true;
let isReal = new Boolean(true);
console.log(isActive);
console.log(isReal);

let name; //undefined
let fname = null; //null
let lname = undefined; //undefined

console.log(name);
console.log(fname);
console.log(lname);

// 3. string
let myString = "Hello";
let myOne = 'World';
let greet = `greet`;

console.log(myString);
console.log(myOne);
console.log(greet);
let oldGreet = myString + " Yash";
let oldGreet1 = myString + " " + "Yash";
console.log(oldGreet);
console.log(oldGreet1);
let newGreet = `${myString} Yash ${myOne} ${greet}ing you ${3**2+2}`;

console.log(newGreet);


// 4. Symbol: generates the unique value
let sm1=Symbol()
let sm2=Symbol()
console.log(sm1==sm2);
console.log(sm1);
console.log(typeof(sm1));
let sm3=Symbol("Yash")
let sm4=Symbol("Yash")
console.log(sm3);
console.log(sm3==sm4);  //still unique, creates the new symbol each  time even if the name of the symbols is same