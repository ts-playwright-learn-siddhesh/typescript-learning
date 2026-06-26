# Lecture 10 — Array Methods

**Code files:** `Lecture10-ArrayMethods.ts`

---

## 1. length (Property)

`length` is a property, not a method — no parentheses needed.

```typescript
let numberList: number[] = [1, 2, 3, 4, 5];
console.log(numberList.length);  // 5
```

---

## 2. push()

Adds one or more elements to the **end** of an array. Modifies the original array.

```typescript
numberList.push(6, 7);
console.log(numberList);  // [1, 2, 3, 4, 5, 6, 7]
```

---

## 3. pop()

Removes and returns the **last** element. Modifies the original array.

```typescript
let fruitList: string[] = ["apple", "banana", "orange", "mango"];
let removedLastFruit = fruitList.pop();
console.log(fruitList);          // ['apple', 'banana', 'orange']
console.log(removedLastFruit);   // mango
```

---

## 4. shift()

Removes and returns the **first** element. Modifies the original array.

```typescript
let removedFirstNumber = numberList.shift();
console.log(numberList);          // [2, 3, 4, 5, 6, 7]
console.log(removedFirstNumber);  // 1
```

---

## 5. unshift()

Adds one or more elements to the **beginning** of an array. Modifies the original array.

```typescript
fruitList.unshift("kiwi", "pear");
console.log(fruitList);  // ['kiwi', 'pear', 'apple', 'banana', 'orange']
```

---

## 6. concat()

Combines two or more arrays and returns a **new array**. Does not modify the originals.

```typescript
let combinedNumbers = numberList.concat([8, 9], [10]);
console.log(combinedNumbers);  // [2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

## 7. slice()

Extracts a section of an array and returns a **new array**. Does not modify the original.

- `startIndex` — inclusive
- `endIndex` — **exclusive** (element at endIndex is not included)

```typescript
let fruitList: string[] = ["kiwi", "pear", "apple", "banana", "orange"];
let selectedFruits = fruitList.slice(2, 5);
console.log(selectedFruits);  // ['apple', 'banana', 'orange']
```

---

## 8. splice()

Adds or removes elements **at any position**. Modifies the original array.

**Syntax:** `array.splice(startIndex, deleteCount, item1, item2, ...)`

| deleteCount | Effect |
|-------------|--------|
| > 0 | removes that many elements from startIndex |
| 0 | removes nothing; items are inserted at startIndex |
| > 0 and items provided | removes elements and inserts new ones |

```typescript
// Remove only
let removedFruits = fruitList.splice(1, 2);
// fruitList: ['kiwi', 'banana', 'orange']
// removedFruits: ['pear', 'apple']

// Add without removing
fruitList.splice(1, 0, "pineapple", "grape");
// fruitList: ['kiwi', 'pineapple', 'grape', 'banana', 'orange']

// Remove and add
fruitList.splice(1, 2, "mango", "cherry");
// fruitList: ['kiwi', 'mango', 'cherry', 'banana', 'orange']
```

---

## 9. indexOf()

Returns the **index of the first occurrence** of a value. Returns `-1` if not found.

**Syntax:** `array.indexOf(value, fromIndex?)`

- `fromIndex` (optional) — start searching from this index

```typescript
fruitList.indexOf("banana");     // 3
fruitList.indexOf("papaya");     // -1
fruitList.indexOf("banana", 2);  // 3 (search starts from index 2)
```

---

## 10. includes()

Returns `true` if the element exists, `false` otherwise.

**Syntax:** `array.includes(value, fromIndex?)`

```typescript
fruitList.includes("apple");   // false
fruitList.includes("banana");  // true
```

---

## 11. toString()

Converts the array to a **comma-separated string**.

```typescript
let numberList: number[] = [2, 3, 4, 5, 6, 7];
numberList.toString();  // '2,3,4,5,6,7'

let letterArray: string[] = ["w", "e", "l", "c", "o", "m", "e"];
letterArray.toString();  // 'w,e,l,c,o,m,e'
```

---

## 12. forEach()

Executes a function once for **each element**. Does not return a new array.

**Syntax:** `array.forEach((element, index, array) => { ... })`

```typescript
let fruitNames: string[] = ["apple", "banana", "cherry"];
fruitNames.forEach((fruitName, position) => {
    console.log(`position ${position + 1}: ${fruitName}`);
});
// position 1: apple
// position 2: banana
// position 3: cherry
```

---

## 13. map()

Returns a **new array** with each element transformed by the function. Original is unchanged.

**Syntax:** `array.map((element, index, array) => { ... })`

```typescript
let baseNumbers: number[] = [1, 2, 3];
let squaredNumbers = baseNumbers.map(number => number * number);
console.log(squaredNumbers);  // [1, 4, 9]
```

---

## 14. filter()

Returns a **new array** with only the elements that pass the test. Original is unchanged.

**Syntax:** `array.filter((element, index, array) => { ... })`

```typescript
let mixedNumbers: number[] = [1, 2, 3, 4];
let evenNumbers = mixedNumbers.filter(number => number % 2 === 0);
console.log(evenNumbers);  // [2, 4]
```

---

## 15. reduce()

Reduces the array to a **single value** by applying a function that accumulates a result.

**Syntax:** `array.reduce((accumulator, element, index, array) => { ... }, initialValue)`

```typescript
let valuesToSum: number[] = [1, 2, 3];
let total = valuesToSum.reduce((runningTotal, currentValue) => runningTotal + currentValue, 0);
console.log(total);  // 6
```

- `runningTotal` starts at `initialValue` (0)
- Each iteration adds `currentValue` to `runningTotal`

---

## 16. some()

Returns `true` if **at least one** element passes the test.

**Syntax:** `array.some((element, index, array) => { ... })`

```typescript
let positiveNumbers: number[] = [1, 2, 3];
let hasNegative = positiveNumbers.some(number => number < 0);
console.log(hasNegative);  // false
```

---

## 17. every()

Returns `true` if **all** elements pass the test.

**Syntax:** `array.every((element, index, array) => { ... })`

```typescript
let evenOnlyNumbers: number[] = [2, 4, 6];
let allEven = evenOnlyNumbers.every(number => number % 2 === 0);
console.log(allEven);  // true
```

---

## Summary

| Method | Modifies original | Returns |
|--------|------------------|---------|
| `push()` | Yes | new length |
| `pop()` | Yes | removed element |
| `shift()` | Yes | removed element |
| `unshift()` | Yes | new length |
| `concat()` | No | new array |
| `slice()` | No | new array |
| `splice()` | Yes | array of removed elements |
| `indexOf()` | No | index or -1 |
| `includes()` | No | boolean |
| `toString()` | No | string |
| `forEach()` | No | undefined |
| `map()` | No | new array |
| `filter()` | No | new array |
| `reduce()` | No | single value |
| `some()` | No | boolean |
| `every()` | No | boolean |
