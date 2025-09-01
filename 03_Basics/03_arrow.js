const user = {
    username: "shreyash",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "nikhare";
// user.welcomeMessage();

// console.log(this); // window object : undefined

// function xyz() {
//     let username = "shreyash";
//     console.log(this.username); // cannot use "this" in function
// }
// xyz(); // undefined

// const chai = () => {
//     let username = "shreyash";
//     console.log(this); 
// }
// chai(); // cannot use this in arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => (num1 + num2);

console.log(addTwo(5, 6))
