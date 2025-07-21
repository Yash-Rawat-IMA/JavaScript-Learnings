// 1.for-of : array, string, map  => gets the element directly ([key, value] in case of maps)
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const map = new Map();
map.set(91, "India")
map.set(81, "Japan")
map.set(86, "China")
map.set(7, "Russia")
map.set(1, "USA")

console.log(map);
for (const key of map) {
    console.log(key)
}  //arrays of key-value pairs 
for (const [key, value] of map) {
    console.log(key, ":- ", value)
}

for (const key of map.keys()) {
  console.log(key);
}

for (const value of map.values()) {
  console.log(value);
}

// 2. for-in => gets the keys at which elements are present 
// for-in loop is used to iterate through actual Object or we can say object literal and arrays

const myObj = {
    js: "JavaScript",
    cpp: "C++",
    sw: "Swift",
    rb: "Ruby",
    rt: "React"
}
for (const key in myObj) {
    console.log(key, ":- ", myObj[key])
}

const prog = ["js", "rb", "py", "java", "cpp"]

for (const key in prog) {
    console.log(key, ": ",prog[key])
}

for (const key in map) {
    console.log(map)
}  //gives nothing as for-in is not used to iterate over map

// 3. for-each => higher order
// 
const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach( function (item){
    console.log(item)
})

coding.forEach( (item) => {
    console.log(item)
} )


function printMe(item)
{
    console.log(item)
}

//item: each element of array, index: index of that element and arr: array of elements (actual array calling forEach) is also availabe to each element   
coding.forEach(printMe);
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )



const myCoding = [
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "Python",
        langFileName: "py"
    },
    {
        langName: "HTML",
        langFileName: "html"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    },
]

myCoding.forEach( (item) => {
    console.log(item.langName, ":- ", item.langFileName)
})

