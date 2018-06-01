

// Syntax of bind() method: variable_name.bind(thisContextObject) or function_name.bind(thisContextObject)



// Exercise1:


let number = {
x: 45,
y: 54
};


let count = function() {
    return console.log(this.x + this.y);
}


//Q: Use bind method to help 'count' find the context of 'this' and link it with the object 'number'


let countBind = count.bind(number);
// Passing the object 'number' as argument to the bind method to provide 'this' within the code of count variable, the access to number object

countBind();  
// Now, invoking countBind() returns 99 (number.x + number.y)
/* usind bind() to bind count and number has given 'this' a purpose and 
   accessibilty to take the place of object 'number' so as to access the property values of 'number', x = 45 and y = 54 */



// Exercise2:


let person1 = {
	name: 'Jack'
};

let person2 = {
	name: 'Henry'
};

function namer() {
	return this.name;
}

/* Calling the function namer() will return 'undefined', 
   since the keyword 'this' has no context in the given code to acces
   the name property of either of the objects person1 or person2 */

//Q; Use bind method to help 'this' find its context or help it access name properties of person1 and person2.


namer.bind(person1)();
// Returns the value 'Jack'

namer.bind(person2)();
// Returns the value 'Henry'



