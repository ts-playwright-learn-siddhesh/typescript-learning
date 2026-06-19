//// Anonymous Function (Unnamed Function/Nameless Function)

/*
   An anonymous function is a function that does not have a name.
   Instead, it is assigned to a variable, which acts as its name.

   Syntax:

   let variable = function(parameters)
   {
       // function body
   };

   variable(); // Calling the function
*/


// Example 1: Anonymous function with no parameters

let msg = function(): string {
    return "Hello TypeScript";
}

console.log("\n--- 1. Anonymous Function (No Parameters) ---");
console.log("msg | return value:", msg());


// Example 2: Anonymous Function with Parameters

let multiply = function(a: number, b: number): number {
    return a * b;
}

console.log("\n--- 2. Anonymous Function (With Parameters) ---");
console.log("multiply | 10 * 20:", multiply(10, 20));
