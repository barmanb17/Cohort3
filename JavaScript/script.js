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