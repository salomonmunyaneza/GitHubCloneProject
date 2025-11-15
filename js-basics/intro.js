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
alert("welcome Joel to this course, step by step you will master JavaScript!");
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
//tempate strings
const title = 'Best reads of 2024';
const author = 'Munyaneza Joel';
const views = 3000;
//concatentation ways
let awards = "the blog called " + title + " by " + author + " has " + views + " views";
console.log(awards);

//template string way
awards = `the author called ${author} is the ${title} with ${views} views`;
console.log(awards);
//creating html string
let html = `<h2>${title}</h2>
<p>by ${author}</p>
<span> This blog has ${views} views </span>`;
console.log(html);

//array are created with the use iof the square brackets []
let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
//if we want to use one of the array element
console.log(ninjas[1]);
//if we want to replace one of the array element
ninjas[1] = 'ken';
console.log(ninjas[1]);
let age = [20, 25, 30, 35];
console.log(age[2]);
//array accept different data types in the single array
let random = ['hello', 45, true];
console.log(random);
//array length
console.log(ninjas.length);
//joining the array elements
console.log(ninjas.join(', '));
//getting the index of an element in the array
//array methods
result = ninjas.indexOf('chun-li');
console.log("index of chun-li is", result);

let results2 = ninjas.concat(['ken', 'crystal']);
console.log("after concatination", results2);
//adding or pushing the new elements to the array using push method
ninjas.push('salomon');
console.log("after pushing salomon", ninjas);

//when removing the last element from the array using pop method
ninjas.pop();
console.log("after popping salomon", ninjas);

//null and undefined
//undefined means a variable has been declared but not assigned a value
let marks;
console.log(marks, marks + 3, `Marks is ${marks}`);

//null means a variable has been declared and assigned a null value
let score = null;
console.log(score, score + 3, `Score is ${score}`);

//boolean and comparisons
console.log(true, false, "true", "false");

//methods that return booleans
let email2 = 'munyanezajoel@gmail.com';
let verification = email2.includes('@');
console.log("email verification:", verification);

//other example and applicatin of booleanson the ordinary array 
let names = ['mario', 'luigi', 'toad'];
let check = names.includes('luigi');
console.log("name check:", check);

//comparison operators
let age1 = 25;
console.log(age1 == 25);
console.log(age1 == 30);
console.log(age1 != 30);
console.log(age1 > 20);
console.log(age1 < 20);
console.log(age1 <= 25);
console.log(age1 >= 25);

//type conversion
let score2 = '100';
score2 = Number(score2);

console.log(score2 + 1);
//flow control for loops/ loops in js 
for (let i = 0; i < 5; i++) {
    console.log('in loop', i);
}
console.log("loop finished")

//creating the loop to iterate through an array
const names2 = ['mario', 'luigi', 'toad', 'peach'];
for (let i = 0; i < names2.length; i++) {
    //console.log(names2[i]);
    let html = `<div>${names2[i]}</div>`;
    console.log(html);
}
//while loop

//let i = 0;
//while (i < 5) {
// console.log('in while loop:', i);
// i++;
//}

//while loop to iterate through an array
//let i = 0;
//const names3 = ['mario', 'luigi', 'toad', 'peach'];
//while (i < names3.length) {
//  console.log(names3[i]);
//i++;
//}
//do while loop
let i = 2;
do {
    console.log('val of i  is ', i);
    i++;
}
while (i < 5);
//if statement
const age3 = 25;
if (age3 > 18) {
    console.log("you are adult");
}

//if statement on the array
const ninjas2 = ['shaun', 'ryu', 'chun-li', 'yoshi', 'ken'];
if (ninjas2.length > 3) {
    console.log("we have a lot of ninjas");
}