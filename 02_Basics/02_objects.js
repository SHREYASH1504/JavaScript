// objects can be declared by two types : literals and constructors(Object.create)
// singleton

// object literals

const mySym = Symbol("key1");

const JsUser = {
    "full name" : "Shreyash Nikhare",
    name: "Shreyash",
    [mySym]: "value",
    age : 22,
    location: "India",
    email: "shreyash@google.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser."full name"); // cannot access
// console.log(JsUser["full name"]); // use this syntax for multi-word keys

// console.log(JsUser[mySym]);

// change value of object
    // JsUser.age = 23;

// freeze object -> cannot change value later
// Object.freeze(JsUser);

// console.log(JsUser);

// function of object
JsUser.greeting = function() {
    console.log("Hello JsUsers");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// *********************** Object declaration through Constructors ***************************

const TinderUser = new Object();

TinderUser.name = "Shreyash Nikhare";
TinderUser.age = 22;
TinderUser.location = "Goa";
TinderUser.email = "shreyashnikhare@chatgpt.com";

// console.log(TinderUser);

// what is singleton?
// A singleton is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance.

const regularUser = {
    email: "regularuser@example.com",
    fullname: {
        userfullname: {
            firstname : "shreyash",
            lastname: "nikhare"
        }
    }
}

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2) // merge two objects {}: target, others: source
const obj3 = {...obj1, ...obj2};
// console.log(obj3); 

// object in array
const users = [
    {
        email: "user1@example.com",
        name: "User One"
    },
    {
        email: "user2@example.com",
        name: "User Two"
    },
    {
        email: "user3@example.com",
        name: "User Three"
    }
]

// console.log(users[1].email);

// console.log(TinderUser);
// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));

// console.log(TinderUser.hasOwnProperty("age")); // true
// console.log(TinderUser.hasOwnProperty("gender")); // false


//Object Destructure
const course = {
    courseName: "JavaScript Basics",
    price: "999",
    courseInstructor: "Code and Chai"
}

const {courseInstructor : instructor} = course;

// console.log(courseInstructor);
console.log(instructor);
