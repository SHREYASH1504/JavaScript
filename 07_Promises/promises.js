/* 
🔹 What is a Promise?

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
It helps you handle async code (like API calls, file reading, timers) in a cleaner way compared to callbacks.

🔹 States of a Promise

A promise has three states:

Pending → Initial state (operation not completed yet).

Fulfilled → Operation completed successfully (resolve() called).

Rejected → Operation failed (reject() called).

Once a promise is either fulfilled or rejected, it becomes settled.
*/

// 1. create promise
const promiseOne = new Promise( function(resolve, reject) {
    // do an async task
    // db task using cryptography
    setTimeout(function() {
        console.log("async task is completed");
        resolve();
    },1000)
})
// 2. consume promise
promiseOne.then(function() {
    console.log("promise consumed");
})

// another way of creating and consuming promisef
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Promise task 2");
        resolve();
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved")
})

const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Shreyash", email: "example.com"})
    }, 1000)
})
promiseTwo.then(function(user) {
    console.log(user);
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "Shreyash", password: "12345"})
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
})
promiseThree.then((user) => {
    console.log(user);
    return username
}).then((username) => {
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "Javascript", email: "dasnbvd@gmail.com"})
        }
        else {
            console.log("ERROR: JS went wrong")
        }
    }, 1000)
})
async function consumePromiseFour() {
    try {
        const response = await promiseFour;
        console.log(response);
    } catch(error) {
        console.log(error)
    }
}
consumePromiseFour()