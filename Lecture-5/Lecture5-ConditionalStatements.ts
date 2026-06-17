//if statement

/* Syntax:
        if(condition)
        {
        //statements
        }
 */

// Example1 : If age is greater than or equal to 18, the message "You are eligible to vote." will be printed.

let age: number = 20;

console.log("\n--- 1. if Statement ---");
if (age >= 18) {
    console.log("age>=18 | eligible to vote: You are eligible to vote.");
}

//if else statement

/* Syntax:
    if(condition)
        {
            Statements;
        }
    else
        {
            Statements
        }

*/

//Example 2:  Print number is even is odd

let num:number=10;

console.log("\n--- 2. if-else Statement ---");
if(num%2 ==0)
{
    console.log(`num%2==0 | even check (${num}): ${num} Even number`);
}
else
{
    console.log(`num%2!=0 | odd check (${num}): ${num} Odd number`);
}

//Nested if-else Statement
/* Syntax:
if(condition 1)
{
    statements;
}
else if(condition 2)
{
    statements;
}
else
{
    statements;
}
    */


//Example3: Depending on the marks, display appropriate grade.
let marks:number=50;

console.log("\n--- 3. if-else if — Grade Check ---");
if(marks>=90 && marks <=100)    //Condition 1
{
    console.log(`marks=${marks} | grade: Grade A`);
}
else if(marks>=75 && marks<90)   // condition 2
{
    console.log(`marks=${marks} | grade: Grade B`);
}
else if(marks>=60 && marks<75)  // condition 3
{
    console.log(`marks=${marks} | grade: Grade C`);
}
else
{
    console.log(`marks=${marks} | grade: Grade D`);
}

//Example 4: Browser selection

let browser:string ="chrome";

console.log("\n--- 4. if-else if — Browser Selection ---");
if(browser==="chrome")
{
    console.log(`browser='${browser}' | result: Browser is chrome`);
}
else if(browser ==="firefox")
{
    console.log(`browser='${browser}' | result: Browser is firefox`);
}
else if(browser ==="safari")
{
    console.log(`browser='${browser}' | result: Browser is safari`);
}
else
{
    console.log(`browser='${browser}' | result: Other browser`);
}

//switch-case Statement
/* Syntax:

  switch ( expression ) {
   case value1:
       // statement 1
       break;
   case value2:
       // statement 2
       break;
   case valueN:
       // statement N
       break;
   default:
       //
    }
*/

//Example 5 : Depending on the value of day, print the corresponding day of the week.

let day: number = 3;

console.log("\n--- 5. switch-case — Day of the Week ---");
switch (day) {
    case 1:
        console.log("day=1 | result: Monday");
        break;
    case 2:
        console.log("day=2 | result: Tuesday");
        break;
    case 3:
        console.log(`day=${day} | result: Wednesday`);
        break;
    case 4:
        console.log("day=4 | result: Thursday");
        break;
    case 5:
        console.log("day=5 | result: Friday");
        break;
    case 6:
        console.log("day=6 | result: Saturday");
        break;
    case 7:
        console.log("day=7 | result: Sunday");
        break;
    default:
        console.log(`day=${day} | result: Invalid day`);
}

// 	Example 6: The switch statement can also include an expression
let x:number=20, y:number=5;

console.log("\n--- 6. switch-case — Expression ---");
switch(x-y)      // expression
{
 case 0: console.log("x-y=0  | result: Result Zero");
         break;
 case 5: console.log("x-y=5  | result: Result is Five");
            break;
 case 10: console.log("x-y=10 | result: Result is Ten");
        break;
 default: console.log(`x-y=${x-y} | result: Result is something else`);
}
