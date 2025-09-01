// Immediately Invoked Function Expression (IIFE)

// named iife
(function() {
    console.log("This is an IIFE");
})(); // ; for stopping execution

// unnamed iife
( () => {
    console.log("This is an Arrow IIFE");
})();

// with parameter
( (name) => {
    console.log(`This is arrow IIFE with ${name}`);
})("shreyash");

// due to global scope problem (global scope variables, etc) 
// so the IIFE helps to create a new scope by removing global pollution