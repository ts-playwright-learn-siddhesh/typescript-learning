# Lecture 5 — Conditional Statements in TypeScript

**Code files:** `Lecture5-ConditionalStatements.ts` · `Lecture5-Solutions.ts`

---

## 1. What are Conditional Statements?

Conditional statements control which block of code runs based on whether a condition is `true` or `false`. They are the foundation of decision-making in a program.

| Statement | Use case |
|---|---|
| `if` | Run code only when condition is true |
| `if-else` | Choose between two paths |
| `if-else if` | Check multiple conditions in sequence |
| `switch-case` | Match a value against multiple fixed cases |

---

## 2. `if` Statement

Executes a block **only if** the condition is `true`. If false, the block is skipped entirely.

**Syntax:**
```typescript
if (condition) {
    // statements
}
```

**Example — Voting eligibility:**
```typescript
let age: number = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

**Expected output:**
```
--- 1. if Statement ---
age>=18 | eligible to vote: You are eligible to vote.
```

---

## 3. `if-else` Statement

Executes one block if the condition is `true`, and a different block if `false`.

**Syntax:**
```typescript
if (condition) {
    // statements when true
} else {
    // statements when false
}
```

**Example — Even or odd:**
```typescript
let num: number = 10;

if (num % 2 === 0) {
    console.log(`${num} Even number`);
} else {
    console.log(`${num} Odd number`);
}
```

**Expected output:**
```
--- 2. if-else Statement ---
num%2==0 | even check (10): 10 Even number
```

---

## 4. `if-else if` Statement (Nested if-else)

Checks multiple conditions in sequence. The first condition that evaluates to `true` runs its block; all remaining conditions are skipped.

**Syntax:**
```typescript
if (condition1) {
    // statements
} else if (condition2) {
    // statements
} else if (condition3) {
    // statements
} else {
    // default statements
}
```

**Example — Grade based on marks:**
```typescript
let marks: number = 50;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
} else if (marks >= 75 && marks < 90) {
    console.log("Grade B");
} else if (marks >= 60 && marks < 75) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}
```

**Expected output:**
```
--- 3. if-else if — Grade Check ---
marks=50 | grade: Grade D
```

**Example — Browser selection:**
```typescript
let browser: string = "chrome";

if (browser === "chrome") {
    console.log("Browser is chrome");
} else if (browser === "firefox") {
    console.log("Browser is firefox");
} else if (browser === "safari") {
    console.log("Browser is safari");
} else {
    console.log("Other browser");
}
```

**Expected output:**
```
--- 4. if-else if — Browser Selection ---
browser='chrome' | result: Browser is chrome
```

---

## 5. `switch-case` Statement

Tests a variable or expression against multiple fixed values (cases). When a match is found, that case's block runs. `break` stops execution from falling into the next case. `default` runs if no case matches.

**Syntax:**
```typescript
switch (expression) {
    case value1:
        // statements
        break;
    case value2:
        // statements
        break;
    default:
        // statements
}
```

**Example — Day of the week:**
```typescript
let day: number = 3;

switch (day) {
    case 1: console.log("Monday");    break;
    case 2: console.log("Tuesday");   break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday");  break;
    case 5: console.log("Friday");    break;
    case 6: console.log("Saturday");  break;
    case 7: console.log("Sunday");    break;
    default: console.log("Invalid day");
}
```

**Expected output:**
```
--- 5. switch-case — Day of the Week ---
day=3 | result: Wednesday
```

**Example — switch with an expression:**

The `switch` expression can be any value, not just a variable.

```typescript
let x: number = 20, y: number = 5;

