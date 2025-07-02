let obj = {};
console.log(obj);
console.log(typeof obj);

let username = { firstname: "Yash", lastname: "Rawat", isActive: "true" };
console.log(username);

const username1 = { 
    "first name": "Ayush", 
    lastname: "Rawat", 
    isActive: "true",

    };
console.log(username1["first name"]);

username1.firstname="Ajay";
username1.sonName="Ayush";
console.log(username.firstname);
console.log(username1["firstname"]);

console.log(username1);


let today=new Date();
console.log(today.getDate());


let heros = ["a", "b", "c", true];