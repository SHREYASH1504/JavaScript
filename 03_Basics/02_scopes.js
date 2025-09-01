let a = 300

if(true) {
    const a = 1
    let b = 2
    var c = 3
    console.log("Boxed Scope(Inner) : ", a)
}

console.log("Global Scope(Outer): ", a); 
// console.log(b); // b is not defined
// console.log(c); // 3


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);