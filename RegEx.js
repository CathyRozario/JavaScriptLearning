// JAVASCRIPT REGULAR EXPRESSIONS



/pattern/modifiers;
// Basic syntax of regular expression




// Use of match() with regular expression. 

// Example 1:

var word = 'nose';
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var regEx = /no/i;
// This will look for the pattern 'no'

var regWord = word.match(regEx); 
var regAlphabet = alphabet.match(regEx);

regWord;
// The result is as follows in the console:["no", index: 0, input: "nose", groups: undefined]
regAlphabet;
// Result is: ["no", index: 13, input: "abcdefghijklmnopqrstuvwxyz", groups: undefined]


// Example 2:

var alpha = 'abcdefg';
var repeat = 'abc abc abc';

var regEx = /abc/i;

var regExAlpha = alpha.match(regEx).length;
regExAlpha;
// Answer is 1

var regExRepeat = repeat.match(regEx).length;
regExRepeat;
//Answer is 1 in this case too, which means evenif 'abc' repeats, the match() gets only the first match it finds and then quits from the code.





// Use of search() with regular expression.


var trip = 'I am gonna catch a bus';

var regEx1 = /car/;
var regEx2 = /bus/;

var tripCar = trip.search(regEx1);  // fail: -1
var tripBus = trip.search(regEx2);  // success: 19 (index of the first letter of 'bus')
// search function always returns an index as answer and returns -1 if it fails to find what pattern it is looking for. 





// Applying match() and search() 


var food = 'I will eat pasta today';

var reg = /ea/i;     
// This looks for 'ea' together as it is given within slahes.

food.match(reg);
// ["ea", index: 7, input: "I will eat pasta today"]
food.search(reg);
// 7 (index of 'e', being the first letter in the pattern /ea/)


var regBracket = /[ea]/i;
// This looks for 'e' and 'a' individually or separately.

food.match(regBracket);
//["e", index: 7, input: "I will eat pasta today", groups: undefined]
//   match function will stop where it finds the first match, that is, 'e' and will not continue to look for 'a' 
food.search(regBracket);
// 7


var regBracketGlobal = /[ea]/g;

food.match(regBracketGlobal);
// (5) ["e", "a", "a", "a", "a"]
// use of modifier g makes the match function work differently. This time it will keep working until it finds all 'e' and 'a' in the string.  
food.search(regBracketGlobal);
7





// A different way of using RegEx with multiple words.


var regExAnswer = /James|Bond/i;

var name1 = 'Sherlock';
var name2 = 'Holmes';
var name3 = 'James';
var name4 = 'Bond';

name1.match(regExAnswer);
//null
name2.match(regExAnswer);
//null
name3.match(regExAnswer);
//["James", index: 0, input: "James", groups: undefined]
name4.match(regExAnswer);
//["Bond", index: 0, input: "Bond", groups: undefined]
name3.match(regExAnswer).length;
//1


var regExAnswer2 = /James|Bond/g;

var name = 'James Bond';

name.match(regExAnswer2);
//(2) ["James", "Bond"]
name.match(regExAnswer);
//["James", index: 0, input: "James Bond", groups: undefined]





// More examples of regular expressions


//Example 1:

regBracket = /[ase]/g;
// This looks for every 'a', 's' and 'e' in a given string.

var sport1 = 'baseball';
var sport2 = 'soccer';

sport1.match(regBracket);
// ['a', 's', 'e', 'a']

sport2.match(regBracket);
// ['s', 'e']



// Example 2:

regBracket2 = /[^ase]/g;
// This looks for every letter except the ones given in the brackets, that means, all letters except a, s and e. 

sport1.match(regBracket2);
// ['b', 'b', 'l', 'l']

sport2.match(regBracket2;
// ['o', 'c', 'c', 'r']	



// Example 3:

regCap = /^[A-Z]/;
// Checks for any capital letter from A to Z in the index 0 of the given string.

var x = 'James';
var y = 'linta';

x.match(regCap);
// This gives the result in the console as follows: ["J", index: 0, input: "James"]

y.match(regCap);
// This results in null, since the first letter of 'linta' does not find the match of a capital letter in index 0.




