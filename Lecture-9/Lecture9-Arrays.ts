// Approach 1: Array literal syntax
let names: string[] = [];

names[0] = "John";
names[1] = "Smith";
names[2] = "Peter";
names[3] = "Scott";

console.log("\n--- 1. Array Literal Syntax ---");
console.log("names      | full array:", names);
console.log("names[1]   | index 1:", names[1]);
console.log("names[4]   | out of bounds:", names[4]);

// Approach 2: Generic Array<T> syntax
let employeeNames: Array<string> = ["John", "Smith", "Peter", "Scott"];
let employeeIds: Array<number> = [101, 102, 103, 104];
let mixedStringNumber: Array<string | number> = ["John", "Smith", 101, 102];
let mixedAny: Array<any> = [1, "John", true, null];

console.log("\n--- 2. Generic Array<T> Syntax ---");
console.log("employeeNames      | string array:", employeeNames);
console.log("employeeIds        | number array:", employeeIds);
console.log("mixedStringNumber  | union type:", mixedStringNumber);
console.log("mixedAny           | any type:", mixedAny);

console.log("\n--- 3. Iterating with for Loop ---");
for (let num = 0; num < employeeNames.length; num++) {
    console.log(`index ${num}: ${employeeNames[num]}`);
}

console.log("\n--- 4. Iterating with for...in Loop (indexes) ---");
for (let index in employeeIds) {
    console.log(`index ${index}: ${employeeIds[index]}`);
}

console.log("\n--- 5. Iterating with for...of Loop (values) ---");
for (let value of mixedStringNumber) {
    console.log("value:", value);
}

console.log("\n--- 6. Passing an Array to a Function ---");

function search(targetElement: number, numberArray: number[]): boolean {
    for (let num = 0; num < numberArray.length; num++) {
        if (numberArray[num] === targetElement) {
            return true;
        }
    }
    return false;
}

let numberList: number[] = [10, 20, 30, 40, 50];
console.log("search(20, numberList)  | found:", search(20, numberList));
console.log("search(100, numberList) | found:", search(100, numberList));

console.log("\n--- 7. Function Returning an Array ---");

function capitalizeWords(wordArray: string[]): string[] {
    let result: string[] = [];
    for (let num = 0; num < wordArray.length; num++) {
        result[num] = wordArray[num].toUpperCase();
    }
    return result;
}

let wordList: string[] = ["hello", "world", "typescript"];
console.log("capitalizeWords input  | wordList:", wordList);
console.log("capitalizeWords output | result:", capitalizeWords(wordList));
