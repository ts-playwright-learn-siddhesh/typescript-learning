# Lecture 7 — TypeScript Functions

**Code files:** `Lecture7-NamedFunctions.ts` · `Lecture7-AnonymousFunctions.ts` · `Lecture7-ArrowFunctions.ts`

---

## 1. Named Functions

A named function is declared with the `function` keyword and has a specific name that can be used to call it anywhere in the code.

**Syntax**
```typescript
function functionName(parameter: type): returnType {
    // block of code
}

functionName(); // calling / invoking the function
```

### 1.1 No Parameters, No Return Type

```typescript
function display(): void {
    console.log("Welcome to typescript");
}

display();
```

**Output**
```
Welcome to typescript
```

---

### 1.2 Parameters and Return Type

```typescript
function addNumbers(x: number, y: number): number {
    return x + y;
}

console.log(addNumbers(2, 3));  // 5
console.log(addNumbers(1));     // Compiler Error: Expected 2 arguments, but got 1.
```

**Output**
```
5
```

TypeScript enforces the exact number of arguments. Passing too few or too many causes a compiler error.

---

### 1.3 Rest Parameters — Same Type

Rest parameters allow a function to accept any number of arguments of the same type, collected into an array.

```typescript
function addNumbers(...nums: number[]) {
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}

addNumbers(1, 2);
addNumbers(1, 2, 3);
addNumbers(10, 20, 30, 40, 50);
```

**Output**
```
sum of the numbers 3
sum of the numbers 6
sum of the numbers 150
```

---

### 1.4 Rest Parameters — Multiple Types

Rest parameters can also accept a union type to allow mixed argument types.

```typescript
function findElements(...elements: (number | string)[]): number {
    return elements.length;
}

console.log(findElements(3, "john", 2, 1, "scott")); // 5
console.log(findElements(10, 20, 30, 40, 50, 60, 70)); // 7
console.log(findElements("abc", "xyz")); // 2
```

**Output**
```
5
7
2
```

---

### 1.5 Optional Parameters

Add `?` after a parameter name to make it optional. Inside the function, check for `undefined` before using it.

```typescript
function displayDetails(id: number, name: string, mailId?: string): void {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mailId !== undefined) {
        console.log("Email:", mailId);
    }
}

displayDetails(123, "Scott", "scot@gmail.com");
displayDetails(123, "Scott");
```

**Output**
```
ID: 123
Name: Scott
Email: scot@gmail.com
ID: 123
Name: Scott
```

---

### 1.6 Default Parameters

A parameter can have a default value that is used when no argument is passed for it.

```typescript
function calculateDiscount(price: number, rate: number = 0.50): void {
    let discount: number = price * rate;
    console.log("Discount Amount:", discount);
}

calculateDiscount(1000, 0.30);
calculateDiscount(1000);
```

**Output**
```
Discount Amount: 300
Discount Amount: 500
```

---

## 2. Anonymous Functions

An anonymous function has no name. It is assigned to a variable, which is then used to call it.

**Syntax**
```typescript
let variable = function(parameters): returnType {
    // function body
};

variable(); // Calling the function
```

### 2.1 No Parameters

```typescript
let msg = function(): string {
    return "Hello TypeScript";
}

console.log(msg());
```

**Output**
```
Hello TypeScript
```

---

### 2.2 With Parameters

```typescript
let multiply = function(a: number, b: number): number {
    return a * b;
}

console.log(multiply(10, 20));
```

**Output**
```
200
```

**Key points:**
- The function is stored in a variable (`multiply`)
- It has no function name of its own
- It behaves like a regular named function

---

## 3. Arrow Functions (Lambda Functions)

Arrow functions provide a shorter syntax for writing functions using the `=>` (fat arrow / goes-to operator). They are also called **lambda functions**.

**Three parts of an arrow function:**
1. **Parameters** — optionally typed
2. **Fat arrow** `=>` — the "goes to" operator
3. **Statements** — the function body

