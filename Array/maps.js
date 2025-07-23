// map: Calls a defined callback function on each element of an array, and returns an array that contains the results.

const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.map( (num) => {
    return num + 10
})
console.log(newNums)
// if we don't return here we get an array of same size as myNums but undefined as its elements

console.log(myNums) //original array doesn't change


newNums = newNums.map( (num) => num+10)
console.log(newNums)


// chaining of methods could be done 
const chainNums = myNums. //indentation could be done to enhance the readability though it could be easily be written in single line too 
                map((num)=>
                    {
                        return num*10
                    }).  //values of this map are passed to next method
                map((num)=>//this num gets the values already updated by previous method
                    {
                        return num+1
                    }).
                filter((num)=>
                    {
                        return num>40
                    });
// the returned values of 1st method in the chain are then passed to the next method in that chain and so on 
console.log(chainNums)
// map works for each value of the array we are applying it too whereas filter works for specific values satisfying the the specific condition