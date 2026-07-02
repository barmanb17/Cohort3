// Build by tim burners c  at netscape company to build a browser mosiac browser.
// Mocha -> Live Script -> Java Script

// console.log("This is normal text")
// console.warn("This is warning")
// console.error("This is error")
// console.table(["Harsh", "Adarsh", "Bioy"])

// Datatypes
// Primititve- 
// Number(10, 20.5 , -10, 9999), 
// String,("h", "Sarthak", "343.3" (^%$#)) 
// Boolean,(true, false) 
// undefined,(variable is declared but not assigned value) 
// null,(the value is empty, var a, console(a)=null) 
// BigInt,(big than 2 the power 53 eg: var a=10n console.log(a)) 
// Symbol(to create unique values)
// Non-Primitive (Reference)- Array, Objects, Function


// var ans = confirm("Are you a man?")
// console.log(ans)

// var user = prompt("Your name:")
// console.log(user) //type of user is String

//practice

// console.log(typeof function() {})
// console.log(typeof {}) //object
// console.log(typeof []) //object (arrays are object)

// console.log(typeof null) //object (famous bug in JS)

// let str = '42'
// let num = Number(str);
// console.log( typeof num)

// let n = 100;
// let s = String(n);
// console.log(typeof s);

// let val = "hello";
// let b = Boolean(val);
// console.log(typeof b);


// let num1 = Number(prompt("Enter first number"));
// let operator = prompt("Enter operator (+, -, *, /):");
// let num2 = Number(prompt("Enter second number:"));


// let result;
// if(operator === "+") result = num1 + num2;
// else if(operator === "-") result = num1 - num2;
// else if(operator === "*") result = num1 * num2;
// else if(operator === "/") result = num2 !== 0 ? num1 / num2: "Cannot divide by zero";
// else result = "Invalid operator";

// console.log("Result:", result);


// for (let i = 1; i <= 50; i++){
//     if(i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
// }

// // let age = Number(prompt("Enter your age:"));
// // if (age>= 18) console.log("Adult");

// // for (let i = 1; i<=10; i++){
// //     if(i ===9) break;
// //     console.log(i);
// // }

// // for (let i = 1; i<=5; i++){
// //     if(i === 5) break;
// //     console.log(i);
// // }


// let person = { name: "Aman", age: 25};
// for(let key in person){
//     console.log(key, ":", person[key]);
// }

// let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let words = {name:"Aman"}
// for (let char in words) {
//     console.log(char, words[char]);
// }

// let x = 10;
// do {
//     x++;
//     console.log(x);
    
// } while (x < 5);

// let count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// }

// let day = "Mwe";

// switch(day){
//     case "Monday":
//         console.log("Start of the week");
//         break;
//     case "Friday":
//         console.log("Weekend Coming");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("Its weekend");
//         break;
//     default:
//         console.log("Midweek day");
// }

// var a = 0;
// while(a<5){
//     console.log(a);
//     a++;

// }


// var num = Number(prompt("Enter Your Number:"));

// var a = 1;

// while(a<=10){
//     console.log(num, "X", a, "=", num*a);
//     a++
// }


// function party(name, age) {
    
//     if(age>=18){
//         console.log("You are most welcome in party...", name)
//     } else {
//         console.log("You cant enter in party...", name)
//     }
// }
// party("bijoy", 12)

// var c0 = (b,c,d)=> console.log("Hello gguys", b) //for multiple arguements
// var c1 = a => console.log("hello guys", a); //for one arguement

// c1("bjoy")

// //iife- immediately invoked function expression

// (function(){
//     console.log('This is IIFE')
// })()


//push- last mein add
//pop-last main remove
//unshift-first main add
//shift- first main remove

//difference in execution- push/and pop runs fast than unshift and shift 

//for each 
//  var brr = [10, 20, 30]

//  brr.forEach(function(elem, idx){
//     console.log(elem, idx);
//  })


// var arr = [10, 20, 30, 40]

// var ans =arr.reduce(function(acc, val){
//     return acc+val;
// },0)
// console.log(ans)

//objects






//js phase 2 questions

//Create a function named greet that prints "Hello World".

function greet() {
    console.log("Hello World");
}

//Create a function add(a, b) that returns the sum.

function add(a, b){
    return (a+b);
}
console.log(add(1,2));

//Write a function to calculate the square of a number.

function square(a){
    return a*a;
}

console.log(square(2));

//Create a function that checks whether a number is even or odd.

function check(a){
    return(a % 2 == 0 ? "Even" : "Odd")
}

console.log(check(2));

//Write a function that converts Celsius to Fahrenheit.

function convert(a){
    return a * 1.8 + 32;
}

console.log(convert(2));

//Create a function with default parameter "Guest".

function Hotel(a = "Guest"){
    return a;
}
console.log(Hotel()); 

//Write a function that returns the greater of two numbers.

function greater(a, b){
    return a > b ? a : b;

}
console.log(greater(2,3));

//Create a function to calculate area of rectangle.

function area(w, l){
    return w * l;
}
console.log(area(2, 4));

//Write a function that returns "Adult" if age ≥ 18 else "Minor".

function age(a){
    return a >=18 ? "Adult" : "Minor";
}
console.log(age(19));

//Create a function to reverse a string.

function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse("Honey"));

//Write a function expression for multiplication.

let multiply = function(a, b){
    return a * b;
}
console.log(multiply(2,3));