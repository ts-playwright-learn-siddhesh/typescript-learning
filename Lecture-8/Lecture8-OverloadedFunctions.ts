// Function Overloading: Define multiple signatures for the same function name,
// each handling different parameter types, counts, or return types.
// Steps: 1) Write overload signatures  2) Write one implementation  3) Call the function

// Rules:
// - Define all overload signatures first (no body)
// - Write a single implementation that handles all overload cases
// - The implementation signature must be compatible with all overloads


// Example 1: Overloading with Different Parameter Types (data types)

function getInfo(userId: number): string;
function getInfo(userName: string): string;

function getInfo(param: number | string): string {
    if (typeof param === "number") {
        return `User ID is ${param}`;
    } else {
        return `User Name is ${param}`;
    }
}

console.log("--- 1. Overloading with Different Parameter Types ---");
console.log("getInfo | number :", getInfo(101));
console.log("getInfo | string :", getInfo("John"));


// Example 2: Overloading with Different Number of Parameters

function add(firstNum: number, secondNum: number): number;
function add(firstNum: number, secondNum: number, thirdNum: number): number;

function add(firstNum: number, secondNum: number, thirdNum?: number): number {
    if (thirdNum !== undefined) {
        return firstNum + secondNum + thirdNum;
    }
    return firstNum + secondNum;
}

console.log("\n--- 2. Overloading with Different Number of Parameters ---");
console.log("add | 2 params :", add(10, 20));
console.log("add | 3 params :", add(10, 20, 30));
// console.log("add | 3 params :", add(10, 20, 30, 40));


// Example 3: Overloading with Different Return Types

function processInput(input: string): string;
function processInput(input: number): number;

function processInput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else {
        return input * 2;
    }
}

console.log("\n--- 3. Overloading with Different Return Types ---");
console.log("processInput | string :", processInput("welcome"));
console.log("processInput | number :", processInput(5));


// Example 4: Overloading with string, number, and boolean parameter types

function greet(personName: string): string;
function greet(personAge: number): string;
function greet(isMarried: boolean): string;

function greet(value: string | number | boolean): string {
    if (typeof value === "string") {
        return `Hello ${value}`;
    } else if (typeof value === "number") {
        return `You are ${value} years old`;
    } else {
        let maritalStatus: string = value ? "married" : "single";
        return maritalStatus;
    }
}

console.log("\n--- 4. Overloading with string, number, and boolean ---");
console.log("greet | string  :", greet("John"));
console.log("greet | number  :", greet(30));
console.log("greet | boolean :", greet(true));
console.log("greet | boolean :", greet(false));
