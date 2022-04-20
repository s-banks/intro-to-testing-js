// helloWorld function 

/* function helloWorld() {
     return "Hello, World!";
} */


const helloWorld = function() {
    return "Hello, World!";
}

// function sayHello(val) {
//     if (val === "Alex") {
//         return "Hello, Alex!";
//     } else if (val === "Pat") {
//         return "Hello, Pat!";
//     } else{
//         return "Hello, Jane!";
//     }
// }

// function sayHello(val) {
//     if (typeof val === "undefined") {
//         return "Hello, World!";
//     } else if (val === true) {
//         return "Hello, World!";
//     } else if (val === false) {
//         return "Hello, World!";
//     } else {
//         return "Hello, " + val + "!";
//     }
// }
function sayHello(val) {
    if (typeof val !== "string") {
        return "Hello, World!"
    } else {
        return "Hello, " + val + "!";
    }
}







// function plusOne(num) {
//     if (typeof num === "number") {
//         return num + 1;
//     }
//     return 0;
// }

