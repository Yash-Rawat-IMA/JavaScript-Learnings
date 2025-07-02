// Declaring as strings
const name = "Yash";
const repoCount = 50;
// Concatenation =>
// Below one is not used much
// console.log(name + repoCount + "Value");
console.log(`Hello! My name is ${name} and I have ${repoCount} repos in my github account`);



// Declaring as Objects
const fullName = new String("Yash Rawat");
console.log(fullName);
console.log(typeof fullName);   //object
console.log(typeof name);   //string
console.log(fullName[0]);   
console.log(fullName.__proto__);    //gives an empty object



// Basic functions=>
console.log(fullName.length)
console.log(fullName.toUpperCase())     //original value is not changed



// charAt =>
let i = 9;
console.log(fullName.charAt(i))     //gives the character at that index of the string



//  indexOf =>
// Yash Rawat
console.log(fullName.indexOf(' '));     //4(index of the first blank space)
console.log(fullName.indexOf('s'));     //2(index of s)
console.log(fullName.indexOf('awat'));      //6   awat is present at 6th index 
console.log(fullName.indexOf('away'));      //-1  =>  awat is not present in the fullName="Yash Rawat"
console.log(fullName.indexOf("rawat"));     //Case Sensitive: as rawat is present but not with small 'r', but with 'R' with full awat
console.log(fullName.indexOf("Rawat"));     //5   present case-to-case on the 5th index




// Substring=>       (don't take negative values, if given read them as  0 and starts from 0(1st character of the string))
const newString = fullName.substring(0,6);  //last index ignored i.e. 0 1 2 3 4 5 are included but not 6
console.log(newString);  
const newString1 = fullName.substring(-1,6);    //starts from 0 and gives the same result as newString  
console.log(newString1);



// Slice=>      (take and executes well with negative values, just can't print tin reverse.)
const anotherString = fullName.slice(-8,4);    //(start, end) => where end is not included,    we started from -8, i.e. index 8 from the back (from back the index starts from -1) => Yash Rawat => t= -1, a= -2....h= -7, s= -8, from here we have to print till 3rd index(as 4 is not included), s= 2, h= 3, so print "sh"
console.log(anotherString);     //"sh"

const anotherString1 = fullName.slice(-8,1);   //here the starting index is -8 i.e. length of string = 10 - 8 = 2, -8 is 2nd index i.e. s, and ending index is 1, how we can print in reverse from 2nd index to 1st index, that's why it shows blank output  
console.log(anotherString1);    // ""
const anotherString2 = fullName.slice(1, -8);       //the statring index is 1, and ending is -8(length-8 = 10-8=2, start=1 to end=2(not included), that's why 2-1=1 tak print hoga 1 se 1 tak ek hi element hai that is str[1]=a)  
console.log(anotherString2);    // "a"
const anotherString3 = fullName.slice(-8,2);        //start and end-1 are same index i.e. 2 = 10-8 = 2  
console.log(anotherString3);        //blank
const anotherString4 = fullName.slice(2,-8);  
console.log(anotherString4);        //same as anotherString3
 


// trim
// Knowlingly or unknowlingly, many a times user gives input as a string and adds up too many spaces...
// eg
const trimString = "        Yash        ";
console.log(trimString);        /*      Yash        */
console.log(trimString.trim());     
/*Yash*/    //removes spaces from start and end
// trimStart and trimEnd are also similar functions



// Replace
const url = "https://Yash.com/yashrawat%20IMA";
// here what if, I want to remove "%20" from the url
const url1=url.replace('%20', '_')
console.log(url1); 
console.log(url.includes('yash'));


const StringToArray= new String("Yash.Rawat.com.in.IMA");
const newArray = StringToArray.split('.');
console.log(newArray);      //converts the string on the basis of '.' and gives the reult as array object
console.log(typeof newArray);