//  Immediately Incoked Functions Expressions(IIFE):

// to immediately call and run or execute the function ust after declaring and defining
    // this is used when we want to execute the function just after defining as maybe it's att startin of a website and getting you connected with the database at the stating itself
    
    // another use is to prevent the function from getting polluted by global variables

    // Syntax
    /* 
        (function(parameters){
        
        })()
        i.e. =>  (function)(calling) => ()()
        */



(function ()
{
    console.log(`IIFE1:  Hi! you're logged in.....WooHoo!!`)
})()

// Immediatelly calls itself without calling it actually
// Usually we don't use semicolon(;), in JS kyuki iske bina bhi kaam hojata hai, but it's recommnded to do so, as the function gets invoked immediatelly but don't know where to stop that's why if we call another "IIFE function" just after that 1st "IIFE function", we'll face an error


/* (function (){
    console.log(`Another IIFE called just after previous IIFE function, but now in between we have normal function`)
})() */
// The above one will give an error

// Normal function would run perfectly fine
function greet()
{
    console.log(`Hi! How are you?`)
}
greet();


(function (){
    console.log(`IIFE2:  Another IIFE called just after previous IIFE function, but now in between we have normal function`)
})()
// The above executes well without using semicolon in either of them but in between used a normal function, but if I want to invoke another IIFE just after this, we have to end this IIFE with a semicolon, see eg below


greet();
(function (){
    console.log(`IIFE3:  Here also previous IIFE didn't used the semicolon, so to break that again called a normal function`)
})(); //but now we are using a semicolon to invoke an IIFE just after this

(function(){
    console.log(`IIFE4 after IIFE3 because of semicolon`)
})();

( () => {
    console.log(`IIFE5: I am an IIFE of Arrow function after semicolon IIFE4`)
} )();


// can't take arguments from outside, this will give an scope error


/* num1=10;
    (function ()
    {
        console.log(`${num1} + ${num2} = ${num1+num2}`);
        return 
    })();
 */
    // can't call this function as it's not actually defined for further use
    // add(3,5)   //=>no output


// to take arguments as parameters
(function(name){
    console.log(`Hi! ${name} this side with argument in the IIFE`)
})("Yash");

// named IIFE
(function namedIIFE()
{
    console.log(`I am a named IIFE`)
})()