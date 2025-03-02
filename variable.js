// DataTypes.js

// 1. Declaring variables and checking their types
const firstName = "John";
const lastName = "Doe";
const country = "USA";
const city = "New York";
const age = 30;
const isMarried = false;
const year = 2024;

console.log("Types of variables:");
console.log("typeof firstName:", typeof firstName);
console.log("typeof lastName:", typeof lastName);
console.log("typeof country:", typeof country);
console.log("typeof city:", typeof city);
console.log("typeof age:", typeof age);
console.log("typeof isMarried:", typeof isMarried);
console.log("typeof year:", typeof year);

// 2. Type comparison exercises
console.log("\nType comparison exercises:");
console.log("Is type of '10' equal to 10?", typeof "10" === typeof 10);
console.log("Is parseInt('9.8') equal to 10?", Number.parseInt("9.8") === 10);

// 3. Boolean truthy/falsy values
console.log("\nTruthy values:");
console.log("true:", Boolean(true));
console.log("non-empty string:", Boolean("hello"));
console.log("non-zero number:", Boolean(42));

console.log("\nFalsy values:");
console.log("false:", Boolean(false));
console.log("empty string:", Boolean(""));
console.log("zero:", Boolean(0));

// 4. Logical operator expressions
console.log("\nLogical expressions results:");
// First predict, then confirm with console.log
console.log("4 > 3 && 10 < 12:", 4 > 3 && 10 < 12); // true && true = true
console.log("4 > 3 && 10 > 12:", 4 > 3 && 10 > 12); // true && false = false
console.log("4 > 3 || 10 < 12:", 4 > 3 || 10 < 12); // true || true = true
console.log("4 > 3 || 10 > 12:", 4 > 3 || 10 > 12); // true || false = true
console.log("!(4 > 3):", !(4 > 3)); // !true = false
console.log("!(4 < 3):", !(4 < 3)); // !false = true
console.log("!(false):", !false); // !false = true
console.log("!(4 > 3 && 10 < 12):", !(4 > 3 && 10 < 12)); // !(true) = false
console.log("!(4 > 3 && 10 > 12):", !(4 > 3 && 10 > 12)); // !(false) = true
console.log("!(4 === '4'):", !(4 === "4")); // !(false) = true

// 5. Area of triangle calculation
/*
const base = prompt("Enter base of the triangle:");
const height = prompt("Enter height of the triangle:");
const area = 0.5 * parseFloat(base) * parseFloat(height);
console.log("The area of the triangle is:", area);
*/

// 6. Age verification for driving
/*
const birthYear = prompt("Enter birth year:");
const currentYear = new Date().getFullYear();
const userAge = currentYear - parseInt(birthYear);

if (userAge >= 18) {
  console.log(`You are ${userAge}. You are old enough to drive`);
} else {
  const yearsToWait = 18 - userAge;
  console.log(`You are ${userAge}. You will be allowed to drive after ${yearsToWait} years.`);
}
*/

// 7. String manipulation exercises
console.log("\nString manipulation exercises:");
const challenge = "30 Days Of JavaScript";
console.log("Original string:", challenge);

// Convert to uppercase
console.log("Uppercase:", challenge.toUpperCase());

// Convert to lowercase
console.log("Lowercase:", challenge.toLowerCase());

// Slice out the first word
console.log("First word sliced:", challenge.slice(0, 2));

// Slice out "Days Of JavaScript"
console.log("Sliced phrase:", challenge.slice(3));

// Check if string contains "Script"
console.log("Contains 'Script'?", challenge.includes("Script"));

// Find position of first 'a'
console.log("Position of first 'a':", challenge.indexOf("a"));

// Find position of last 'a'
console.log("Position of last 'a':", challenge.lastIndexOf("a"));

// Find position of first "because"
const sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log("Position of first 'because':", sentence.indexOf("because"));

// Use startsWith()
console.log("Starts with '30 Days'?", challenge.startsWith("30 Days"));

// Use endsWith()
console.log("Ends with 'JavaScript'?", challenge.endsWith("JavaScript"));

// 8. Generate random number between 0 and 100
const randomNum = Math.floor(Math.random() * 101);
console.log("\nRandom number between 0 and 100:", randomNum);

// 9. Comparison with if/else and ternary operator
console.log("\nComparison exercises:");
const a = 15;
const b = 10;

// Using if/else
if (a > b) {
  console.log("Using if/else: a is greater than b");
} else {
  console.log("Using if/else: a is less than b");
}

// Using ternary operator
console.log(
  "Using ternary:",
  a > b ? "a is greater than b" : "a is less than b"
);

// 10. Grading system
console.log("\nGrading system:");
const scores = 85;
let grade;

if (scores >= 80 && scores <= 100) {
  grade = "A";
} else if (scores >= 70 && scores < 80) {
  grade = "B";
} else if (scores >= 60 && scores < 70) {
  grade = "C";
} else if (scores >= 50 && scores < 60) {
  grade = "D";
} else if (scores >= 0 && scores < 50) {
  grade = "F";
} else {
  grade = "Invalid score";
}

console.log(`Score: ${scores}, Grade: ${grade}`);
