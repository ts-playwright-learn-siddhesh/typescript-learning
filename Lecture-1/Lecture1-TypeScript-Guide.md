# Lecture 1 — Getting Started with TypeScript

---

## 1. What is TypeScript?

TypeScript is a **superset of JavaScript** — it adds extra features (primarily static types) on top of JavaScript.

Key facts:
- TypeScript files use the `.ts` extension (instead of `.js`)
- TypeScript **compiles into regular JavaScript**, so it runs anywhere JavaScript runs (browsers, Node.js, etc.)
- All valid JavaScript code is also valid TypeScript — you can migrate gradually

---

## 2. How TypeScript Works

```
Your Code (.ts)  →  TypeScript Compiler (tsc)  →  JavaScript (.js)  →  Runs in browser / Node.js
```

1. You write code in a `.ts` file
2. The TypeScript compiler (`tsc`) converts it to a `.js` file
3. The `.js` file runs in any JavaScript environment

---

## 3. TypeScript vs. JavaScript

| Feature | JavaScript | TypeScript |
|---|---|---|
| File extension | `.js` | `.ts` |
| Type checking | No (runtime errors) | Yes (catches errors before running) |
| Compiles to | Runs directly | JavaScript (`.js`) |
| Valid JS in TS? | — | Yes, all JS is valid TS |

**Key insight:** TypeScript adds *optional* features. It never breaks existing JavaScript code.

---

## 4. Why Use TypeScript?

- **Catches mistakes early** — errors are found at compile time, before the code runs
- **Easier to manage large projects** — types act as documentation and guardrails
- **Works with existing JavaScript** — you can adopt TypeScript incrementally

---

## 5. Environment Setup

You need three tools to work with TypeScript:

| Tool | Purpose |
|---|---|
| **Node.js** | Runs the TypeScript compiler |
| **TypeScript Compiler (`tsc`)** | Converts `.ts` files to `.js` |
| **TSX** | Runs TypeScript directly without compiling |
| **VS Code** | Recommended code editor |

---

### Step 1 — Install Node.js

1. Download from: `https://nodejs.org/en/download/`
2. Install the correct version for your OS (version 18+ recommended)
3. Verify installation:

```bash
node -v
# or
node --version
# Expected output: v22.12.0 (or similar)
```

> `npm` is bundled with Node.js — you do not need to install it separately.

**Windows — Set Environment Variable (if node is not recognized):**
1. Open System Properties → Advanced → Environment Variables
2. Under "System Variables", find `Path` and add the Node.js install folder (e.g., `C:\Program Files\nodejs\`)

---

### Step 2 — Install the TypeScript Compiler

Open a terminal (Command Prompt / PowerShell on Windows, Terminal on Mac/Linux) and run:

```bash
npm install -g typescript
```

Verify the installation:

```bash
tsc -v
# or
tsc --version
# Expected output: Version 5.8.2 (or similar)
```

**Windows Fix — "tsc is not recognized" error:**
1. Navigate to `C:\Users\<your-username>\AppData\Roaming\npm`
2. Copy that path
3. Add it to your **System Environment Variables** under `Path`

**Windows Fix — Execution Policies error when running `tsc`:**

Run this command in your terminal:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

---

### Step 3 — Install TSX (Run TypeScript Without Compiling)

TSX lets you execute `.ts` files directly — no compile step needed.

```bash
npm install -g tsx
```

---

### Step 4 — Install VS Code

1. Download from: `https://code.visualstudio.com/`
2. Choose the version for your OS (Windows / Mac / Linux)
3. Run the installer and follow the steps
4. Open VS Code — you are ready to code

---

## 6. Tool Summary

```
Node.js              →  Runs TypeScript compiler and JavaScript
TypeScript (tsc)     →  Converts .ts files to .js
TSX                  →  Runs .ts files directly (no compile step)
VS Code              →  Best editor for TypeScript development
```

---

## 7. Your First TypeScript Program

### Setup Steps

1. **Create a project folder** — e.g., `TSDemo`
2. **Open the folder in VS Code** — File > Open Folder > Select your folder
3. **Create a TypeScript file** — create `app.ts` (or `Lecture1-Lecture1-FirstDemo.ts`) inside the folder
4. **Open the terminal in VS Code** — press `Ctrl + ~` or go to Terminal > New Terminal

### The Code (`Lecture1-FirstDemo.ts`)

```typescript
console.log("Welcome to TypeScript")
```

This is the first TypeScript program. It uses `console.log` — identical to JavaScript — which confirms that all JavaScript syntax is valid TypeScript.

---

### Method A — Compile then Run

**Step 1:** Compile the TypeScript file to JavaScript:

```bash
tsc Lecture1-FirstDemo.ts
```

This generates `Lecture1-FirstDemo.js` in the same folder.

**Step 2:** Run the generated JavaScript file:

```bash
node Lecture1-FirstDemo.js
```

**Output:**
```
Welcome to TypeScript
```

---

### Method B — Run Directly with TSX (Recommended)

If `tsx` is installed, skip the compile step entirely:

```bash
tsx Lecture1-FirstDemo.ts
```

**Output:**
```
Welcome to TypeScript
```

---

## 8. Compile vs. Run Directly — At a Glance

| Approach | Command | Generates `.js` file? |
|---|---|---|
| Compile then run | `tsc app.ts` then `node app.js` | Yes |
| Run directly (TSX) | `tsx app.ts` | No |

---

## 9. Key Terms Recap

| Term | Meaning |
|---|---|
| **TypeScript** | Superset of JavaScript with optional type features |
| **Superset** | Includes all of JavaScript plus additional capabilities |
| **Compiler** | A tool that converts one language into another (`tsc`) |
| **`.ts` file** | TypeScript source file |
| **`.js` file** | JavaScript output file (what the browser/Node.js actually runs) |
| **Node.js** | JavaScript runtime — lets you run JS/TS outside the browser |
| **npm** | Node Package Manager — used to install tools like `tsc` and `tsx` |
| **TSX** | Tool to execute TypeScript files directly without compiling |
| **`-g` flag** | Global install — makes the tool available from any folder |
