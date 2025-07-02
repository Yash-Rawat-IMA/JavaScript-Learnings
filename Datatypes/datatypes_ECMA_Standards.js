// JavaScript Data types: 
/* 
    => Primitives Data Types:
        1. string
        2. number
        3. boolean
        4. bigint
        5. undefined
        6. null
        7. symbol
 

    => Reference Types:
        1. Objects
        2. Arrays (includes inside objects itself)
        3. Functions    (default and user-defined functions)
*/
console.log(typeof "Yash"); //string
console.log(typeof 18); //number
console.log(typeof true);   //boolean
console.log(typeof undefined);  //undefined
console.log(typeof null);   //object (/* JS Quirck*/)
console.log(typeof Symbol());   //symbol
console.log(typeof Symbol("Yash")); //symbol
console.log(typeof {}); //object
console.log(typeof []); //object
console.log(typeof function(){});   //function

// TYPE CONVERSION

// To Number:
console.log(Number("33"));  //33
console.log(Number("33abc"));   //Nan(not a number)
console.log(Number(true));  //1
console.log(Number(false)); //0
console.log(Number(null));  //0
console.log(Number(undefined)); //Nan


// Boolean
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Yo"));



// Concatenations   
// Jese hi string ayegi, waha se string ki tarah concatenation hoga
// Jab tak normal number hai, waha arithmetic operators ki tarah operate hoga
console.log("1"+"2"+2);     //122
console.log("1"+"2"+2+"5");     //1225
console.log(1+2+"2");       //32    (1+2)=3 + "2" = 32
console.log(1+2+"2"+5);     //325
console.log(1+"2"+"2");     //122
console.log(1+"2"+"2"+3);       //1223
console.log(1+8+"2"+"2"+3);     //9223

// Comparisons  (with coercion rules)

console.log("2" > 1);   //true
console.log("2" > "1");     //true
console.log(1 > "2");   //false
console.log(9 > "2");       //true
console.log(9 == "9");      //true
console.log(null > 0)   //false
console.log(null < 0)   //false
console.log(null == 0)  //false
console.log(null === 0)     //false
console.log(null >= 0)      //true
console.log(null <= 0)      //true
console.log(undefined == 0)     //false
console.log("a")
console.log(undefined == null)     //true (as null is loosely equal to undefined not 0. But null is converted into 0 when compared with a number that's why equating null with 0 (either loosely or strictly) gives false, whereas comparing <= or >= gives result as true)=> JS Quirk
console.log("b")
console.log(undefined === null)     //false

// Primitive vs Reference (Equality)
let a = 5;
let b = "5";
console.log(a==b);      //true  (loose equality check : with implicit conversion without data type checking, even if the data i.e. value is equal, it'll give true as result)
console.log(a===b);     //false (strict equality check: with data type checking)

let obj1={};
let obj2={};
console.log(obj1==obj2);    //false
console.log(obj1===obj2);   //false

let o=obj1;
console.log(obj1==o);   //true
console.log(obj1===o);  //true


// Instance of
let arr=[1,2,3,4,5];
console.log(arr instanceof Array);
console.log(arr instanceof Object);