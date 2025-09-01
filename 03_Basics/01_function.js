// function sum(a, b) {
//     a + b;
// }

// function sum(a, b) {
//     let result = a + b;
//     return result;
//     // after this 
// }

// const result = sum(1, 2);
// console.log("Result : ", result);

function loginUserMessage(username) 
{
    return `User ${username} has logged in.`;
}

// loginUserMessage("Shreyash"); 
// console.log(loginUserMessage("Shreyash"));
// console.log(loginUserMessage());

function calculate(...num1) /// ... is a rest operator
{
    return num1
}

// console.log(calculate(1, 2, 3, 4, 5));

// Object hndling in functino
const user = {
    username: "shreyash",
    price: 199
}

function handleobject(objectname)
{
    console.log(`Username is ${objectname.username} and price is ${objectname.price}`);
}

// handleobject(user);
// handleobject({
//     username: "Sam",
//     price: 999
// })

// handling array using functions
const mynewarray = [1, 2, 4, 5, 5];

function handlearray(anyarary)
{
    return anyarary[0];
}

// console.log(handlearray(mynewarray));

addOne(1);// works
function addOne(num) {
    return num + 1;
}

addTwo(1); // does not work
const addTwo = function(num) {
    return num + 2;
}