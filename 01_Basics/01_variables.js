const accountId = 12345; // fixed value of variable
let accountEmail = "user@example.com"; // mutable variable
var accountPassword = "securePassword123"; // mutable variable
let accountCity;

/*
    prefer not to use var 
    because of issue in block scope and functional scope 
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);
