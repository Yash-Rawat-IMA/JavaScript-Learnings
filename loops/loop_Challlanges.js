// Q1 while loop for sum 1 to 5
let sum=0
let i=1
while(i<=5)
{
    sum+=i;
    i++;
}
console.log(sum);


// Q2 while for countdown array storing 5 to 1 
let countdown=[]
let j=5
while(j>0)
{
    countdown.push(j);
    j--;
}
console.log(countdown);

// Do while 
// 1.
let data=[];
let d;
// On-brower console using inspect:-
/* do {
    d=prompt(`Enter the data(type "stop" to stop giving the data): `);
    if(d!="stop")
    {
        data.push(d);
    }
} while (d!=stop); */

// 2. do-while
let total=0;
let k=1;
do{
    total+=k;
    k++;
}while(k<=3);
console.log(total);

let arr=[2,4,6];
let mularr=[];
let n=0;
for (let n = 0; n < arr.length; n++) {
    // mularr[n]=arr[n]*2;ṇ
    mularr.push(arr[n]*2);
}
console.log(mularr);


let a = 0;
do {
  a += 1;
  console.log(a);
} while (i < 5);