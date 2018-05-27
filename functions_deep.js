// FUNCTION DECLARATION

function goodMorning() {
return 'Hi, Good Morning.';
}
/* In function declaration, function is always named. Here, goodMorning is the name of the function.
   Here, calling goodMorning function returns the result */



// FUNCTION EXPRESSION

var greeting = function() {
return 'Hi, Good Morning.';
}
/* In function declaration, the function need not be named, instead the function is assigned to a variable.
   Here, calling greeting function returns the result */



// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)

var greeting = (function() {
return 'Hi, Good Morning.';
}());
/* IIFE runs the code immediately and returns the result with the arguments passed to it in the extra parenthesis in the code.
   IIFE does not need to invoke or call it with a separate piece of code 
   Here, calling the greeting variable returns the result */



// Q1: Create a function declaration and call the function with arguments passed on to it.


function shopGrocery(person, shop) {
return person + ' went shopping for groceries at ' + shop;
}

shopGrocery('Richie','countdown');
// Calling the function shopGrocery with the arguments in parenthesis returns "Richie went shopping for groceries at countdown"




// Q2: Create an immediately invoked function expression and store the IIFE within a variable and call it.


var shopGrocery = (function(person,shop) {
return person + ' went shopping for groceries at ' + shop;
}('Richie','countdown'));
// The arguments 'Richie' and 'countdown' will be received by the parameters person and shop respectively.

shopGrocery; 
// Calling the variable shopGrocery gives the result "Richie went shopping for groceries at countdown"
