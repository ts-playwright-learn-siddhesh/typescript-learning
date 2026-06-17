// for loop: used when the number of iterations is known beforehand

console.log("--- 1. Print 1 to 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`for | i: ${i}`);
}

console.log("\n--- 2. Even Numbers 2 to 10 (step by 2) ---");
for (let i = 2; i <= 10; i += 2) {
    console.log(`for | even: ${i}`);
}

console.log("\n--- 3. Even Numbers 1 to 10 (check remainder) ---");
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`for | even: ${i}`);
    }
}

console.log("\n--- 4. Countdown 10 to 1 ---");
for (let i = 10; i >= 1; i--) {
    console.log(`for | countdown: ${i}`);
}

console.log("\n--- 5. Variable Declared Outside Loop (post-loop value) ---");
let i: number;
for (i = 1; i <= 5; i++) {
    console.log(`for | i: ${i}`);
}
console.log(`for | i after loop (expected 6): ${i}`);
