# Lecture 6 — Looping Statements

**Code files:** `Lecture6-WhileLoop.ts` · `Lecture6-DoWhileLoop.ts` · `Lecture6-ForLoop.ts` · `Lecture6-BreakAndContinue.ts` · `Lecture6-Solutions.ts`

---

## 1. while Loop

Executes a block of code **as long as the condition is true**. The condition is checked **before** each execution, so if it is false initially, the body never runs.

**Syntax:**
```typescript
while (condition) {
    // statements
}
```

**Example — print 1 to 5:**
```typescript
let i: number = 1;

while (i <= 5) {    // t  t  t  t  t  f
    console.log(i); // 1  2  3  4  5
    i++;            // 2  3  4  5  6
}
```

**Output:**
```
1
2
3
4
5
```

**Example — even numbers 2 to 10 (Method 1: step by 2):**
```typescript
let i: number = 2;
while (i <= 10) {
    console.log(i);
    i += 2;
}
```

**Example — even numbers (Method 2: check remainder):**
```typescript
let i: number = 1;
while (i <= 10) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}
```

**Example — odd numbers 1 to 10 (step by 2):**
```typescript
let i: number = 1;
while (i <= 10) {
    console.log(i);
    i += 2;
}
```

**Example — countdown 10 to 1:**
```typescript
let i: number = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
```

**Infinite loop** — when the condition never becomes false, the loop runs forever:
```typescript
while (true) {
    console.log(1); // runs forever — avoid!
}
```

---

## 2. do-while Loop

Executes the body **at least once**, then checks the condition. Useful when the code must run before any validation.

**Syntax:**
```typescript
do {
    // statements
} while (condition);
```

**Example — print 1 to 5:**
```typescript
let i: number = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```

**Output:**
```
1
2
3
4
5
```

**Example — countdown 10 to 1:**
```typescript
let i: number = 10;
do {
    console.log(i);
    i--;
} while (i >= 1);
```

**Example — runs once even when condition is false from the start:**
```typescript
let x: number = 5;

while (x < 5) {
    console.log("Inside while loop"); // never runs
}

do {
    console.log("Inside do-while loop"); // runs once
} while (x < 5);
```

**Output:**
```
Inside do-while loop
```

---

## 3. for Loop

Best used when the **number of iterations is known**. Initialization, condition, and increment/decrement are written in a single line.

**Syntax:**
```typescript
for (initialization; condition; increment/decrement) {
    // statements
}
```

**Example — print 1 to 10:**
```typescript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

**Example — even numbers 2 to 10 (step by 2):**
```typescript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

**Example — countdown 10 to 1:**
```typescript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

**Example — variable declared outside the loop (accessible after loop ends):**
```typescript
let i: number;

for (i = 1; i <= 5; i++) {
    console.log(i); // 1, 2, 3, 4, 5
}

console.log(i); // 6 — i persists after loop
```

**Output:**
```
1
2
3
4
5
6
```

---

## 4. break Statement

Stops the loop **immediately** when a condition is met. Execution continues with the code after the loop.

**Syntax:**
```typescript
for (initialization; condition; increment/decrement) {
    if (someCondition) {
        break;
    }
    // statements
}
```

**Example — stop when n reaches 5:**
```typescript
for (let n: number = 1; n <= 10; n++) {
    if (n === 5) {
        break;
    }
    console.log(n);
}
```

**Output:**
```
1
2
3
4
```
The loop exits when `n` is 5, so 5 itself is never printed.

---

## 5. continue Statement

**Skips the current iteration** and immediately moves to the next one. The loop keeps running.

**Syntax:**
```typescript
for (initialization; condition; increment/decrement) {
    if (someCondition) {
        continue;
    }
    // statements
}
```

**Example — skip 3, 5, and 7:**
```typescript
for (let i: number = 1; i <= 10; i++) {
    if (i == 3 || i == 5 || i == 7) {
        continue;
    }
    console.log(i);
}
```

**Output:**
```
1
2
4
6
8
9
10
```

---

## 6. Comparison: while vs do-while

| Feature | while Loop | do-while Loop |
|---|---|---|
| Condition check | Before execution | After first execution |
| Execution guarantee | May not run if condition is false initially | Runs at least once |

---

## 7. When to Use Each Loop

| Loop | Use when |
|---|---|
| `while` | Number of iterations unknown; condition checked first |
| `do-while` | Body must execute at least once before condition is checked |
| `for` | Number of iterations is known in advance |
| `break` | Need to exit a loop early when a condition is met |
| `continue` | Need to skip one iteration and continue the loop |

---

## 8. Lab Assignments

### While Loop
1. Sum of the first 10 natural numbers
2. Factorial of a given number
3. Reverse a given number
4. Check if a number is prime
5. Find the largest digit in a given number
6. Check if a number is a palindrome

### Do-While Loop
7. Print numbers 1 to 10
8. Perform basic arithmetic operations (addition, subtraction, multiplication, division) until exit

### For Loop
9. Print multiples of 5 from 5 to 50
10. Print prime numbers between 1 and 50
11. Sum of even numbers between 1 and 20
12. Sum of odd numbers between 1 and 20
13. Multiplication table of 7
14. Numbers divisible by 3 and 5 from 1 to 100
15. Count digits in a number
16. Sum of digits in a number
17. Multiples of 7 between 1 and 100
18. Sum of even numbers from 1 to N

### Continue
19. Print odd numbers from 1 to 20 — skip even numbers using `continue`
20. Print 1 to 30, skip multiples of 5 using `continue` inside a while loop

### Break
21. Find the first even number between 1 and 10 — exit immediately using `break`
22. Print 1 to 30, stop when a number greater than 15 is found using `break`

All solutions are in `Lecture6-Solutions.ts`.
