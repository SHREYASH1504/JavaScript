let score = "123"

console.log(typeof score); // both are same
console.log(typeof(score));

let valueInNumber = Number(score); // convert string to number
console.log(typeof valueInNumber);

// bug of Javascript 
let ans = "123abc"
let ansInNumber = Number(ans);
console.log(typeof ansInNumber);
console.log(ansInNumber); // NaN => Not a Number

// if variable value cannot be converted to number hen it will return NaN
// NaN is of type number

// 1 => true, 0 => false
// "" => false, "shreyash" => true

// ************************* OPERATIONS **************************

console.log("2" + 3); // 23 (string)
console.log(Number("2") + 3); // 5 (number)
console.log(2 + 3); // 5 (number)

console.log(2 - 3); // -1 (number)
console.log("2" - 3); // -1 (number)
console.log("2" - "3"); // -1 (number)

console.log(2 * 3); // 6 (number)
console.log("2" * "3"); // 6 (number)
console.log("2" * 3); // 6 (number)
console.log("2" * "shreyash"); // NaN (number)
console.log("shreyash" * 3); // NaN (number)
console.log("shreyash" * "hello"); // NaN (number)

console.log(2 ** 3); // 8 (number) => 2 power 3

console.log(2 / 3); // 0.6666666666666666 (number)

console.log(2 % 3); // 2 (number) => remainder

console.log(2 + 2 + "3"); // 43 (string)
console.log("3" + 2 + 2); // 322 (string)
