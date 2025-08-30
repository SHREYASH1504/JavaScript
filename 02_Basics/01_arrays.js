const myArr = [0, 1, 2, 3, 4];
const newArr = new Array(1, 2, 3, 4);

// console.log(myArr[0]); // 0th index value

// ARRAY METHODS
// console.log(myArr.length); // 5
// console.log(myArr.push(5)); // Adds 5 to the end
// console.log(myArr.pop()); // Removes last element
// console.log(myArr.shift()); // Removes first element
// console.log(myArr.unshift(0)); // Adds 0 to the beginning

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

const newArr2 = myArr.join();
// console.log(newArr2);

// slice and splice
const myn1 = myArr.slice(1, 4); // does not modify original array
console.log("A ", myArr); // 0, 1, 2, 3, 4
console.log("B ", myn1); // 1, 2, 3

const myn2 = myArr.splice(1, 4); // modifies original array
console.log("C ", myArr); // 0
console.log("D ", myn2); // 1, 2, 3, 4
