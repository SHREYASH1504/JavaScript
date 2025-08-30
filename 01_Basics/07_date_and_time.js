let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 1); // month start form 0
// console.log(myCreatedDate.toDateString());
let newDateTime = new Date(2025, 0, 1, 12, 2, 4); // year, month, date, hr : min : sec
// console.log(newDateTime.toString());

let customDate = new Date("01-14-2025");
// console.log(customDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // milliseconds from 1 jan 1970 to now
// console.log(customDate.getTime()); // milliseconds from 1 jan 1970 to customDate
// console.log(Math.floor(Date.now() / 1000)); // seconds from 1 jan 1970 to now


console.log(new Date().getDate());

newDate.toLocaleString('default', {
    weekday : "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})