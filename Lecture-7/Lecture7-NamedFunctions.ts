// Named Function: A function that is declared with a name.

/* Syntax

function functionName(parameter): returnType
{
    // block of code
}

functionName();    // calling the function/invoking the function

*/


// Example 1: Named Function with no parameters and no return type

function display(): void {
    console.log("Welcome to typescript");
}

console.log("--- 1. Named Function (No Parameters, No Return Type) ---");
display();


// Example 2: Named function with parameters and return type

function addNumbers(x: number, y: number): number {
    return x + y;
}

console.log("\n--- 2. Named Function (Parameters and Return Type) ---");
console.log("addNumbers | 2 + 3:", addNumbers(2, 3));
//console.log(addNumbers(1,2,3)); // Compiler Error: Expected 2 arguments, but got 3.
//console.log(addNumbers(1));     // Compiler Error: Expected 2 arguments, but got 1.


// Example 3: Named function with Rest parameters - same type
// Rest parameters dont restrict the number of values that you can pass to a function.

function addNums(...nums: number[]) {
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers:", sum);
}

console.log("\n--- 3. Named Function (Rest Parameters - Same Type) ---");
addNums(1, 2);
addNums(1, 2, 3);
addNums(10, 20, 30, 40, 50);


// Example 4: Named function with Rest parameters - multiple types

function findElements(...elements: (number | string)[]): number {
    return elements.length;
}

console.log("\n--- 4. Named Function (Rest Parameters - Multiple Types) ---");
console.log("findElements | (3,'john',2,1,'scott'):", findElements(3, "john", 2, 1, "scott"));
console.log("findElements | (10,20,30,40,50,60,70):", findElements(10, 20, 30, 40, 50, 60, 70));
console.log("findElements | ('abc','xyz'):", findElements("abc", "xyz"));


// Example 5: Named function with Optional Parameters

function displayDetails(id: number, name: string, mailId?: string): void {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mailId !== undefined) {
        console.log("Email:", mailId);
    }
}

console.log("\n--- 5. Named Function (Optional Parameters) ---");
displayDetails(123, "Scott", "scot@gmail.com");
displayDetails(123, "Scott");


// Example 6: Named function with Default Parameters

function calculateDiscount(price: number, rate: number = 0.50): void {
    let discount: number = price * rate;
    console.log("Discount Amount:", discount);
}

console.log("\n--- 6. Named Function (Default Parameters) ---");
calculateDiscount(1000, 0.30);
calculateDiscount(1000);
