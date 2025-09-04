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

// another way of creating and consuming promise
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Promise task 2");
        resolve();
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved")
})

