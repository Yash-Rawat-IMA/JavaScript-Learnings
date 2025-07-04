const user = {
    userName: "ABC",
    costToRegister: 999,
    greetMessage: function () {
        console.log(`${this.userName} has registred successfuully after paying ${this.costToRegister}`)     //here this is used for current-context
        console.log(this);      //prints the current context of the user(with changed username, if done so)
    }
}

user.greetMessage()
console.log(this);  //empty object
console.log(typeof this);  //"this" -> is also an object


user.userName = "Yash";
user.greetMessage();

console.log(this);  //same, empty object, as here we have no context to use "this" with
// We have "this" => {}, because we're working on a node environment but on browser the context of "this" becomes diffrent (generally towards Window)

function giveThiscontext() {
    console.log(this);
}
giveThiscontext(); //gives the whole context of this function


function printUsingThis()
{
    const userName = "Yash";
    console.log(`Hi! ${this.userName}`);        //doesn't take the current context value from the userName
    console.log(`Hi! ${userName}`);             //prints well
}

printUsingThis();



// Declaraing functions through arrow(=>)


const arrowFunc = () =>{
    const userName= "XYZ";
    console.log(`Hi! ${userName}`)
    console.log(`Hi! I am printing the userName using "this" keyword => ${this.userName}`)
    console.log(`Hi!, I am printing this ${this}`)
    console.log(this)       //gives me the empty object,  as it's in the arrow function
}
arrowFunc()

// Syntax of arrow function
/* 
    const/let function_var_name = (parameters) => {
            code_block
        } 
*/
const adds = (num1,num2) => {
    return num1+num2;
}
console.log(adds(8,3));


// Implicit return : no writing of return 
const adds3 = (num1,num2,num3) => num3+num1+num2
console.log(adds3(8,7,3));

// Implicit return with brackets for objects and normally could be used
const retrunObject = () => {user: "Yash"}       //undefined as no brackets
console.log(retrunObject());



const retrunObjectBraces = () => ({user: "Yash"} )      //undefined as no brackets
console.log(retrunObjectBraces());