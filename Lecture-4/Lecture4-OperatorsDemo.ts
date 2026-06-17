let a:number=10, b:number=20;

//Arithmetic operations

console.log("\n--- 1. Arithmetic Operators ---")
console.log("a+b | addition: " + (a+b));
console.log("b-a | subtraction: " + (b-a));
console.log("a*b | multiplication: " + (a*b));
console.log("b/a | division: " + (b/a));
console.log("a%b | modulus (remainder): " + (a%b));
console.log("5**2 | exponentiation: " + (5**2));

console.log("\n--- 2. Assignment Operators ---")
//Assignment Operators =

a=10;
b=5;

//a+=b;     //a=a+b;
//console.log(a)

console.log("a+=b | a=a+b: " + (a+=b));   // a=a+b   --->15
console.log("a-=b | a=a-b: " + (a-=b));   // a=a-b   --->10
console.log("a*=b | a=a*b: " + (a*=b));   // a=a*b   ----> 50
console.log("a/=b | a=a/b: " + (a/=b));   // a=a/b  ---->10
console.log("a%=b | a=a%b: " + (a%=b));  // a=a%b  ----> 0

//Relational/Comparison Operators
//Returns boolean- true/ false
//   >  <  >=  <=  ==  !=  ===(Strict equality)

console.log("\n--- 3. Relational Operators ---")
a=10;
b=20

console.log("a>b  | greater than: " + (a>b));  //false
console.log("a<b  | less than: " + (a<b)); // true
console.log("a<=b | less than or equal: " + (a<=b)); //true
console.log("a>=b | greater than or equal: " + (a>=b)); //false
console.log("a==b | equality: " + (a==b)); //false
console.log("a!=b | not equal: " + (a!=b)); //true

//Difference between ==(equaltiy)       ===(strict equality)

console.log("\n--- 4. == vs === (Equality vs Strict Equality) ---")
let num1:any=10;   //number type
let num2:any="10"   // string

console.log("num1==num2  | value only (10 == '10'): " + (num1==num2)); //true ( only comapres values)
console.log("num1===num2 | value + type (10 === '10'): " + (num1===num2)); //false(comapres the values & type)

//Logical Operators   &&  ||  !
// returns true/false (boolean)
// works between boolean variables

// b1      b2       &&           ||          !b1
//--------------------------------------------------
//true      true    true        true          false
//true      false   false       true
//false     true    false       true           true
// false    false   false       false

console.log("\n--- 5. Logical Operators ---")

let b1:boolean=true;
let b2:boolean=false;

console.log("b1 && b2 | AND (true && false): " + (b1 && b2));  //false
console.log("b1 || b2 | OR  (true || false): " + (b1 || b2));  ///true
console.log("!b1      | NOT (true): " + (!b1));  //false
console.log("!b2      | NOT (false): " + (!b2));  //true

//combination of logical & Relational operators

console.log("\n--- 6. Mixing Logical & Relational Operators ---")

console.log("20>10 && 10>5 | AND with relational: " + (20>10 && 10>5)); // true
console.log("10<20 || 5>10 | OR  with relational: " + (10<20 || 5>10));  //true
