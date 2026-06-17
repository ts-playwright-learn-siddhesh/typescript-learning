// Increment   ++
// Decrement  --

let x:number=10;

//x++;    //post increment    //x=x+1;
//console.log(x); //11


//++x;   // pre-increment
//console.log(x); //11

/*
let res:number=x++;
console.log(res); //10
console.log(x); //11
*/

/*
let res:number=++x;
console.log(res); //11
console.log(x); //11
*/

/*
x--;  // post decrement
console.log(x); //9
*/

/*
--x;  // pre decrement
console.log(x); //9
*/

/*
let res:number=x--;

console.log(res); //10
console.log(x); //9
*/

let res:number=--x;

console.log("\n--- 1. Increment & Decrement ---")
console.log("--x | pre-decrement: res=" + res + ", x=" + x); //9
