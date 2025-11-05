alert("Welcome to JavaScript Basics!");
let age = 25
let year = 2024

console.log("age is", age);
console.log("year is", year);

const point = 100;
/* for the point = 150; This will cause an error
 because 'point' is a constant*/
console.log('point is', point);
var score = 170;
console.log("score is", score);
/*different variables can be consoled together 
when they are same data types*/
console.log(age, year, point, score);
//constants and variables do not change value on next console//
const min = 78
min = 90;
console.log("min is", min);
var time = 50
console.log("time is", time);