const score = 400;
// console.log(score);

const number = new Number(100); // Create a Number object
// console.log(number);

// console.log(number.toString().length); // Convert to string and get length
// console.log(number.toFixed(2)); // Format number to 2 decimal places

const anotherNumber = 123.456;
// console.log(anotherNumber.toPrecision(3)); // Format number to 3 significant digits

const hundereds = 1000000;
// console.log(hundereds.toLocaleString("en-IN")); // Format number with commas for Indian locale

// *********************************** MATHS ********************************************************//

// console.log(Math); // Math object
// console.log(Math.PI); // Value of PI = 3.141592653589793
// console.log(Math.sqrt(16)); // Square root of 16 = 4
// console.log(Math.pow(2, 3)); // 2 raised to the power of 3 = 8
// console.log(Math.abs(-4)); // Absolute value of -4 = 4
// console.log(Math.ceil(4.2)); // Round up to nearest integer = 5
// console.log(Math.floor(4.8)); // Round down to nearest integer = 4
// console.log(Math.round(4.5)); // Round to nearest integer = 5
// console.log(Math.min(3, 1, 4, 2)); // Minimum value = 1
// console.log(Math.max(3, 1, 4, 2)); // Maximum value = 4

// console.log((Math.random() * 10) + 1); // Random number between 1 and 10
// console.log(Math.floor((Math.random() * 10) + 1)); // Random integer between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
