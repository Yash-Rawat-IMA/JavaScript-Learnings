/* 1. 📦 What Is an Object?
JavaScript objects are collections of key-value pairs, also called properties.

You can create them via: */

const obj2 = new Object(); // constructor form and singleton object
const obj = {};            // object literal and non-singleton object

// 2. Accessing & Modifying Properties
// Dot notation:

obj.name = "Alice";
console.log(obj.name);


// Bracket notation (for dynamic or special keys):

obj["full-name"] = "Alice Jones";
const key = "age";
obj[key] = 30;
console.log(obj);



// Deleting properties:
delete obj.age;
console.log(obj);




// 3. this Keyword & Methods
// Functions assigned to object properties act as methods:

const user = {
  name: "Yash",
  greet() { 
    console.log(`Hello, ${this.name}`); 
    }
};
user.greet(); // Hello, Yash
// this refers to the object owning the method during invocation.


// 4. Symbols & Freezing Objects
// Symbols create unique, non-colliding keys:

const id = Symbol("id");
obj[id] = 123;
Object.freeze(obj) //prevents any additions, modifications, or deletions of existing properties.
console.log(obj);
user["email"] = "yash18@gmail.com";     //doesn't gets addded
console.log(obj);       


