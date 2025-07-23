const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter : Returns the elements of an array that meet the condition specified in a callback function.
let newNums = myNums.filter( (num) => num > 4) //here we were only inside the paranthesis so it returned the values implicitly without writing the return statement explicitly
console.log(newNums)

// Now, here we are starting a sope for which we will return the values explicitly by writing the return statement with the condition we want 
let returnNums = myNums.filter( (num) => {
    return num>4
})
// if you don't return here we get an empty array
console.log(returnNums)

// for for-each loop explicitly store the values in the array you want after putting the condition as it doesn't return the values on itself
const ForEachNums = [];
myNums.forEach((num) => {
    if(num>4)
        ForEachNums.push(num);
})
console.log(ForEachNums);


const books = [
    {
        bookName: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publish_year: 1960
    },
    {
        bookName: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publish_year: 1937
    },
    {
        bookName: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        publish_year: 1951
    },
    {
        bookName: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publish_year: 1997
    },
    {
        bookName: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        publish_year: 1949
    },
    {
        bookName: "Gone Girl",
        author: "Gillian Flynn",
        genre: "Thriller",
        publish_year: 2012
    },
    {
        bookName: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        publish_year: 1932
    },
    {
        bookName: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        publish_year: 1813
    },
    {
        bookName: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Thriller",
        publish_year: 2003
    },
    {
        bookName: "Jane Eyre",
        author: "Charlotte Brontë",
        genre: "Romance",
        publish_year: 1847
    }
];


let userBooks = books.filter( (bk) => bk.genre === "Fiction")
console.log(userBooks)
userBooks = books.filter( (bk) => {
    return bk.genre === "Fantasy" && bk.publish_year>=1950
})
console.log(userBooks)