/////////////////////////////////////////////////

// Topic:  TypeScript Variables

/////////////////////////////////////////////////////


//Syntax of variable declaration:
// keyword(var/let/const) variablename : datatype(optional) = value

//Uasge of different keywords:
//var - We do not use this in Modern JS/TS. Avoid var because it has function scope and can lead to unexpected issues.
//let - Use let when you need a variable that can change.
//const - Use const when the variable value should not change.



// =======================================
// 1. Scope : Function Scope vs. Block Scope
// =======================================

// Example 1: var (Function Scope)
function varScope() {
    if (true) {
        var msg = "Hello, World!";
    }
    console.log("--- 1. Scope ---");
    console.log("var   | Accessed outside if-block (function-scoped):", msg); // Works! (function-scoped)
}

varScope();   // calling function



// Example 2: let and const (Block Scope)
function blockScope() {
    if (true) {
        let msg = "Hello, let!";
        const greet = "Hello, const!";
        console.log("let   | Inside block:", msg);
        console.log("const | Inside block:", greet);
    }
    // console.log(msg);  // Error: msg is not defined
    // console.log(greet); // Error: greet is not defined
}

blockScope();



// Example 3: Scope Difference (Function vs. Block Scope)

function scopeDiff() {
    if (true) {
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;
        console.log("var   | num1 inside block (function-scoped):", num1);
        console.log("let   | num2 inside block (block-scoped):", num2);
        console.log("const | num3 inside block (block-scoped):", num3);
    }
    //console.log(num1); // Works (function-scoped)
    // console.log(num2); // Error: num2 is not defined (block-scoped)
    // console.log(num3); // Error: num3 is not defined (block-scoped)
}

scopeDiff();




// =======================================
// 2. Value Assignment/Initialize at Declaration
// =======================================

// Example 1: var can be declared without initialization
var x;
console.log("\n--- 2. Value Assignment at Declaration ---");
console.log("var   | Declared without value:", x); // Output: undefined


// Example 2: let can also be declared without initialization
let y;
console.log("let   | Declared without value:", y); // Output: undefined


// Example 3: const must be initialized at declaration
// const z; // Error: Missing initializer in `const` declaration
const z = 60; // Works
console.log("const | Must be initialized at declaration:", z);



// =======================================
// 3. Re-declaration
// =======================================

//var - allows the Re-declaration
//let and const - not allows the Re-declaration (making code safer)

// Example 1: var allows re-declaration
var city = "New York";
var city = "Los Angeles"; // var allows re-declaration in the same scope, which can lead to accidental overwriting.
console.log("\n--- 3. Re-declaration ---");
console.log("var   | After re-declaring city:", city); // Los Angeles



//Example2 : let (Not allowed Re-declaration)
let country = "USA";
// let country = "Canada"; //Error: Cannot redeclare block-scoped variable 'country'
console.log("let   | No re-declaration allowed, value stays:", country);



//Example 3: const (Not allowed Re-declaration)
const planet = "Earth";
// const planet = "Mars"; //Error: Cannot redeclare block-scoped variable 'planet'
console.log("const | No re-declaration allowed, value stays:", planet);


// =======================================
// 4. Re-assignment/Reinitialization
// =======================================

//var and let - Re-assignment Allowed
//const  - Re-assignment Not allowed (Only constants allowed- cannot change the value)

// Example 1: var allows re-assignment
var age = 25;
age = 30; // Allowed
console.log("\n--- 4. Re-assignment ---");
console.log("var   | age changed from 25 to:", age);



// Example 2: let allows re-assignment
let score = 50;
score = 60; // Allowed
console.log("let   | score changed from 50 to:", score);



// Example 3: const does not allow re-assignment
const pi = 3.14;
// pi = 3.14159;  // Error: Assignment to constant variable
console.log("const | Value cannot change, stays at:", pi);




// =======================================
// 5. Hoisting
// ======================================


//Example1 : var (Hoisted with undefined) , let and const (Not Initialized)

//console.log(a); // Undefined (var is hoisted)
var a = 10;
console.log("\n--- 5. Hoisting ---");
console.log("var   | Hoisted as undefined before declaration, value after:", a)


//console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log("let   | Not initialized before declaration, value after:", b)


//console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log("const | Not initialized before declaration, value after:", c)
