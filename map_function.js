

// Q: Create an array of greetings and convert each element of the array to uppercase
// Q: Remove first element of the greetings array and save it in another variable.


var greetings = ['Hi', 'Hello', 'Good morning', 'Good evening', 'Welcome'];

var shout = greetings.map(function(upper) {
return upper.toUpperCase();
})

shout;
// ["HI", HELLO", "GOOD MORNING", "GOOD EVENING", "WELCOME"]

var hiShout = shout.shift();
/* Using shift method on the shout array will delete the first element 'HI' from it.
   and save the removed element in the variable 'hiShout' */

shout;
// Now, shout array has all the elements except the first element as follows: "HELLO", "GOOD MORNING", "GOOD EVENING", "WELCOME"]

hiShout;
// "HI"



/* Q: Create an array of numbers and use map method on it, to multiply each element of the array with 2 
      and then use map method again (method chaining or cascading) to add one to each element of the new array thus formed. */ 


var numbers = [2, 6, 5, 1, 9];

var doubles = numbers.map(function(num) {
return num * 2;
}).map(function(num2) {
return num2 + 1;
})
// 

doubles;
// doubles array will be as follows: [5, 13, 11, 3, 19]