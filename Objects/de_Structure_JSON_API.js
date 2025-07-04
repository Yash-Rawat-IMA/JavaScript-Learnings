const course = {
    courseName : "JS FrontEnd",
    courseWorth : "10000",
    courseValidity : "Life Time"
}

// If I want to access the courseName for suppose 10 times, than I have to write "objName.elementName" multiple times:

// below is the exp
course.coureName
// For this we have a shorter synatx(optional)
// Now I can access directly the element by its name

const {courseName} = course
console.log(courseName);

const {courseName : cName} = course     //further name accordingly
console.log(cName);


// For React (upcoming knowledge):

const navbar = ({company}) => {
    console.log(`Welcome to ${company}`)
};

navbar({company: "TRAV HOOD"});

// here { } => used for de-structuring


// The fetching of data or communicating from other server is done through API

//exp you're asking waiter for "aaloo paratha", he will give this order to cook, and then will return you your order, here waiter works as API 


// Earlier days, if we wanted to fetch some values from other websites or server, the values used to come in format of "XML", which was used to be very complex, but nowadays values are in "JSON" format.



// JSON is just an object with the data as key-value pairs



/* 
    {
        key1: "value1",
        {
            "key2": "value2", 
            key3 : 101101
        },
        {
            boolVal: true
        },
        {
            "keyCount": 10000
        },
    }
*/

// or maybe API gets the data in form of "array", consisting of objects like 

/* 
    [
        {

        }, 
        {
        
        }, 
        {
        
        }
    ]
*/


/*  
    randomuser.me is one of the API,
    you can do formatting of the JSON data coming from API, using JSON formatter 
*/