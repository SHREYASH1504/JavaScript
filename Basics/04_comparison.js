console.log(2 > 3); // false
console.log(2 < 3); // true
console.log(2 >= 3); // false
console.log(2 <= 3); // true
console.log(2 == 3); // false
console.log(2 != 3); // true
console.log(2 !== 3); // true

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null != 0); // true
console.log(null !== 0); // true
console.log(null >= 0); // true here > operator first converts null to 0 then compare it

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined != 0); // true 
console.log(undefined !== 0); // true
console.log(undefined >= 0); // false because > operator first converts undefined to NaN then compare it

// ===
console.log("2" === 2); // false
