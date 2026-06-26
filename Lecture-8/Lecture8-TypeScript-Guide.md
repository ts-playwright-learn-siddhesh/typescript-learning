# Lecture 8 — Callback and Overloaded Functions

**Code files:** `Lecture8-CallbackFunctions.ts` · `Lecture8-OverloadedFunctions.ts`

---

## 1. Callback Functions

A **callback function** is a function that is passed as an argument to another function and gets executed later (after the outer function has done its work).

### Why Use Callback Functions?

- Useful when a function should execute only **after another function completes**
- Common in **asynchronous operations** like API calls, file handling, or event handling

### Syntax

```typescript
function outerFunction(param: Type, callback: (arg: Type) => ReturnType): void {
    // do some work
    callback(result); // call the callback when ready
}
```

### Example — Greet and Show Message

```typescript
function greet(personName: string, callback: (message: string) => void): void {
    console.log(personName);
    callback("Hello"); // calling the callback after printing the name
}

function showMessage(message: string): void {
    console.log(message);
}

greet("John", showMessage);
```

**Output:**
```
John
Hello
```

- `greet` receives `showMessage` as a callback
- After printing the name, it calls `showMessage("Hello")`

### Example — Sum with Result Callback

```typescript
function sumTwoNumbers(firstNumber: number, secondNumber: number, callback: (result: number) => void): void {
    let total = firstNumber + secondNumber;
    callback(total);
}

function displayResult(result: number): void {
    console.log("sum | result:", result);
}

sumTwoNumbers(10, 20, displayResult);
```

**Output:**
```
--- 1. Callback Function (Sum with Result Callback) ---
sum | result: 30
```

- The computation happens inside `sumTwoNumbers`
- The result is passed to the callback `displayResult` for display

---

## 2. Function Overloading

**Function overloading** allows you to define multiple versions of a function with the **same name** but **different parameters or return types**.

### Why Use Function Overloading?

- Create functions that behave differently based on input types
- Improves code **readability** and **reusability**

### Three Steps

| Step | What to do |
|------|-----------|
| 1 | Write overload **signatures** (no body) |
| 2 | Write one **implementation** function that handles all cases |
| 3 | **Call** the function — TypeScript picks the right signature |

### Basic Rules

1. **Overload signatures** come first — they list all ways the function can be called (no implementation body)
2. **Single implementation** — one actual function body handles all overloads
3. **Compatibility** — the implementation signature must be compatible with all overload signatures (usually uses union types)

---

## 3. Correct Overloading Examples

### Example 1 — Different Parameter Types

```typescript
function getInfo(userId: number): string;
function getInfo(userName: string): string;

function getInfo(param: number | string): string {
    if (typeof param === "number") {
        return `User ID is ${param}`;
    } else {
        return `User Name is ${param}`;
    }
}

console.log(getInfo(101));     // User ID is 101
console.log(getInfo("John"));  // User Name is John
```

**Output:**
```
User ID is 101
User Name is John
```

The implementation uses `typeof` to detect which overload path to take.

---

### Example 2 — Different Number of Parameters

```typescript
function add(firstNum: number, secondNum: number): number;
function add(firstNum: number, secondNum: number, thirdNum: number): number;

function add(firstNum: number, secondNum: number, thirdNum?: number): number {
    if (thirdNum !== undefined) {
        return firstNum + secondNum + thirdNum;
    }
    return firstNum + secondNum;
}

console.log(add(10, 20));       // 30
console.log(add(10, 20, 30));   // 60
```

**Output:**
```
30
60
```

`thirdNum` is optional (`?`) in the implementation, making it compatible with both overloads.

---

### Example 3 — Different Return Types

```typescript
function processInput(input: string): string;
function processInput(input: number): number;

function processInput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else {
        return input * 2;
    }
}

console.log(processInput("welcome"));  // WELCOME
console.log(processInput(5));          // 10
```

**Output:**
```
WELCOME
10
```

The return type changes depending on which overload is matched.

---

### Example 4 — String, Number, and Boolean Parameters

```typescript
function greet(personName: string): string;
function greet(personAge: number): string;
function greet(isMarried: boolean): string;

function greet(value: string | number | boolean): string {
    if (typeof value === "string") {
        return `Hello ${value}`;
    } else if (typeof value === "number") {
        return `You are ${value} years old`;
    } else {
        let maritalStatus: string = value ? "married" : "single";
        return maritalStatus;
    }
}

console.log(greet("John"));   // Hello John
console.log(greet(30));       // You are 30 years old
console.log(greet(true));     // married
console.log(greet(false));    // single
```

**Output:**
```
--- 1. Function Overloading (Different Parameter Types) ---
greet | string  : Hello John
greet | number  : You are 30 years old
greet | boolean : married
greet | boolean : single
```

---

## 4. Incorrect Overloading Examples

These are **invalid** patterns TypeScript will reject — understanding why helps avoid mistakes.

### Invalid 1 — No Implementation Function

```typescript
function test(value: number): string;
function test(value: string): string;
// ERROR: No implementation provided
```

Overload signatures with no implementation body are not allowed on their own.

---

### Invalid 2 — Wrong Return Type in Implementation

```typescript
function calculate(value: number): number;
function calculate(value: string): string;

function calculate(value: number | string): boolean { // ERROR
    return true; // Should return number or string, not boolean
}
```

The implementation return type must match (or be a union of) all overload return types.

---

### Invalid 3 — Identical Parameter Types, Different Return Types

```typescript
function demo(value: number): string;
function demo(value: number): number; // ERROR: duplicate signature

function demo(value: number): string {
    return value.toString();
}
```

TypeScript cannot distinguish between two overloads that have the same parameter types.

---

### Invalid 4 — Incompatible Return Type in Implementation

```typescript
function fetchData(url: string): string;
function fetchData(url: number): string;

function fetchData(url: string | number): number { // ERROR
    return 42; // Should return string to match overloads
}
```

The implementation must return a type that satisfies all overload signatures.

---

### Invalid 5 — Optional Parameter Conflicts with Overload

```typescript
function add(firstNum: number, secondNum?: number): number;
function add(firstNum: number, secondNum: number, thirdNum: number): number;

function add(firstNum: number, secondNum?: number, thirdNum?: number): number {
    return firstNum + (secondNum ?? 0) + (thirdNum ?? 0);
}
```

The second overload requires exactly three arguments, but the implementation treats `secondNum` as optional. Calling `add(1, 2, undefined)` can produce unexpected behavior.

---

## 5. Summary

| Feature | Callback Functions | Function Overloading |
|---|---|---|
| Purpose | Pass a function as an argument to be called later | Define multiple signatures for the same function name |
| Use case | Async operations, events, deferred execution | Different input types or parameter counts |
| Key rule | Callback type must match the expected signature | One implementation handles all overload signatures |
| Type check | TypeScript validates the callback's parameter and return types | TypeScript picks the matching overload at the call site |
