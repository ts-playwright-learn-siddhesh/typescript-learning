# Lecture 3 — TypeScript Data Types

**Code files:** `Lecture3-DynamicTypingDemo.js` · `Lecture3-StaticTypingDemo.ts` · `Lecture3-DataTypesDemo.ts`

---

## 1. Dynamically Typed vs. Statically Typed Languages

| | JavaScript (Dynamic) | TypeScript (Static) |
|---|---|---|
| Type checking | At **runtime** | At **compile time** |
| Change variable type | Allowed | **Not allowed** |
| Error caught | Only when code runs | Before code runs |

### JavaScript — Dynamically Typed

Types are flexible; a variable can hold any type and be reassigned to a different type later.

```javascript
let age = 25;          // age is a number
age = "twenty-five";   // now age is a string — no error
console.log(age);      // Output: "twenty-five"
```

No error is raised because JavaScript allows type changes at runtime.

### TypeScript — Statically Typed

Once a variable is typed, its type is fixed at compile time.

```typescript
let data: number = 10;
data = "ten";  // Error: Type 'string' is not assignable to type 'number'
```

TypeScript catches this error **before the code ever runs**.

---

## 2. Type Safety

### JavaScript — Not Type-Safe

JavaScript allows operations between incompatible types, producing unexpected results.

```javascript
const result = "5" + 3;
console.log(result);  // Output: "53"  (3 was coerced to a string)
```

No error — but the result is not 8 as a developer might expect.

### TypeScript — Type-Safe

TypeScript prevents incompatible type operations at compile time.

```typescript
const result: number = "5" + 3;
// Error: Type 'string' is not assignable to type 'number'
```

TypeScript warns about potential bugs early, before execution.

### Code Demo — `Lecture3-DynamicTypingDemo.js`

JavaScript in action — dynamic typing and no type safety:

```javascript
let age = 30;
console.log(typeof age);  // number

age = "Thirty";           // No compiler error — JS allows this
console.log(typeof age);  // string
console.log(age);         // Thirty

// No type safety — string + number silently coerces:
// let result = "5" + 3;
// console.log(result);   // "53"
```

### Code Demo — `Lecture3-StaticTypingDemo.ts`

TypeScript in action — static typing catches errors at compile time:

```typescript
// let data: number = 10;
// data = "Ten";   // Compile-time error: Type 'string' is not assignable to type 'number'

let num1: string = "5";
let num2: number = 3;

const result: number = num1 + num2;
// Compile-time error: Type 'string' is not assignable to type 'number'
console.log(result);
```

### Key Takeaways

- **Dynamic Typing (JS):** Types are flexible — checked at runtime.
- **Static Typing (TS):** Types are fixed — checked at compile time.
- **Type Safety (TS):** Prevents wrong-type operations, reducing bugs.

---

## 3. TypeScript Types, Annotations & Type Inference

### 3.1 TypeScript Types (Data Types)

Built-in or custom categories that describe what kind of value a variable holds.

```typescript
let isDone: boolean = true;   // boolean is a TypeScript type
let score: number = 100;      // number is a TypeScript type
```

### 3.2 Type Annotations

Explicitly telling TypeScript the type of a variable using `: type`.

```typescript
let name: string = "Alice";  // `: string` is a type annotation
let age: number = 30;        // `: number` is a type annotation
```

### 3.3 Type Inference

TypeScript automatically infers the type when no annotation is provided.

```typescript
let message = "Hello";  // TypeScript infers: string
let count = 42;         // TypeScript infers: number
// message = 123;       // Error — TypeScript knows message must stay a string
```

### Annotation vs. Inference

| | Type Annotation | Type Inference |
|---|---|---|
| Who defines the type | You (manually) | TypeScript (automatically) |
| When to use | When type isn't obvious | When the initial value makes it obvious |

---

## 4. TypeScript Data Types — Overview

| Category | Types |
|---|---|
| **Primitive (Built-in)** | `number`, `string`, `boolean`, `null`, `undefined`, `any`, union, `void` |
| **Non-Primitive (Objects)** | `Array`, `Tuple`, `Class`, `Function`, `Interface` |

---

## 5. Primitive Data Types

### 5.1 Number

Represents both integers and floating-point numbers.

```typescript
let age: number = 25;
let price: number = 25.5;
let big: number = 4234234234;

console.log("Age:", age);          // Age: 25
console.log("Price:", price);      // Price: 25.5
console.log("Big Number:", big);   // Big Number: 4234234234

console.log(typeof age);           // number
```

---

### 5.2 String

Represents textual data. Three ways to write string literals:

| Syntax | Example |
|---|---|
| Single quotes | `'Hello'` |
| Double quotes | `"Hello"` |
| Backticks (template literals) | `` `Hello ${name}` `` |

```typescript
let firstName: string = "John";
let lastName: string = 'Kenedy';
let greeting: string = `Hello ${firstName} ${lastName}`;

console.log(greeting);  // Hello John Kenedy
```

---

### 5.3 Boolean

Represents `true` or `false` values. Commonly used in conditions.

```typescript
let isStudent: boolean = true;
let hasJob: boolean = false;

console.log("Is Student?", isStudent);  // Is Student? true
console.log("Has Job?", hasJob);        // Has Job? false
```

---

### 5.4 Null & Undefined

Both represent the absence of a value, but in different ways.

| Type | Meaning |
|---|---|
| `null` | An **intentional** empty value |
| `undefined` | A variable declared but **not yet assigned** |

```typescript
let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log(emptyValue);   // null
console.log(notAssigned);  // undefined

let price: number;
console.log(price);        // undefined — declared but not assigned
```

---

### 5.5 Any

A flexible type that disables TypeScript's type checks for that variable. Avoid using it unless necessary.

```typescript
let value: any = "Welcome";
console.log(typeof value);  // string

value = 100;
console.log(typeof value);  // number

value = true;
console.log(typeof value);  // boolean
```

`any` effectively turns off type safety — the variable can hold and be reassigned to any type.

---

### 5.6 Union Type

Allows a variable to hold **more than one type**. Types are combined using `|`.

```typescript
let id: number | string | boolean;

id = "ABC123";
console.log(id);  // ABC123

id = 12345;
console.log(id);  // 12345

id = true;
console.log(id);  // true
```

Use union types when a variable legitimately needs to hold multiple types.

---

### 5.7 Void

Used as the return type of a function that **does not return a value**.

```typescript
function show(): void {
    console.log("Welcome");
}

show();  // Welcome
```

Contrast with a function that **does** return a value:

```typescript
function sum(x: number, y: number): number {
    return x + y;
}

let res: number = sum(10, 20);
console.log(res);  // 30
```

| Return type | Meaning |
|---|---|
| `void` | Function returns nothing |
| `number` | Function returns a number |
| `string` | Function returns a string |

---

## 6. Non-Primitive Data Types

Non-primitive types are complex — they hold structured data rather than a single value. Covered in detail in later lectures.

| Type | Description |
|---|---|
| `Array` | Ordered list of values |
| `Tuple` | Fixed-length array with specific types per position |
| `Class` | Blueprint for creating objects |
| `Function` | Callable block of code with typed parameters and return |
| `Interface` | Contract defining the shape of an object |

---

## 7. Key Takeaways

- Primitive types (`number`, `string`, `boolean`, etc.) hold a single value.
- Non-primitive types (`Array`, `Class`, `Interface`, etc.) hold structured data.
- Avoid `any` — use proper types for better code safety.
- Union types (`|`) allow flexibility when a variable can be multiple types.
- `void` is used for functions that return nothing; specific return types (e.g., `number`) enforce what a function must return.
