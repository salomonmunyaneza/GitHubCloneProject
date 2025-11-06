//alert("Welcome to JavaScript Basics!");
//let age = 25
//let year = 2024

//console.log("age is", age);
//console.log("year is", year);

//const point = 100;
/* for the point = 150; This will cause an error
 because 'point' is a constant*/
//console.log('point is', point);
//var score = 170;
//console.log("score is", score);
/*different variables can be consoled together 
when they are same data types*/
//console.log(age, year, point, score);
//constants and variables do not change value on next console//
//const min = 78
//min = 90;
//console.log("min is", min);
var time = 50
console.log("time is", time);
//strings
console.log("Hello World");

//data types in JavaScript
//string
console.log("hello world");
let email = 'munyaneza@gmail.com'
console.log("email is", email);
//string concatentation
let firstName = 'munyaneza';
let lastName = 'joel';
let fullName = firstName + ' ' + lastName;
console.log("full name is ", fullName);
// extractin the characters in the string
console.log(fullName[0]);
//string length
console.log(fullName.length);
//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
//the methods do not alter the original string
console.log(result, fullName);
let index = email.indexOf('@');
console.log("index of @ is", index);

let results = email.lastIndexOf('n');
console.log("the  position of last n is ", results);

//slice method
let portion = email.slice(0, 14);
console.log("portion is", portion);
//slicing using the substring method
let part = email.substring(0, 7);
console.log("part is", part);
//we can use the replace method to replace a part of the string
let newEmail = email.replace('munyaneza', 'salomon');
console.log("new email is", newEmail);

//numbers data types
let radius = 12
const pi = 3.14
console.log(radius, pi);
//mathematical operations +, -, *, /, **
console.log(10 / 2);
let remainder = 12 % 5;
console.log("remainder is", remainder);

let cirleArea = pi * radius ** 2;
console.log("circle area is", cirleArea);
//order of operations - BiDMAS
let exercise = 5 * (10 - 3) ** 2;
console.log("exercise is", exercise);
//incrementing numbers
let likes = 10;
likes = likes + 1;
console.log("likes are", likes);// and als++ act as +1
likes++;
console.log("likes after ++ are", likes);
//the decrementing numbers
likes--;
console.log("likes after -- are", likes);

likes += 10;
console.log("likes after +=10 are", likes);
likes -= 5;
likes /= 2
console.log("likes after -=5 and /=2 are", likes);
//NaN - Not a Number results from invalid mathematical operations

console.log("hello" - 3);
console.log(8 / "hello");
//numbers in the string
let viewers = ' the blog has ' + likes + " likes"
console.log(viewers);
