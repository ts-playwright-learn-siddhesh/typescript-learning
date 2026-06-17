// JS is Dynamically Typed Programming Language

let age=30;  // age a number
console.log("--- 1. Dynamic Typing ---");
console.log("age | typeof after number assignment: " + typeof(age));  //Number


age="Thirty"   //String   //No complier error
console.log("age | typeof after string reassignment: " + typeof(age)); //string


console.log("age | value after string reassignment: " + age);  // Thirty



//Type Safety - Not

/*
let message="Hello"   //String
message=100;  // No compiler error you can assign any type of data. There is No Type safty
*/


/*
let result="5"+3;  //No compiler error, No TypeSfety
console.log(result);
*/
