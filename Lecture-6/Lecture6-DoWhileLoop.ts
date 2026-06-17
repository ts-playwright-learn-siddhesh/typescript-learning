// do-while loop: always executes at least once before checking the condition

console.log("--- 1. Print 1 to 5 ---");
let i: number = 1;
do {
    console.log(`do-while | i: ${i}`);
    i++;
} while (i <= 5);

console.log("\n--- 2. Countdown 10 to 1 ---");
let c: number = 10;
do {
    console.log(`do-while | countdown: ${c}`);
    c--;
} while (c >= 1);

console.log("\n--- 3. Runs Once Even If Condition Is False ---");
let x: number = 5;
do {
    console.log(`do-while | ran once even though x(${x}) < 5 is false`);
} while (x < 5);
