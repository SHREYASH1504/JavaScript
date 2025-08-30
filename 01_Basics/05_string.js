const name = "shreyash"
const repoCount = 10

// console.log("Name: " + name + ", Repositories: " + repoCount);

// console.log(`Hello my name is ${name}, I have ${repoCount} repositories.`);

const gameName = new String("Valorant");
// console.log(gameName[0]);
// console.log(gameName.__proto__); // all methods of string
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 5); // slice from last
// console.log(anotherString); // Valor 

const newStringOne = "   shreyash   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove extra spaces

const url = "https://www.example.com/shreyash%20nikhare";
// console.log(url.replace("%20", "-")); // replace first occurence

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.split(" ")); // [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.' ]