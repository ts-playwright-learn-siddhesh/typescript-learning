//break
console.log("--- 1. break: stop loop when i reaches 5 ---");
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(`break | i: ${i}`);
}

//continue
console.log("\n--- 2. continue: skip 3, 5, 7 from 1 to 10 ---");
for (let i = 1; i <= 10; i++) {
    if (i == 3 || i == 5 || i == 7) {
        continue;
    }
    console.log(`continue | i: ${i}`);
}