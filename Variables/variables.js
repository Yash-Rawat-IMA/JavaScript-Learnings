let a=12;
console.log(`let a : ${a}`);
const b=5;  // if left uninitialized, can't define further, if left without initialized will give a syntax error
var c=8;  // is available everywhere, that's why not used in today's js
 if(true)
 {
    a=10;   // can be re-initialized after declaration and initialization
    // b=5;  // can't modify here
    console.log(`let a : ${a}, gets the new updated value`);
    c=2;
    let d=34;    // gives a scope error if used outside the the scope of this block
    console.log(`let d: ${d}, inside scope of "if" block`);
    
    var e=12;
 }
 let d=6    // here we can define a new "d" as the the variable of the same name has been removed from the memory after the execution of "if" block where it was declared and defined previously.
 console.log(`let a : ${a}, gets the value of last updation, that was in the "if" block`);
 a=7
 console.log(`let a : ${a}, after re-updating outside the scope`);
 console.log(`const b : ${b}`);
 console.log(`var c : ${c}, but here it does not take the first value as 8 where it was initialized rather taking the value where it was re updated and given value as 2 inside a block`);
 console.log(`let d: ${d}, declared outside the "if" scope, in the code itself`);
 console.log(`var e: ${e}, as "var" is available everywhere after its declaration that's we can use it inside a scope and outsidde too, though it was declared inside the "if" block and now we are using it outside that block!`);