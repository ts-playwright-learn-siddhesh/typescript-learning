// Callback Function: A function passed as an argument to another function and executed later.

// Why Use Callback Functions?
// - Useful when a function should execute only after another function completes.
// - Common in asynchronous operations like API calls, file handling, or event handling.


// Example 1: Basic callback — greet a person, then show a message

function greet(personName: string, callback: (message: string) => void): void {
    console.log("name:", personName);
    callback("Hello"); // executing the callback function
}

function showMessage(message: string): void {
    console.log("message:", message);
}

console.log("--- 1. Callback Function (Greet with Message Callback) ---");
greet("John", showMessage);


// Example 2: Callback receives the result of a computation

function sumTwoNumbers(firstNumber: number, secondNumber: number, callback: (result: number) => void): void {
    let total = firstNumber + secondNumber;
    callback(total);
}

function displayResult(result: number): void {
    console.log("sum | result:", result);
}

console.log("\n--- 2. Callback Function (Sum with Result Callback) ---");
sumTwoNumbers(10, 20, displayResult);
