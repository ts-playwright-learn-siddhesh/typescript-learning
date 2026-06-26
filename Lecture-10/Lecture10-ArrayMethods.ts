let numberList: number[] = [1, 2, 3, 4, 5];
let fruitList: string[] = ["apple", "banana", "orange", "mango"];

console.log("\n--- 0. Initial Arrays ---");
console.log("numberList | values:", numberList);
console.log("fruitList  | values:", fruitList);
console.log("numberList | length:", numberList.length);
console.log("fruitList  | length:", fruitList.length);

// 1. push() — adds elements to the end
console.log("\n--- 1. push() ---");
numberList.push(6, 7);
console.log("numberList after push(6, 7):", numberList);

// 2. pop() — removes and returns the last element
console.log("\n--- 2. pop() ---");
let removedLastFruit = fruitList.pop();
console.log("fruitList after pop()        :", fruitList);
console.log("removed element              :", removedLastFruit);

// 3. shift() — removes and returns the first element
console.log("\n--- 3. shift() ---");
let removedFirstNumber = numberList.shift();
console.log("numberList after shift()     :", numberList);
console.log("removed element              :", removedFirstNumber);

// 4. unshift() — adds elements to the beginning
console.log("\n--- 4. unshift() ---");
fruitList.unshift("kiwi", "pear");
console.log("fruitList after unshift('kiwi', 'pear'):", fruitList);

// 5. concat() — combines arrays into a new array
console.log("\n--- 5. concat() ---");
let combinedNumbers = numberList.concat([8, 9], [10]);
console.log("numberList (unchanged)  :", numberList);
console.log("combinedNumbers         :", combinedNumbers);

// 6. slice() — extracts a section without modifying the original
// endIndex is exclusive: slice(2, 5) returns indexes 2, 3, 4
console.log("\n--- 6. slice() ---");
let selectedFruits = fruitList.slice(2, 5);
console.log("fruitList (unchanged)   :", fruitList);
console.log("slice(2, 5) result      :", selectedFruits);

// 7. splice() — adds or removes elements at any position
console.log("\n--- 7. splice() ---");
console.log("fruitList before splice :", fruitList);

let removedFruits = fruitList.splice(1, 2);
console.log("splice(1, 2) — remove 2 from index 1:");
console.log("  fruitList after       :", fruitList);
console.log("  removed elements      :", removedFruits);

fruitList.splice(1, 0, "pineapple", "grape");
console.log("splice(1, 0, 'pineapple', 'grape') — add without removing:");
console.log("  fruitList after       :", fruitList);

fruitList.splice(1, 2, "mango", "cherry");
console.log("splice(1, 2, 'mango', 'cherry') — remove 2 and add 2:");
console.log("  fruitList after       :", fruitList);

// 8. indexOf() — returns index of first occurrence, or -1 if not found
console.log("\n--- 8. indexOf() ---");
let bananaIndex = fruitList.indexOf("banana");
console.log("indexOf('banana')           :", bananaIndex);

let papayaIndex = fruitList.indexOf("papaya");
console.log("indexOf('papaya')           :", papayaIndex);

let bananaFromIndex2 = fruitList.indexOf("banana", 2);
console.log("indexOf('banana', 2)        :", bananaFromIndex2);

// 9. includes() — returns true if element exists, false otherwise
console.log("\n--- 9. includes() ---");
let appleExists = fruitList.includes("apple");
console.log("includes('apple')           :", appleExists);

let bananaExists: boolean = fruitList.includes("banana");
console.log("includes('banana')          :", bananaExists);

// 10. toString() — converts array to a comma-separated string
console.log("\n--- 10. toString() ---");
let numberString: string = numberList.toString();
console.log("numberList.toString()       :", numberString);

let letterArray: string[] = ["w", "e", "l", "c", "o", "m", "e"];
let letterString: string = letterArray.toString();
console.log("letterArray.toString()      :", letterString);

// 11. forEach() — executes a function for each element
console.log("\n--- 11. forEach() ---");
let fruitNames: string[] = ["apple", "banana", "cherry"];
fruitNames.forEach((fruitName, position) => {
    console.log(`position ${position + 1}: ${fruitName}`);
});

// 12. map() — returns a new array with each element transformed
console.log("\n--- 12. map() ---");
let baseNumbers: number[] = [1, 2, 3];
let squaredNumbers = baseNumbers.map(number => number * number);
console.log("baseNumbers    :", baseNumbers);
console.log("squaredNumbers :", squaredNumbers);

// 13. filter() — returns a new array with elements that pass the test
console.log("\n--- 13. filter() ---");
let mixedNumbers: number[] = [1, 2, 3, 4];
let evenNumbers = mixedNumbers.filter(number => number % 2 === 0);
console.log("mixedNumbers   :", mixedNumbers);
console.log("evenNumbers    :", evenNumbers);

// 14. reduce() — reduces the array to a single value
console.log("\n--- 14. reduce() ---");
let valuesToSum: number[] = [1, 2, 3];
let total = valuesToSum.reduce((runningTotal, currentValue) => runningTotal + currentValue, 0);
console.log("valuesToSum    :", valuesToSum);
console.log("total          :", total);

// 15. some() — returns true if at least one element passes the test
console.log("\n--- 15. some() ---");
let positiveNumbers: number[] = [1, 2, 3];
let hasNegative = positiveNumbers.some(number => number < 0);
console.log("positiveNumbers         :", positiveNumbers);
console.log("some(n < 0)             :", hasNegative);

// 16. every() — returns true if all elements pass the test
console.log("\n--- 16. every() ---");
let evenOnlyNumbers: number[] = [2, 4, 6];
let allEven = evenOnlyNumbers.every(number => number % 2 === 0);
console.log("evenOnlyNumbers         :", evenOnlyNumbers);
console.log("every(n % 2 === 0)      :", allEven);
