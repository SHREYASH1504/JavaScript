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
// console.log("A ", myArr); // 0, 1, 2, 3, 4
// console.log("B ", myn1); // 1, 2, 3

const myn2 = myArr.splice(1, 4); // modifies original array
// console.log("C ", myArr); // 0
// console.log("D ", myn2); // 1, 2, 3, 4

// ************************************* PART 2 *****************************************

// const marvel_heros = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
// const dc_heros = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// spread
// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// const mix_array = [1, 2, 3, [4 , 5, 6], 7, [1, 2, [4, 5, 1]]];
// const real_mix_array = mix_array.flat(Infinity);
// console.log(real_mix_array);

// console.log(Array.isArray("Shreyash"));
// console.log(Array.from("Shreyash"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

