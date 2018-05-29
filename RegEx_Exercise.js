

// Q: Find out if the first letter of a string is uppercase or not using JavaScript regular expression.


var str = 'Rock';

regEx = /^[A-Z]/;

if (regEx.test(str)) {
console.log('First letter is uppercase');
}
else {
console.log('First letter is not uppercase');
}



          OR



function upperCase(str)
{
	regEx = /^[A-Z]/;

	if (regEx.test(str)) {
console.log('First letter is uppercase');
}
else {
console.log('First letter is not uppercase');
}

}          
upperCase('Rock');

// Any of the above code will give the result 'First letter is uppercase' 




function upperCase(str)
{
	regEx = /^[A-Z]/;

	if (regEx.test(str)) {
console.log('First letter is uppercase');
}
else {
console.log('First letter is not uppercase');
}

}          
upperCase('rock');

//This results in 'First letter is not uppercase'
