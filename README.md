# TypeScript for Playwright — Learning Workspace

A structured TypeScript learning workspace based on the **TypeScript for Playwright** YouTube course. Each lecture includes a written guide and hands-on code demos.

---

## Course Source

**YouTube Playlist:** [TypeScript for Playwright](https://www.youtube.com/watch?v=pRYZCwXbwKc&list=PLUDwpEzHYYLtIgMPPQS7_GMzNDK4kxJ7p)

---

## Lectures

| Lecture | Topic | Guide | Code Files |
|---|---|---|---|
| 1 | Getting Started with TypeScript | `Lecture1-TypeScript-Guide.md` | `Lecture1-FirstDemo.ts` |
| 2 | Variables & Comments | `Lecture2-TypeScript-Guide.md` | `Lecture2-Comments.ts` · `Lecture2-VariablesDemo.ts` |
| 3 | Data Types | `Lecture3-TypeScript-Guide.md` | `Lecture3-DataTypesDemo.ts` · `Lecture3-DynamicTypingDemo.js` · `Lecture3-StaticTypingDemo.ts` |
| 4 | Operators | `Lecture4-TypeScript-Guide.md` | `Lecture4-OperatorsDemo.ts` · `Lecture4-IncrementAndDecrementOperators.ts` · `Lecture4-TernaryOperator.ts` |
| 5 | Conditional Statements | `Lecture5-TypeScript-Guide.md` | `Lecture5-ConditionalStatements.ts` · `Lecture5-Solutions.ts` |
| 6 | Looping Statements | `Lecture6-TypeScript-Guide.md` | `Lecture6-WhileLoop.ts` · `Lecture6-DoWhileLoop.ts` · `Lecture6-ForLoop.ts` · `Lecture6-BreakAndContinue.ts` · `Lecture6-Solutions.ts` |

---

## What You'll Learn

### Lecture 1 — Getting Started with TypeScript
- What TypeScript is and how it differs from JavaScript
- How the TypeScript compiler (`tsc`) works: `.ts` → `.js` → Node.js
- Environment setup: Node.js, TypeScript compiler, tsx, VS Code
- Two ways to run TypeScript: compile then run (`tsc` + `node`) or run directly (`tsx`)

### Lecture 2 — Variables & Comments
- Single-line (`//`) and multi-line (`/* */`) comments
- `var`, `let`, and `const` — differences in scope, hoisting, re-declaration, and re-assignment
- Why `var` should be avoided and when to use `let` vs `const`

### Lecture 3 — Data Types
- Dynamic typing (JavaScript) vs static typing (TypeScript)
- Type annotations (explicit) and type inference (automatic)
- Primitive types: `number`, `string`, `boolean`, `null`, `undefined`, `any`, union (`|`), `void`
- Non-primitive types overview: `Array`, `Tuple`, `Class`, `Function`, `Interface`

### Lecture 4 — Operators
- Arithmetic, assignment, relational, and logical operators
- `==` (value only) vs `===` (value + type) — strict equality
- Increment/decrement: pre (`++x`) vs post (`x++`) behaviour
- Ternary operator as a shorthand for `if-else`

### Lecture 5 — Conditional Statements
- `if`, `if-else`, `if-else if` for range-based and multi-condition logic
- `switch-case` with `break` and fall-through for fixed-value matching
- 15 lab programs: voting eligibility, grade check, even/odd, browser detection, day of week, season mapping

### Lecture 6 — Looping Statements
- `while` — condition checked before execution
- `do-while` — body executes at least once
- `for` — best when number of iterations is known
- `break` — exit a loop early; `continue` — skip current iteration
- 22 lab programs: sums, factorials, prime numbers, palindromes, digit operations, multiplication tables

---

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v18+)
- TypeScript compiler: `npm install -g typescript`
- tsx (run `.ts` files directly): `npm install -g tsx`
- [VS Code](https://code.visualstudio.com/)

---

## Running the Code

**Compile then run:**
```bash
tsc Lecture1-FirstDemo.ts
node Lecture1-FirstDemo.js
```

**Run directly (recommended):**
```bash
tsx Lecture1-FirstDemo.ts
```
