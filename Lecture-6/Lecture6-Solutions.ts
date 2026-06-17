
/////  While Loop   //////


// 1. Sum of first 10 natural numbers
console.log("--- 1. Sum of First 10 Natural Numbers ---");
let sum: number = 0;
let i: number = 1;
while (i <= 10) {
    sum = sum + i;
    i = i + 1;
}
console.log(`while | sum of 1 to 10: ${sum}`);

// 2. Factorial of a given number
console.log("\n--- 2. Factorial of a Number ---");
let num: number = 5;
let factorial: number = 1;
let j: number = num;
while (j > 1) {
    factorial = factorial * j;
    j = j - 1;
}
console.log(`while | factorial of ${num}: ${factorial}`);

// 3. Reverse a given number
console.log("\n--- 3. Reverse a Number ---");
let numberToReverse: number = 12345;
let reversedNumber: number = 0;
let original3: number = numberToReverse;
while (numberToReverse > 0) {
    let digit: number = numberToReverse % 10;
    reversedNumber = reversedNumber * 10 + digit;
    numberToReverse = Math.floor(numberToReverse / 10);
}
console.log(`while | reversed ${original3}: ${reversedNumber}`);

// 4. Check if a number is prime
console.log("\n--- 4. Prime Number Check ---");
let primeNumber: number = 29;
let isPrime: boolean = true;
let k: number = 2;
while (k * k <= primeNumber) {
    if (primeNumber % k === 0) {
        isPrime = false;
        break;
    }
    k = k + 1;
}
console.log(`while | ${primeNumber} is ${isPrime ? "a prime number" : "not a prime number"}`);

// 5. Find the largest digit in a given number
console.log("\n--- 5. Largest Digit in a Number ---");
let numberToCheck: number = 987654;
let original5: number = numberToCheck;
let largestDigit: number = 0;
while (numberToCheck > 0) {
    let digit: number = numberToCheck % 10;
    if (digit > largestDigit) {
        largestDigit = digit;
    }
    numberToCheck = Math.floor(numberToCheck / 10);
}
console.log(`while | largest digit in ${original5}: ${largestDigit}`);

// 6. Check if a number is a palindrome
console.log("\n--- 6. Palindrome Check ---");
let palindromeNumber: number = 12121;
let originalNumber: number = palindromeNumber;
let reversedPalindrome: number = 0;
while (palindromeNumber > 0) {
    let digit: number = palindromeNumber % 10;
    reversedPalindrome = reversedPalindrome * 10 + digit;
    palindromeNumber = Math.floor(palindromeNumber / 10);
}
console.log(`while | ${originalNumber} is ${originalNumber === reversedPalindrome ? "a palindrome" : "not a palindrome"}`);



//////   Do-While Loop    //////


// 7. Print numbers from 1 to 10 using a do-while loop
console.log("\n--- 7. Do-While: print 1 to 10 ---");
let n7: number = 1;
do {
    console.log(`do-while | num: ${n7}`);
    n7++;
} while (n7 <= 10);

// 8. Basic arithmetic operation (mocked — no interactive input in Node)
console.log("\n--- 8. Do-While: arithmetic operation ---");
let num1: number = 10;
let num2: number = 5;
let operation: string = "+";
let result: number = 0;
let userChoice: string;

do {
    switch (operation) {
        case "+":
            result = num1 + num2;
            console.log(`do-while | ${num1} + ${num2} = ${result}`);
            break;
        case "-":
            result = num1 - num2;
            console.log(`do-while | ${num1} - ${num2} = ${result}`);
            break;
        case "*":
            result = num1 * num2;
            console.log(`do-while | ${num1} * ${num2} = ${result}`);
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`do-while | ${num1} / ${num2} = ${result}`);
            } else {
                console.log("do-while | division by zero is not allowed");
            }
            break;
        default:
            console.log("do-while | invalid operation");
    }
    userChoice = "n"; // mocked: "n" exits, "y" continues
} while (userChoice === "y");



/////////    For Loop   ///////////


// 9. Print Multiples of 5 from 5 to 50
console.log("\n--- 9. Multiples of 5 from 5 to 50 ---");
for (let i: number = 5; i <= 50; i += 5) {
    console.log(`for | multiple of 5: ${i}`);
}