switch (x - y) {   // expression: 20 - 5 = 15
    case 0:  console.log("Result Zero");          break;
    case 5:  console.log("Result is Five");       break;
    case 10: console.log("Result is Ten");        break;
    default: console.log("Result is something else");
}
```

**Expected output:**
```
--- 6. switch-case — Expression ---
x-y=15 | result: Result is something else
```

---

## 6. Fall-through in switch-case

When multiple cases share the same outcome, stack them without `break` — execution falls through to the next case until a `break` is hit.

```typescript
let month: number = 4;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}
// Output: Spring
```

Cases 3, 4, and 5 all lead to `"Spring"` — no duplication of code needed.

---

## 7. Key Takeaways

| Statement | Behaviour |
|---|---|
| `if` | Runs block only when condition is `true` |
| `if-else` | Picks one of two blocks based on condition |
| `if-else if` | Checks conditions top-to-bottom, runs first match |
| `switch-case` | Matches an expression against fixed values; needs `break` to stop fall-through |

- Use `if-else if` when conditions involve ranges or complex expressions.
- Use `switch-case` when comparing one variable against many fixed values — it is cleaner and more readable.
- Always include a `default` case in `switch` to handle unexpected values.
- Without `break`, execution falls through to the next case — useful for grouping, but can cause bugs if unintended.

---

## 8. Lab Assignment Solutions

All 15 programs from the PDF lab, with labelled output.

### if Statement Programs

**Program 1 — Check if a character is uppercase**
```typescript
let ch: string = 'A';
if (ch >= 'A' && ch <= 'Z') {
    console.log(`${ch} is an uppercase letter.`);
}
// Output: A is an uppercase letter.
```

**Program 2 — Check if a number is a multiple of 10**
```typescript
let num: number = 30;
if (num % 10 === 0) {
    console.log(`${num} is a multiple of 10.`);
}
// Output: 30 is a multiple of 10.
```

---

### if-else Statement Programs

**Program 3 — Teenager check (age 13–19)**
```typescript
let age: number = 16;
if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are not a teenager.");
}
// Output: You are a teenager.
```

**Program 4 — Larger of two numbers**
```typescript
let a: number = 5, b: number = 10;
if (a > b) {
    console.log(`${a} is larger.`);
} else {
    console.log(`${b} is larger.`);
}
// Output: 10 is larger.
```

**Program 5 — Positive, negative, or zero**
```typescript
let num: number = -3;
if (num > 0) {
    console.log(`${num} is positive.`);
} else if (num < 0) {
    console.log(`${num} is negative.`);
} else {
    console.log(`${num} is zero.`);
}
// Output: -3 is negative.
```

**Program 6 — Senior citizen discount (age >= 60)**
```typescript
let age: number = 65;
if (age >= 60) {
    console.log("You are eligible for a senior citizen discount.");
} else {
    console.log("You are not eligible for a senior citizen discount.");
}
// Output: You are eligible for a senior citizen discount.
```

---

### Nested if Statement Programs

**Program 7 — Positive and even**
```typescript
let num: number = 8;
if (num > 0) {
    if (num % 2 === 0) {
        console.log(`${num} is positive and even.`);
    }
}
// Output: 8 is positive and even.
```

**Program 8 — Uppercase vowel**
```typescript
let ch: string = 'A';
if (ch >= 'A' && ch <= 'Z') {
    if (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
        console.log(`${ch} is an uppercase vowel.`);
    }
}
// Output: A is an uppercase vowel.
```

**Program 9 — Largest of three numbers**
```typescript
let a: number = 5, b: number = 8, c: number = 3;
if (a > b && a > c) {
    console.log(`${a} is the largest.`);
} else if (b > c) {
    console.log(`${b} is the largest.`);
} else {
    console.log(`${c} is the largest.`);
}
// Output: 8 is the largest.
```

**Program 10 — Multiple of both 5 and 10**
```typescript
let num: number = 50;
if (num % 5 === 0) {
    if (num % 10 === 0) {
        console.log(`${num} is a multiple of both 5 and 10.`);
    }
}
// Output: 50 is a multiple of both 5 and 10.
```

**Program 11 — Vowel or consonant**
```typescript
let ch: string = 'E';
if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    console.log(`${ch} is a vowel.`);
} else {
    if (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
        console.log(`${ch} is a vowel.`);
    } else {
        console.log(`${ch} is a consonant.`);
    }
}
// Output: E is a vowel.
```

**Program 12 — Divisible by both 2 and 3**
```typescript
let num: number = 12;
if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log(`${num} is divisible by both 2 and 3.`);
    } else {
        console.log(`${num} is divisible by 2 but not by 3.`);
    }
} else {
    if (num % 3 === 0) {
        console.log(`${num} is divisible by 3 but not by 2.`);
    } else {
        console.log(`${num} is not divisible by either 2 or 3.`);
    }
}
// Output: 12 is divisible by both 2 and 3.
```

---

### switch Statement Programs

**Program 13 — Month name**
```typescript
let month: number = 5;
switch (month) {
    case 1:  console.log("January");   break;
    case 2:  console.log("February");  break;
    case 3:  console.log("March");     break;
    case 4:  console.log("April");     break;
    case 5:  console.log("May");       break;
    case 6:  console.log("June");      break;
    case 7:  console.log("July");      break;
    case 8:  console.log("August");    break;
    case 9:  console.log("September"); break;
    case 10: console.log("October");   break;
    case 11: console.log("November");  break;
    case 12: console.log("December");  break;
    default: console.log("Invalid month");
}
// Output: May
```

**Program 14 — Arithmetic via operator**
```typescript
let operator: string = '+';
let a: number = 10, b: number = 5;
switch (operator) {
    case '+': console.log(`Result: ${a + b}`); break;
    case '-': console.log(`Result: ${a - b}`); break;
    case '*': console.log(`Result: ${a * b}`); break;
    case '/': console.log(`Result: ${a / b}`); break;
    default:  console.log("Invalid operator");
}
// Output: Result: 15
```

**Program 15 — Season from month**
```typescript
let month: number = 4;
switch (month) {
    case 12: case 1: case 2:  console.log("Winter"); break;
    case 3:  case 4: case 5:  console.log("Spring"); break;
    case 6:  case 7: case 8:  console.log("Summer"); break;
    case 9:  case 10: case 11: console.log("Autumn"); break;
    default: console.log("Invalid month");
}
// Output: Spring
```
