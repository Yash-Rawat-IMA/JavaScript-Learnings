const user = {
    email : "yash18@gmail.com",
    userName : {
        fullName: {
            firstName: "Yash",
            middleName: "",
            lastName: "Rawat"
        },
        nickName: "Yashu" 
    },
    age : 21
}

console.log(user);
console.log(user.userName);
console.log(user.userName.fullName);
// Oprional Channing for security purposes, if that element of object exists ot not, just for that add a '?' mark.
console.log(user?.userName?.fullName?.firstName);
console.log(user?.userName?.age?.firstName);    //undefined
console.log(user.userName.nickName);
console.log(user.age);


const obj1 = {
    1:"a", 2:"b", 3:"c"
}

const obj2 = {
    4:"d", 5:"e"
}

const obj3 = {obj1, obj2};
console.log(obj3);      //gets both the obj1 and obj2 inside it

const obj4 = Object.assign({} /* This is the target object, declared empty to copy all other sources objects to this */ , obj1, obj2);
console.log(obj4);
console.log(obj1);      //it doesn't change
console.log(obj2);
const obj5 = Object.assign(obj1, obj2);     //here, the target is obj1 and source is obj2 therfore obj2 gets copied to obj1, hence changing th obj1; 
console.log(obj5);
console.log(obj5 == obj1);      //true
console.log(obj5 === obj1);      //true
/* these both gives true, as first assign operator combines the obj2 with obj1 and stores the combined result in obj1 and then obj5 = obj1, therefore obj5 gets the same reference as that of the obj1; that's why giving result as true for both, and rest one are false as, though the key-value pairs is same but the memory locations are different that's why those one gives the result as false */ 


console.log(obj1);      //obj1+obj2
console.log(obj2);      //no change

Object.assign(obj2, obj1);
// here obj2 gets the values or elements of the obj1(which is already obj1 + obj2), therefore, obj2 = obj2 + obj1(obj1+obj2); but it automatically merges the equal key value pairs, there obj2 = obj2 + obj1(obj1+obj2) = obj1
console.log(obj2);
console.log(obj4 == obj2);      //false(reason1*)      
console.log(obj5 == obj2);      //false(reason1*)
console.log(obj1 == obj2);      //false(reason1*)

Object.assign(obj2, obj1);
console.log(obj2);      //same (all 5 key value pairs(3 from 1 and 2 from obj2 gets added to obj2), now obj2 has all 5 values stored in a sorted oredr)
console.log(obj1 == obj2);      //false(reason1*)

// reaso1* : false — Different objects, even if same values, Even though objects have same key-value pairs, they are still different in memory (=== false).


// Mostly Used
const obj6 = {...obj1, ...obj2};
console.log(obj6);


console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('email'))   //true
console.log(user.hasOwnProperty('email-id'))    ///false