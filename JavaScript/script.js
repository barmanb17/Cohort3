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

// function greet() {
//     console.log("Hello World");
// }

// //Create a function add(a, b) that returns the sum.

// function add(a, b){
//     return (a+b);
// }
// console.log(add(1,2));

// //Write a function to calculate the square of a number.

// function square(a){
//     return a*a;
// }

// console.log(square(2));

// //Create a function that checks whether a number is even or odd.

// function check(a){
//     return(a % 2 == 0 ? "Even" : "Odd")
// }

// console.log(check(2));

// //Write a function that converts Celsius to Fahrenheit.

// function convert(a){
//     return a * 1.8 + 32;
// }

// console.log(convert(2));

// //Create a function with default parameter "Guest".

// function Hotel(a = "Guest"){
//     return a;
// }
// console.log(Hotel()); 

// //Write a function that returns the greater of two numbers.

// function greater(a, b){
//     return a > b ? a : b;

// }
// console.log(greater(2,3));

// //Create a function to calculate area of rectangle.

// function area(w, l){
//     return w * l;
// }
// console.log(area(2, 4));

// //Write a function that returns "Adult" if age ≥ 18 else "Minor".

// function age(a){
//     return a >=18 ? "Adult" : "Minor";
// }
// console.log(age(19));

// //Create a function to reverse a string.

// function reverse(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverse("Honey"));

// //Write a function expression for multiplication.

// let multiply = function(a, b){
//     return a * b;
// }
// console.log(multiply(2,3));


//OOPS
//construction function- har word ka pehla word CAPITAL

// function CreateSongs() {
//     this.songName = "Cry for me",
//     this.albumName = "Hurry up tomorrow",
//     this.singer = 'Weekend',
//     this.duration = 3.5,
//     this.isLiked = true
// }

// let song1 = new CreateSongs();
// console.log(song1)

// function CreateBook(bookName, author, pages) {
//     this.bookName = bookName;
//     this.authorName = author;
//     this.page = pages
//     this.getFrontPage= function(){
//         console.log('Book Name:', this.bookName)
//         console.log('Author Name:', this.authorName)
//         console.log('Pages:',this.page)

//     }
// }

// let book1 = new CreateBook("talha anjum", "pakistan", 343)
// console.log(book1)
// console.log(book1.getFrontPage())


// function MakeStudents(fname, lname, contact, isVerified){
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//     this.isVerified = isVerified;
//     this.showprofile = function(){
//         console.log("Student Name:", this.fname, this.lname);
//         console.log("Contact:", this.contact);
//         console.log("Verifiedj?:", this.isVerified);
//     }
// }

// let student1 = new MakeStudents("abhishek", "msihra", 9999999999, true );
// // console.log(student1)

// console.log(student1.showprofile());








//using class for es6

// class MakeStudents {
//     constructor(fname, lname, contact, isVerified) {
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//         this.isVerified = isVerified;

//     }

// }

// class Teacher extends MakeStudents{
//     constructor(fname, lname, contact, isVerified, accessTeacherPanel){
//         super(fname, lname, contact, isVerified)
//     }
//     addCourse(){
//         console.log('New Courses Added');
//     }
//     removeAllCourses(){
//         console.log('All courses Removed');
//     }
// }



// let showprofile = function () {
//     if (this.isVerified) {
//         console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`)

//     } else {
//         console.log("User not found");
//     }
// }

// MakeStudents.prototype.showprofile = showprofile;

// let s1 = new MakeStudents("Bijoy", "Barman", 8783737489, true);

// let a1 = new Teacher("Rita", "Barman", 8987987323, true, "Teacher")

// s1.showprofile()
// a1.removeAllCourses()





///prototyping inheritance


// let dada = {
//     fname: 'gr',
//     lname: 'dfd',
//     land: '100acres',
// }

// let papa = {
//     fname: 'Rakesh',
//     lname: 'Barman',
//     shop: 'Vegetable Shop',
// }

// let beta = {
//     fname: 'Bijoy',
//     lname: 'Barman',

// }

// beta.__proto__ = papa;
// papa.__proto__ = dada;

// console.log(beta.land);






// function showThis(){
//     console.log(this);
// }
// showThis()

// 'use strict'
// function showThis(){
//     console.log(this)
// }
// showThis()


// const user = {
//     name: "Bijoy",
//     print: function hello(){
//         console.log("Hello", this.name)
//     }
// }

// user.print()

// let namePrint = user.print;

// namePrint();



// const person = {
//     name: "Bijoy",
//     greet() {
//         console.log(this.name);
//     }
// };

// const x = person.greet;

// person.greet();
// x();



// const user  = {
//     name: "Bijoy",
//     greet(){
//         console.log("hello", this.name);
//     }
// }
// user.greet();
// const greetUser = user.greet;
// greetUser();




// const user = {
//     name: "Rahul",
//     regular(){
//         console.log(this.name);
//     },
//     arrow: ()=>{
//         console.log(this.name);
//     }
// }

// user.regular();
// user.arrow();


// const user = {
//     name: "Rahul",
//     hobbies: ["Coding", "Gaming", "Reading"],
//     userHobbies(){
//         this.hobbies.forEach((hobby)=>{
//             console.log(`${this.name} likes ${hobby}`)
//         })
//     }
// };

// user.userHobbies()
















//private fields

// class BankAccount {
//     #balance =0;



