// 1.
let arr=["black", "oolong", "red", "masala", "blue", "yellow", "elaichi"];
let select=[];
/* for(let i=0;i<arr.length;i++)
{
    if(arr[i]=="masala")
    {
        break;
    }
    // select[i]=arr[i];
    select.push(arr[i]);
} */
// console.log(select);
// 2.
for(let i=0;i<arr.length;i++)
{
    if(arr[i]=="red")
    {
        continue;
    }
    // select[i]=arr[i];
    select.push(arr[i]);
}
// console.log(select);
// 3.
let numbers=[1,2,3,4,5];
let smallNum=[];
for (const num of numbers) {
    if(num<=4)
    {
        smallNum.push(num);
    }
}
// console.log(smallNum);
// 4.
let teas=["chai", "green", "herbal", "black", "red", "elaichi"];
let prefferedTeas=[];
for (const tea of teas) {
    if(tea=="herbal")
            continue;
    prefferedTeas.push(tea);
}
// console.log(prefferedTeas);
// 5.
let cities={
    "London":890000,
    "New York": 840000,
    "Berlin": 300000,
    "Delhi": 1000000,
    "Paris": 350000,
};
let bigCities={};
// console.log(Object.keys(cities));
// console.log(Object.values(cities));
// 6.
for (const city in cities) {
        // console.log(cities[city]);
        if(city=="Berlin")  //Not index friendly
            break;
        bigCities[city]=cities[city];   
    }

    console.log(bigCities);
// 7.
let lareCities={};
for (const city in cities) {
    if(cities[city]>=320000)
        lareCities[city]=cities[city];    
        
}
// console.log(lareCities);

// 8.
let chais=["earl grey", "green", "chai", "oolong", "red", "yellow"];
let availableTeas=[];
chais.forEach((tea) => {
    if(tea=="chai")
        return;
    availableTeas.push(tea);
});
// console.log(availableTeas);

// 9. 
let myCities=["Berlin", "Tokyo", "Sydney", "Paris"];
let travelCities=[];

myCities.forEach(city => {
    if(city=="Sydney")
        return;
    travelCities.push(city);
});
// console.log(travelCities);

// 10
let primeNum=[2,5,7,11,13,17,19];
let doubleNum=[];
for (let i = 0; i < primeNum.length; i++) {
    if(primeNum[i]==7)
        continue;
    doubleNum.push(primeNum[i]*2);
}
// console.log(doubleNum);

// 11
let moreTea=["chai", "green", "jasmine", "herbal", "elaichi"];
let shortTeas=[];
for (const tea of moreTea) {
    if(tea.length>10)
        continue;
    shortTeas.push(tea);
}
console.log(shortTeas);