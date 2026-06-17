// while loop: executes as long as the condition is true

console.log("--- 1. Print 1 to 5 ---");
let i: number = 1;
while (i <= 5) {
    console.log(`while | i: ${i}`);
    i++;
}

console.log("\n--- 2. Even Numbers 2 to 10 (step by 2) ---");
let e: number = 2;
while (e <= 10) {
    console.log(`while | even: ${e}`);
    e += 2;
}

console.log("\n--- 3. Even Numbers 1 to 10 (check remainder) ---");
let e2: number = 1;
while (e2 <= 10) {
    if (e2 % 2 == 0) {
        console.log(`while | even: ${e2}`);
    }
    e2++;
}

console.log("\n--- 4. Odd Numbers 1 to 10 (step by 2) ---");
let o: number = 1;
while (o <= 10) {
    console.log(`while | odd: ${o}`);
    o += 2;
}

console.log("\n--- 5. Odd Numbers 1 to 10 (check remainder) ---");
let o2: number = 1;
while (o2 <= 10) {
    if (o2 % 2 != 0) {
        console.log(`while | odd: ${o2}`);
    }
    o2++;
}

console.log("\n--- 6. Countdown 10 to 1 ---");
let c: number = 10;
while (c >= 1) {
    console.log(`while | countdown: ${c}`);
    c--;
}