//     deposit(amount){
//         if(amount > 0 ) {
//             this.#balance +=amount;
//             console.log(`Deopsited ${amount}`);
//         } else {
//             console.log("Deposit amount must be greater than 0")
//         }
//     }

//     withdraw(amount){
//         if(amount <= 0){
//             console.log("Withdrawal amount must be greater than 0")
//         } else if (amount > this.#balance){
//             console.log("Insufficient Balance")
//         } else {
//             this.#balance -= amount;
//             console.log(`Withdrawn ${amount}`)
//         }
//     }

//     getBalance(){
//         return this.#balance;
//     }
// }

// const account = new BankAccount();

// account.deposit(0)
// account.withdraw(200)

// console.log("Current Balance:", account.getBalance());


// class Test {
//     #marks = 0;

//     setMarks(mark){
//         if(mark > 0) {
//             this.#marks +=mark;
//             console.log("marks stored:", this.#marks)
//         } else {
//             console.log("Input a valid mark")
//         }
//     }

//     getMarks(){
//         return this.#marks
//     }
// }

// const marks = new Test();

// marks.setMarks(30)
// console.log(marks.getMarks())

















//promises


// async function dataLa() {
//     let response = await fetch('https://picsum.photos/v2/list')
//     console.log(response)
// }

// dataLa();


// let p1 = new Promise(function(resolve, reject){

//     console.log("Promise pending hain....");

//     let result = true;

//     setTimeout(() => {
//         if(result){
//             console.log('value true')
//             resolve()
//         } else {
//             console.log('value false')
//             reject()
//         }
//     }, 3000);
// })


// p1.then(function(){
//     console.log('Promise is fulfilled')
// })

// .catch(function(){
//     console.log('Promise is rejected')
// })

// .finally(function(){
//     console.log('Promise end')
// })



// function orderFood(){

//     let myOrder = new Promise(function(resolve, reject){

//         console.log("your order is coming");

//         let orderStatus = true;


//         setTimeout(() => {
//             if(orderStatus){
//                 console.log('Delivery partner is arrived')
//                 resolve()
//             } else {
//                 console.log('condition false hain')
//                 reject()
//             }
//         }, 1000);
//     })

//     myOrder.then(function(){
//         console.log("make payment")

//         let paymentStatus = false;

//         setTimeout(() => {
//             if(paymentStatus){
//                 console.log("Payment done");

//             } else {
//                 console.log("Payment failed")

//             }
//         }, 1000);
//     })
//     .then(function(){
//         console.log('Enjoy your food')
//     })

//     .catch(function(){
//         console.log("Order failed, make a complaint ")
//     })

// }

// orderFood()





















//oops pracitce

// function introduce(){
//     console.log(this.name);
// }

// const person = {
//     name: "Ritik"
// }

// introduce.call(person);
// introduce()


// function introduce(city, country) {
//     console.log(`${this.name} from ${city} ${country}`);
// }

// const person = {
//     name: "Ritik"
// }

// introduce.apply(person, ["Bhopal", "india"])


// const user = {
//     name: "Ritik",
//     greet(){
//         console.log(this.name);
//     }
// };

// // user.greet()

// const fn = user.greet.bind(user);
// fn()


// const animal = {
//     eats: true,
// };

// const dog = Object.create(animal)
// console.log(dog.eats)



// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function(){
//     console.log(`Hello ${this.name}`)
// }

// let person1 = new Person("Bijoy");

// person1.greet()


// function Person(name) {
//     this.name = name;
// }


// Person.prototype.greet = function(){
//     console.log(`Hello ${this.name}`)
// }

// let person1 = new Person("Anurag");

// person1(this.name)


// class Student{
//     constructor(name, marks){
//         this.name = name;
//         this.marks = marks;

//     }

//     getGrade(){
//         if(this.marks >= 90){
//             return "A"
//         } else if(this.marks >= 75) {
//             return "B"
//         } else if(this.marks >= 60) {
//             return "C"
//         } else {
//             return "Failed"
//         }
//     }
// }

// const student1 = new Student("Bijoy", 98)
// console.log(student1.getGrade())



// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;

//     }
//     work() {
//         console.log(`${this.name} is working and his salary is ${this.salary}`)
//     }
// }

// class Developer extends Employee {
//     constructor(name, salary) {
//         super(name, salary)
//     }
//     code(){
//         console.log(`${this.name} is coding`)
//     }
// }

// const dev = new Developer("Bijoy", 20000)

// dev.work()
// dev.code()




// class BankAccount {
//     #balance = 0;
//     constructor(amount){
//         this.#balance = amount
//     }
//     deposit(amount){
//         if(amount >= 0){
//             this.#balance += amount
//             console.log("deposited")
//         }
//     }
//     withdraw(amount){
//         if(amount>0){
//             this.#balance -= amount
//         } else {
//             console.log('Insufficient balance')
//         }
//     }
//     getBalance(){
//         return this.#balance;
//     }
// }

// let a1 = new BankAccount(2000)
// a1.deposit(400)
// a1.withdraw(10880)

// console.log(a1.getBalance()) 















//async practice

// function greet(name,surname){
//     console.log("Hello", name,surname)
// }

// setTimeout(greet, 2000, 'ritik','rajput')


// const timer = setTimeout(() => {
//     console.log('print')
    
// }, 5000);

// clearTimeout(timer)



let count = 5
 const int = setInterval(() => {
    console.log(count)
    count--
    if(count == 0){
    clearInterval(int)

        console.log("done")
    }


}, 1000);






