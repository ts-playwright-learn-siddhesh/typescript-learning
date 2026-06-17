# Lecture 2 — TypeScript Variables & Comments

**Code files:** `Lecture2-Comments.ts` · `Lecture2-VariablesDemo.ts`

---

## 1. Comments

Comments are lines ignored by the compiler — used to explain or temporarily disable code.

### Single-line Comment

```typescript
// This is a single-line comment
// console.log("welcome")   ← disabled code
```

| OS | Shortcut |
|---|---|
| Windows / Linux | `Ctrl + /` |
| Mac | `Cmd + /` |

### Multi-line (Block) Comment

```typescript
/*
console.log("welcome")
console.log("welcome")
console.log("welcome")
*/
```

| OS | Shortcut |
|---|---|
| Windows / Linux | `Shift + Alt + A` |
| Mac | `Shift + Option + A` |

---

## 2. Variables

A **variable** is a container that holds data.

Variables in TypeScript (and JavaScript) are declared using one of three keywords: `var`, `let`, or `const`.

**Syntax:**
```typescript
keyword variableName : datatype = value
//      ↑ required    ↑ optional  ↑ required for const
```

---

## 3. The Three Keywords — Overview

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block | Block |
| Value assignment at declaration | Optional | Optional | **Mandatory** |
| Re-declaration | Allowed | Not allowed | Not allowed |
| Re-assignment | Allowed | Allowed | **Not allowed** |
| Hoisting | Yes (as `undefined`) | Yes (not initialized) | Yes (not initialized) |
| Best use | **Avoid** | Changing values | Constants |

---

## 4. Scope — Function Scope vs. Block Scope

### `var` — Function Scope

A `var` variable is accessible anywhere inside the **function** it was declared in, even outside the `if`/`for` block where it was written.

```typescript
function varScope() {
    if (true) {
        var msg = "Hello, World!";
    }
    console.log(msg); // Works! (function-scoped)
}
varScope();
```

### `let` and `const` — Block Scope

A `let` or `const` variable is only accessible inside the `{}` block where it was declared.

```typescript
function blockScope() {
    if (true) {
        let msg = "Hello, let!";
        const greet = "Hello, const!";
        console.log(msg);   // Allowed — within the same block
        console.log(greet); // Allowed — within the same block
    }
    // console.log(msg);   // Error: msg is not defined
    // console.log(greet); // Error: greet is not defined
}
blockScope();
```

### Scope Difference Side-by-Side

```typescript
function scopeDiff() {
    if (true) {
        var num1 = 10;
        let num2 = 20;
        const num3 = 30;
        console.log(num1); // Works (function-scoped)
        console.log(num2); // Works (block-scoped)
        console.log(num3); // Works (block-scoped)
    }
    // console.log(num1); // Works  — var leaks out of the block
    // console.log(num2); // Error  — let is block-scoped
    // console.log(num3); // Error  — const is block-scoped
}
scopeDiff();
```

---

## 5. Value Assignment at Declaration

- `var` and `let` — assigning a value at declaration is **optional** (defaults to `undefined`)
- `const` — assigning a value at declaration is **mandatory**

```typescript
var x;
console.log(x); // undefined

let y;
console.log(y); // undefined

// const z;     // Error: Missing initializer in const declaration
const z = 60;   // Works
console.log(z); // 60
```

---

## 6. Re-declaration

Re-declaration means declaring the same variable name again in the same scope.

- `var` — **allowed** (can cause accidental overwriting bugs)
- `let` — **not allowed**
- `const` — **not allowed**

```typescript
// var allows re-declaration
var city = "New York";
var city = "Los Angeles"; // Allowed — but can cause bugs!
console.log(city);        // Los Angeles

// let does NOT allow re-declaration
let country = "USA";
// let country = "Canada"; // Error: Cannot redeclare block-scoped variable 'country'
console.log(country);

// const does NOT allow re-declaration
const planet = "Earth";
// const planet = "Mars"; // Error: Cannot redeclare block-scoped variable 'planet'
console.log(planet);
```

---

## 7. Re-assignment (Reinitialization)

Re-assignment means changing the value of an already-declared variable.

- `var` — **allowed**
- `let` — **allowed**
- `const` — **not allowed**

```typescript
// var allows re-assignment
var age = 25;
age = 30;          // Allowed
console.log(age);  // 30

// let allows re-assignment
let score = 50;
score = 60;          // Allowed
console.log(score);  // 60

// const does NOT allow re-assignment
const pi = 3.14;
// pi = 3.14159;   // Error: Assignment to constant variable
console.log(pi);
```

---

## 8. Hoisting

Hoisting means TypeScript/JavaScript moves variable **declarations** to the top of their scope before code runs.

- `var` — hoisted and initialized as `undefined` (no error, but value is `undefined`)
- `let` and `const` — hoisted but **not initialized** (accessing before declaration throws a `ReferenceError`)

```typescript
// var — hoisted as undefined
// console.log(a); // undefined (if uncommented, no crash)
var a = 10;
console.log(a); // 10

// let — hoisted but not initialized
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// const — hoisted but not initialized
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // 30
```

---

## 9. Keyword Summary

### `var`
1. Function-scoped — accessible anywhere inside the declaring function
2. Can be re-declared and re-assigned within the same scope
3. Value assignment at declaration is optional
4. **Avoid** — function scope can cause unexpected bugs

