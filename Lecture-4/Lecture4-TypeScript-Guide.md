# Lecture 4 — Operators in TypeScript

**Code files:** `Lecture4-OperatorsDemo.ts` · `Lecture4-IncrementAndDecrementOperators.ts` · `Lecture4-TernaryOperator.ts`

---

## 1. Arithmetic Operators

Perform basic mathematical operations on numbers.

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus (remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

```typescript
let a: number = 10, b: number = 20;

console.log(a + b);  // 30
console.log(b - a);  // 10
console.log(a * b);  // 200
console.log(b / a);  // 2
console.log(a % b);  // 10
console.log(5 ** 2); // 25
```

**Expected output:**
```
--- 1. Arithmetic Operators ---
a+b | addition: 30
b-a | subtraction: 10
a*b | multiplication: 200
b/a | division: 2
a%b | modulus (remainder): 10
5**2 | exponentiation: 25
```

---

## 2. Assignment Operators

Assign a value to a variable. Shorthand operators combine an arithmetic operation with assignment.

| Operator | Meaning | Example | Equivalent |
|---|---|---|---|
| `=` | Assign | `a = 5` | — |
| `+=` | Add and assign | `a += 5` | `a = a + 5` |
| `-=` | Subtract and assign | `a -= 5` | `a = a - 5` |
| `*=` | Multiply and assign | `a *= 5` | `a = a * 5` |
| `/=` | Divide and assign | `a /= 5` | `a = a / 5` |
| `%=` | Modulus and assign | `a %= 5` | `a = a % 5` |

```typescript
let a: number = 10;
let b: number = 5;

console.log(a += b);  // 15  (a = 10 + 5)
console.log(a -= b);  // 10  (a = 15 - 5)
console.log(a *= b);  // 50  (a = 10 * 5)
console.log(a /= b);  // 10  (a = 50 / 5)
console.log(a %= b);  // 0   (a = 10 % 5)
```

**Expected output:**
```
--- 2. Assignment Operators ---
a+=b | a=a+b: 15
a-=b | a=a-b: 10
a*=b | a=a*b: 50
a/=b | a=a/b: 10
a%=b | a=a%b: 0
```

---

## 3. Increment & Decrement Operators

Used to increase or decrease a value by 1.

| Operator | Name | Behaviour |
|---|---|---|
| `x++` | Post-increment | Use current value first, then add 1 |
| `++x` | Pre-increment | Add 1 first, then use new value |
| `x--` | Post-decrement | Use current value first, then subtract 1 |
| `--x` | Pre-decrement | Subtract 1 first, then use new value |

### Post-increment vs Pre-increment

```typescript
let x: number = 10;

// Post-increment: res gets 10 (old value), then x becomes 11
let res: number = x++;
console.log(res); // 10
console.log(x);   // 11

// Pre-increment: x becomes 11 first, res gets 11
let res: number = ++x;
console.log(res); // 11
console.log(x);   // 11
```

### Post-decrement vs Pre-decrement

```typescript
let x: number = 10;

// Post-decrement: res gets 10 (old value), then x becomes 9
let res: number = x--;
console.log(res); // 10
console.log(x);   // 9

// Pre-decrement: x becomes 9 first, res gets 9
let res: number = --x;
console.log(res); // 9
console.log(x);   // 9
```

**Active code in `Lecture4-IncrementAndDecrementOperators.ts`** uses `--x` (pre-decrement):

**Expected output:**
```
--- 1. Increment & Decrement ---
--x | pre-decrement: res=9, x=9
```

---

## 4. Relational / Comparison Operators

Compare two values and return `true` or `false`.

| Operator | Name | Example | Result |
|---|---|---|---|
| `>` | Greater than | `10 > 20` | `false` |
| `<` | Less than | `10 < 20` | `true` |
| `>=` | Greater than or equal | `20 >= 15` | `true` |
| `<=` | Less than or equal | `10 <= 10` | `true` |
| `==` | Equality (value only) | `10 == "10"` | `true` |
| `!=` | Not equal | `10 != 20` | `true` |
| `===` | Strict equality (value + type) | `10 === "10"` | `false` |
| `!==` | Strict inequality | `10 !== "10"` | `true` |

```typescript
let a: number = 10, b: number = 20;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a <= b);  // true
console.log(a >= b);  // false
console.log(a == b);  // false
console.log(a != b);  // true
```

**Expected output:**
```
--- 3. Relational Operators ---
a>b  | greater than: false
a<b  | less than: true
a<=b | less than or equal: true
a>=b | greater than or equal: false
a==b | equality: false
a!=b | not equal: true
```

---

## 5. `==` vs `===` — Equality vs Strict Equality

| Operator | Compares | `10 == "10"` | `10 === "10"` |
|---|---|---|---|
| `==` | Value only | `true` | — |
| `===` | Value **and** type | — | `false` |

```typescript
let num1: any = 10;    // number
let num2: any = "10";  // string

console.log(num1 == num2);   // true  — same value, type ignored
console.log(num1 === num2);  // false — same value, but different types
```

**Expected output:**
```
--- 4. == vs === (Equality vs Strict Equality) ---
num1==num2  | value only (10 == '10'): true
num1===num2 | value + type (10 === '10'): false
```

> **Prefer `===`** in TypeScript — it avoids unexpected type coercion.

---

## 6. Logical Operators

Combine multiple boolean conditions. Always return `true` or `false`.

| Operator | Name | Returns `true` when |
|---|---|---|
| `&&` | AND | **Both** conditions are true |
| `\|\|` | OR | **At least one** condition is true |
| `!` | NOT | Reverses the boolean value |

### Truth Table

| `b1` | `b2` | `b1 && b2` | `b1 \|\| b2` | `!b1` |
|---|---|---|---|---|
| true | true | true | true | false |
| true | false | false | true | false |
| false | true | false | true | true |
| false | false | false | false | true |

```typescript
let b1: boolean = true;
let b2: boolean = false;

console.log(b1 && b2);  // false
console.log(b1 || b2);  // true
console.log(!b1);       // false
console.log(!b2);       // true
```

**Expected output:**
```
--- 5. Logical Operators ---
b1 && b2 | AND (true && false): false
b1 || b2 | OR  (true || false): true
!b1      | NOT (true): false
!b2      | NOT (false): true
```

---

## 7. Mixing Logical & Relational Operators

Logical operators work with relational expressions (which produce booleans).

```typescript
console.log(20 > 10 && 10 > 5);  // true  — both sub-expressions are true
console.log(10 < 20 || 5 > 10);  // true  — first sub-expression is true
```

**Expected output:**
```
--- 6. Mixing Logical & Relational Operators ---
20>10 && 10>5 | AND with relational: true
10<20 || 5>10 | OR  with relational: true
```

---

## 8. Ternary Operator (Conditional Operator)

A one-line shortcut for `if-else`.

**Syntax:**
```
condition ? value_if_true : value_if_false
```

```typescript
// Example 1 — find the larger of two numbers
let a: number = 100, b: number = 200;
let res: number = (a > b) ? a : b;
console.log(res);  // 200

// Example 2 — adult or minor check
let personAge: number = 30;
let result: string = (personAge >= 18) ? "Adult" : "Minor";
console.log(result);  // Adult
```

**Expected output:**
```
--- 1. Ternary Operator ---
personAge>=18 ? 'Adult' : 'Minor' | result: Adult
```

---

## 9. Concept Reinforcement — Quiz Explanations

Quiz questions from the PDF converted to concept explanations.

---

### `typeof null` returns `"object"` in JavaScript

This is a long-standing quirk of JavaScript — `null` is a primitive, but `typeof null` returns `"object"` (not `"null"`).

```typescript
console.log(typeof null);  // "object"
```

---

### `==` is NOT an assignment operator

`=` assigns a value. `==` compares values. `===` compares value and type. `==` is a **comparison** operator, not an assignment operator.

```typescript
let x = 5;        // = assigns
console.log(x == 5);   // true  — == compares value
console.log(x === 5);  // true  — === compares value and type
```

---

### `x++` — Post-increment evaluates before incrementing

```typescript
let x: number = 5;
let result = x++;       // result gets 5 (old value), then x becomes 6
console.log(result);    // 5
console.log(x);         // 6
```

---

### `x += 5` is shorthand for `x = x + 5`

```typescript
let x: number = 10;
x += 5;
console.log(x);  // 15
```

---

### `===` checks both value and type

```typescript
console.log(5 === "5");   // false — same value, different types
console.log(5 === 5);     // true  — same value, same type
```

---

### `true && false` returns `false`

AND (`&&`) requires **both** sides to be true. One false side makes the whole expression false.

```typescript
console.log(true && false);  // false
console.log(true && true);   // true
```

---

### `||` returns `true` if at least one condition is true

```typescript
console.log(false || true);   // true
console.log(false || false);  // false
```

---

### Correct array declaration in TypeScript

```typescript
let numbers: number[] = [1, 2, 3];  // correct
```

---

### A tuple is a fixed-length array with specific types per position

```typescript
let person: [string, number] = ["Alice", 30];  // correct tuple
```

---

### A function returning a number

```typescript
function getNumber(): number {
    return 5;
}
```

`void` means no return value — using `void` with a `return 5` would be an error.