**Syntax**
```typescript
let variable = (parameters): returnType => {
    // block of code
};

variable();
```

### 3.1 No Parameters, No Return Type

```typescript
let greet = (): void => {
    console.log("Hello TypeScript");
}

greet();
```

**Output**
```
Hello TypeScript
```

---

### 3.2 Parameters and Return Type

```typescript
let add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(10, 20));
```

**Output**
```
30
```

---

### 3.3 Implicit Return (Single-Line)

When the function body is a single expression, braces `{}` and the `return` keyword can be omitted.

```typescript
let add = (a: number, b: number): number => a + b;
let multiply = (a: number, b: number): number => a * b;

console.log(add(10, 20));
console.log(multiply(10, 20));
```

**Output**
```
30
200
```

---

### 3.4 Optional Parameters

```typescript
let displayDetails = (id: number, name: string, mailId?: string): void => {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mailId !== undefined) {
        console.log("Email:", mailId);
    }
}

displayDetails(123, "Scott", "scot@gmail.com");
displayDetails(123, "Scott");
```

**Output**
```
ID: 123
Name: Scott
Email: scot@gmail.com
ID: 123
Name: Scott
```

---

### 3.5 Default Parameters

```typescript
let calculateDiscount = (price: number, rate: number = 0.50): void => {
    let discount: number = price * rate;
    console.log("Discount Amount:", discount);
}

calculateDiscount(1000, 0.30);
calculateDiscount(1000);
```

**Output**
```
Discount Amount: 300
Discount Amount: 500
```

---

### 3.6 Rest Parameters

```typescript
let findElements = (...elements: (number | string)[]): number => {
    return elements.length;
}

console.log(findElements(3, "john", 2, 1, "scott")); // 5
console.log(findElements(10, 20, 30, 40, 50, 60, 70)); // 7
console.log(findElements("abc", "xyz")); // 2
```

**Output**
```
5
7
2
```

---

## 4. Summary

| Type | Syntax | Key Features |
|---|---|---|
| Named Function | `function sum(a, b) { return a + b; }` | Has a name, reusable, traditional syntax |
| Anonymous Function | `let multiply = function(x, y) { return x * y; };` | No name, stored in a variable |
| Arrow Function | `let square = (x) => x * x;` | Shorter syntax, uses `=>` |

**Parameter features** available in all three function types:

| Feature | Syntax | Behaviour |
|---|---|---|
| Rest parameter | `...nums: number[]` | Accepts unlimited arguments of that type |
| Optional parameter | `mailId?: string` | Caller may omit it; value is `undefined` if not passed |
| Default parameter | `rate: number = 0.50` | Uses the default when caller omits the argument |

---

## 5. Quiz Concepts

### Q: What is the correct syntax for a named function?
```typescript
function sum(a: number, b: number): number { return a + b; }
```
The `function` keyword, a name, typed parameters, a return type annotation, and a body are all required.

---

### Q: What does `=>` mean in TypeScript?
The `=>` symbol (fat arrow / goes-to operator) is used to define an **arrow function**. It separates the parameter list from the function body.

---

### Q: What happens when a function does not specify a return type?
TypeScript **automatically infers** the return type from the returned value. No compiler error is thrown — TypeScript uses type inference.

---

### Q: How do you write a multi-line arrow function?
Use curly braces `{}` and an explicit `return` statement:
```typescript
let multiply = (a: number, b: number): number => {
    return a * b;
};
```
Single-line arrow functions can omit `{}` and `return`:
```typescript
let multiply = (a: number, b: number): number => a * b;
```

---

### Q: What is the output of `let add = (a: number, b: number) => a + b; console.log(add(5, 10));`?
```
15
```
The implicit return adds `a + b` = 5 + 10 = **15**.

---

### Q: Can an arrow function be assigned to a variable?
Yes. Arrow functions are expressions and can be assigned to variables just like anonymous functions.

---

### Q: What is a key advantage of arrow functions?
Arrow functions provide a **shorter syntax** and automatically bind `this` to the surrounding context (important in class-based code).