// 10. Print Prime Numbers between 1 and 50
console.log("\n--- 10. Prime Numbers between 1 and 50 ---");
for (let p: number = 2; p <= 50; p++) {
    let primCheck: boolean = true;
    for (let j: number = 2; j < p; j++) {
        if (p % j === 0) {
            primCheck = false;
            break;
        }
    }
    if (primCheck) {
        console.log(`for | prime: ${p}`);
    }
}

// 11. Sum of Even Numbers between 1 and 20
console.log("\n--- 11. Sum of Even Numbers 1 to 20 ---");
let sumEven: number = 0;
for (let i: number = 2; i <= 20; i += 2) {
    sumEven += i;
}
console.log(`for | sum of even numbers (1-20): ${sumEven}`);

// 12. Sum of Odd Numbers between 1 and 20
console.log("\n--- 12. Sum of Odd Numbers 1 to 20 ---");
let sumOdd: number = 0;
for (let i: number = 1; i <= 20; i += 2) {
    sumOdd += i;
}
console.log(`for | sum of odd numbers (1-20): ${sumOdd}`);

// 13. Table of 7
console.log("\n--- 13. Multiplication Table of 7 ---");
for (let i: number = 1; i <= 10; i++) {
    console.log(`for | 7 x ${i} = ${7 * i}`);
}

// 14. Numbers Divisible by 3 and 5 from 1 to 100
console.log("\n--- 14. Numbers Divisible by 3 and 5 (1-100) ---");
for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`for | divisible by 3 and 5: ${i}`);
    }
}

// 15. Count Number of Digits in a Number
console.log("\n--- 15. Count Digits in a Number ---");
let numDigits: number = 12345;
let count: number = 0;
for (let n: number = numDigits; n > 0; n = Math.floor(n / 10)) {
    count++;
}
console.log(`for | digit count of ${numDigits}: ${count}`);

// 16. Sum of Digits in a Number
console.log("\n--- 16. Sum of Digits in a Number ---");
let sumDigits: number = 0;
for (let n: number = numDigits; n > 0; n = Math.floor(n / 10)) {
    sumDigits += n % 10;
}
console.log(`for | sum of digits of ${numDigits}: ${sumDigits}`);

// 17. Multiples of 7 between 1 and 100
console.log("\n--- 17. Multiples of 7 between 1 and 100 ---");
for (let i: number = 7; i <= 100; i += 7) {
    console.log(`for | multiple of 7: ${i}`);
}

// 18. Sum of even numbers from 1 to N
console.log("\n--- 18. Sum of Even Numbers from 1 to N (N=50) ---");
let N: number = 50;
let sumEvenN: number = 0;
for (let i: number = 2; i <= N; i += 2) {
    sumEvenN += i;
}
console.log(`for | sum of even numbers (1-${N}): ${sumEvenN}`);



//////////    Continue  //////////////


// 19. Print odd numbers from 1 to 20, skip even with continue
console.log("\n--- 19. Odd Numbers 1 to 20 (continue skips even) ---");
for (let n19 = 1; n19 <= 20; n19++) {
    if (n19 % 2 === 0) {
        continue;
    }
    console.log(`continue | odd: ${n19}`);
}

// 20. Print 1 to 30, skip multiples of 5 with continue
console.log("\n--- 20. 1 to 30, skip multiples of 5 ---");
let n20: number = 1;
while (n20 <= 30) {
    if (n20 % 5 === 0) {
        n20++;
        continue;
    }
    console.log(`continue | num: ${n20}`);
    n20++;
}



//////////  break  //////////////////


// 21. Find and print the first even number between 1 and 10
console.log("\n--- 21. First Even Number between 1 and 10 ---");
let firstEven: number = 0;
for (let i: number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        firstEven = i;
        console.log(`break | first even number: ${firstEven}`);
        break;
    }
}

// 22. Print 1 to 30, stop when number > 15
console.log("\n--- 22. Print 1 to 30, stop when > 15 ---");
for (let n: number = 1; n <= 30; n++) {
    if (n > 15) {
        break;
    }
    console.log(`break | num: ${n}`);
}
