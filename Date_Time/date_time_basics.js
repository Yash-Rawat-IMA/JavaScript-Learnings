// Date started in 1st Jan 1970 and is stored in milliseconds
// if date is directly fetched, a long string of total milliseconds is given
// New proposals from JavaScript are going to come with a full fledged library and built-in functions like we have it for "Math", "String", etc.....

let myDate = new Date();    //declaring a new Date object
console.log(myDate);    //un understandable string 
// Let's try to convert it into some thing that's understandable by us

console.log(myDate.toString());     //date with day and time (IST)
console.log(myDate.toDateString());     //date with day
console.log(myDate.toISOString());      //standard default output of date like in original
console.log(myDate.toLocaleDateString());       //date format with '/'
console.log(myDate.toLocaleTimeString());       //time (IST) am/pm
console.log(myDate.toJSON());       //same as ISO and default

console.log(typeof myDate);     //object

// Creating and Declaring our own Date
const myCreatedDate = new Date(2025,6,2, 23, 53, 59,111);   //year, month(0-based indexing), date
console.log(myCreatedDate.toLocaleString());
const myCreatedDate1 = new Date("2025-07-02");
console.log(myCreatedDate1.toLocaleString());
const myCreatedDate2 = new Date("02-07-2025");
console.log(myCreatedDate2.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);     //milliseconds from 1st Jan 1970
console.log(typeof timeStamp);  //number 

console.log(myCreatedDate.getTime());   //milliseconds from 1st Jan 1970 to the created date

console.log(Math.floor(Date.now()/1000));       //milliseconds to seconds

let newDate = new Date();
console.log((newDate.getMonth()+1));


// Another way to show Date and time to end user
console.log(`Today's date is ${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()} and the time is ${newDate.toLocaleTimeString()}`);

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))
console.log(newDate.toLocaleString('default',{
    calendar: 'buddhist'    //here we can give different types of calendar: 'japanese', 'islamic', 'gregory' etc.....
}))