### `let`
1. Block-scoped — limited to the enclosing `{}` block
2. Cannot be re-declared in the same scope, but can be re-assigned
3. Value assignment at declaration is optional
4. **Use** when the variable's value needs to change

### `const`
1. Block-scoped — limited to the enclosing `{}` block
2. Cannot be re-declared or re-assigned in the same scope
3. Value assignment at declaration is **mandatory**
4. **Use** for values that should never change

---

## 10. Best Practices

- **Avoid `var`** — function scope leads to unexpected bugs
- **Use `let`** — when the variable value needs to change later
- **Use `const`** — for values that should remain constant

---

## 11. Concept Reinforcement

Each concept below is drawn directly from the quiz questions — explained with examples and expected output.

---

### `var` is Function-Scoped, Not Block-Scoped

`var` is accessible anywhere inside the function it belongs to, even outside the `if`/`for` block it was written in. It does **not** have block scope, module scope, or class scope.

```typescript
function example() {
    if (true) {
        var message = "Hello!";
    }
    console.log(message); // Hello! — var leaks out of the if block
}
example();
```

---

### Only `var` Allows Re-declaration

Among the three keywords, only `var` allows you to declare the same variable name more than once in the same scope. `let` and `const` both throw an error if you try.

```typescript
var city = "New York";
var city = "Los Angeles"; // Allowed with var
console.log(city);        // Output: Los Angeles
```

The last assigned value wins — the earlier one is silently overwritten. This is why `var` is avoided in modern TypeScript.

---

### `var` Re-declaration Output

When `var` is re-declared with a new value, the final value is what gets printed — no error is thrown.

```typescript
var x = 10;
var x = 20;
console.log(x); // Output: 20
```

---

### `let` is Block-Scoped

`let` is limited to the `{}` block where it is declared. It is not function-scoped and not globally scoped — it is strictly block-scoped.

```typescript
function example() {
    if (true) {
        let message = "Hello, let!";
        console.log(message); // Hello, let! — accessible inside the block
    }
    // console.log(message); // Error: message is not defined outside the block
}
example();
```

---

### `let` Allows Re-assignment

A `let` variable can have its value changed after declaration. Re-assignment (changing the value) is different from re-declaration (using the `let` keyword again).

```typescript
let y = 5;
y = 10;           // Re-assignment — allowed
console.log(y);   // Output: 10
```

---

### `let` Does NOT Allow Re-declaration

Declaring a `let` variable with the same name again in the same scope throws a compile-time error.

```typescript
let a = 100;
// let a = 200; // Error: Cannot redeclare block-scoped variable 'a'
console.log(a);
```

---

### `const` Does NOT Allow Re-assignment

A `const` variable is fixed — once a value is assigned, it cannot be changed. Attempting to re-assign throws an error.

```typescript
const pi = 3.14;
// pi = 3.14159; // Error: Assignment to constant variable
console.log(pi); // Output: 3.14
```

---

### `const` Requires a Value at Declaration

Unlike `var` and `let`, a `const` variable must be given a value at the same time it is declared. Declaring it without a value is a compile-time error.

```typescript
// const num;   // Error: Missing initializer in const declaration
const num = 30; // Works — value assigned at declaration
console.log(num); // Output: 30
```

Attempting to assign the value after declaration also fails:

```typescript
const num;   // Error: Missing initializer in const declaration
num = 30;    // This line is never even reached
console.log(num);
```

---

### `const` is Block-Scoped (Both Block and Narrower)

`const` follows the same block-scoping rules as `let`. It is accessible within the block it is declared in, and in any nested inner blocks — but not outside.

```typescript
function example() {
    if (true) {
        const greeting = "Hello!";
        console.log(greeting); // Hello! — accessible inside the block
    }
    // console.log(greeting); // Error: greeting is not defined
}
example();
```

---

### Use `const` to Prevent Re-assignment

When you want to ensure a variable's value never changes, `const` is the right keyword. `let` still allows re-assignment, so it does not provide that guarantee.

```typescript
const maxRetries = 3;
// maxRetries = 5; // Error — cannot change a const
console.log(maxRetries); // Output: 3
```

---

### Re-assigning `const` Always Throws an Error

There is no silent failure — attempting to change a `const` value always throws a compile-time error. The original value is not preserved silently; execution stops at the point of the illegal assignment.

```typescript
const speed = 100;
// speed = 200; // Error: Assignment to constant variable
```

---

### The One TRUE Statement About All Three Keywords

To consolidate all three:

| Statement | True or False |
|---|---|
| `var` is block-scoped | **False** — `var` is function-scoped |
| `let` can be re-declared in the same scope | **False** — re-declaration throws an error |
| `const` must be initialized at declaration | **True** |
| `let` cannot be re-assigned | **False** — `let` allows re-assignment |

```typescript
// var — function-scoped, re-declaration allowed, re-assignment allowed
var a = 1;
var a = 2;   // No error
a = 3;       // No error

// let — block-scoped, re-declaration NOT allowed, re-assignment allowed
let b = 1;
// let b = 2; // Error
b = 3;        // Allowed

// const — block-scoped, re-declaration NOT allowed, re-assignment NOT allowed, must initialize
const c = 1;
// const c = 2; // Error
// c = 3;       // Error
```
