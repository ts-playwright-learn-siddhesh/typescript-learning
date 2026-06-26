# Lecture 9 — Arrays & Tuples

**Code files:** `Lecture9-Arrays.ts` · `Lecture9-Tuples.ts`

---

## 1. TypeScript Arrays

An array is a special variable that stores multiple values. Values can be of the same type or different types. Array indexing starts from **0**.

### 1.1 Declaring an Array — Two Approaches

**Approach 1: Array Literal (`[]`)**

```typescript
let names: string[] = [];  // empty array declaration

names[0] = "John";
names[1] = "Smith";
names[2] = "Peter";
names[3] = "Scott";

// Inline initialization (equivalent)
let names: string[] = ["John", "Smith", "Peter", "Scott"];
```

**Approach 2: Generic Array Syntax (`Array<Type>`)**

```typescript
let employeeNames: Array<string> = ["John", "Smith", "Peter", "Scott"];
let employeeIds: Array<number> = [101, 102, 103, 104];
let mixedStringNumber: Array<string | number> = ["John", "Smith", 101, 102];
let mixedAny: Array<any> = [1, "John", true, null];
```

| Syntax | Example |
|--------|---------|
| `string[]` | Array of strings only |
| `number[]` | Array of numbers only |
| `Array<string \| number>` | Union type — strings or numbers |
| `Array<any>` | Any type allowed |

---

## 2. Accessing Array Elements

```typescript
console.log(names);     // [ 'John', 'Smith', 'Peter', 'Scott' ]
console.log(names[1]);  // Smith
console.log(names[4]);  // undefined  (index out of bounds)
```

Accessing an index that does not exist returns `undefined` — TypeScript does not throw an error.

---

## 3. Iterating Over an Array

### for Loop (index-based)

```typescript
for (let i = 0; i < employeeNames.length; i++) {
    console.log(employeeNames[i]);
}
```

### for...in Loop (gives indexes)

```typescript
for (let index in employeeIds) {
    console.log(employeeIds[index]);  // index is a string key
}
```

### for...of Loop (gives values directly)

```typescript
for (let value of mixedStringNumber) {
    console.log(value);
}
```

| Loop | Variable holds | Best for |
|------|---------------|----------|
| `for` | index (number) | when index is needed |
| `for...in` | index (string key) | index-based access |
| `for...of` | actual value | reading values directly |

---

## 4. Passing an Array to a Function

Arrays can be passed to functions for processing.

```typescript
function search(targetElement: number, numberArray: number[]): boolean {
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === targetElement) {
            return true;
        }
    }
    return false;
}

let numberList: number[] = [10, 20, 30, 40, 50];
console.log(search(20, numberList));   // true
console.log(search(100, numberList));  // false
```

---

## 5. Function Returning an Array

A function can take an array as input and return a modified array.

```typescript
function capitalizeWords(wordArray: string[]): string[] {
    let result: string[] = [];
    for (let i = 0; i < wordArray.length; i++) {
        result[i] = wordArray[i].toUpperCase();
    }
    return result;
}

let wordList: string[] = ["hello", "world", "typescript"];
console.log(capitalizeWords(wordList));  // [ 'HELLO', 'WORLD', 'TYPESCRIPT' ]
```

---

## 6. Tuples

A **tuple** is a fixed-length array where each position has a specific, declared type. It is used to group multiple fields of different types into a single variable.

### 6.1 Basic Tuple

```typescript
let person: [string, number] = ["Alice", 25];

console.log(person[0]);  // Alice
console.log(person[1]);  // 25
console.log(person);     // [ 'Alice', 25 ]
```

The type annotation `[string, number]` enforces that position 0 must be a `string` and position 1 must be a `number`.

### 6.2 Tuple with Multiple Fields

```typescript
let userRecord: [number, string, boolean, number, string];
userRecord = [1, "Steve", true, 20, "Admin"];

console.log(userRecord);  // [ 1, 'Steve', true, 20, 'Admin' ]
```

Declaration and initialization can be separated, unlike `const`.

---

## 7. Iterating Over a Tuple

Tuples support the same loop forms as arrays.

```typescript
// for loop
for (let i = 0; i < userRecord.length; i++) {
    console.log(userRecord[i]);
}

// for...in (indexes)
for (let index in userRecord) {
    console.log(userRecord[index]);
}

// for...of (values)
for (let fieldValue of userRecord) {
    console.log(fieldValue);
}
```

---

## 8. Tuple Array (Array of Tuples)

An array where each element is itself a tuple.

```typescript
let studentRecords: [number, string][] = [
    [101, "Smith"],
    [102, "Scott"],
    [103, "Mary"]
];

console.log(studentRecords[0]);  // [ 101, 'Smith' ]
console.log(studentRecords[1]);  // [ 102, 'Scott' ]
console.log(studentRecords[2]);  // [ 103, 'Mary' ]
```

---

## Key Takeaways

| Concept | Summary |
|---------|---------|
| Array declaration | `type[]` or `Array<type>` |
| Index start | 0 |
| Out-of-bounds access | returns `undefined` |
| Iteration | `for`, `for...in` (index), `for...of` (value) |
| Arrays in functions | can be passed as parameters and returned |
| Tuple | fixed-length, each position has a declared type |
| Tuple array | `[type, type][]` — array where each element is a tuple |
