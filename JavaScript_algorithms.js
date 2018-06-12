
// Q: Find whether a given string is unique string or not (Hint: use indexOf() and lastIndexOf() methods. 

/* Notes: 1. Unique string is a string in which no letter is repeated.
          2. indexOf() gives the index of the letter given within the brackets or
             index of first letter of the word given in brackets.
             Example: var flower = 'Shoe flower';
                      flower.indexOf('h') returns the value 1, which is the index of letter 'h'
                      flower.indexOf('e') returns the value 3, index of first 'e' in the string
                      flower.indexOf('flower') returns the value 5, index of first letter of the word 'flower'
          3. lastIndexOf() gives gives the last index of the letter given within the brackets. 
             Example: flower.indexOf('e') returns the value 3
                      flower.lastIndexOf('e') returns the value 9, index of the second 'e' or last 'e' in the string.    */



var uniqueString = function(personName) {

for (var i = 0; i < personName.length; i++) {
if (personName.indexOf(personName[i]) !==  personName.lastIndexOf(personName[i])) 
return console.log('Not a unique string');
}
return console.log('Unique string');
}

uniqueString('Sherlock Holmes');
// Passing the argument 'Sherlock Holmes' to the parameter 'personName'
// Result is 'Not a unique string'

uniqueString('Elsa Brown');
// Result is 'Unique string'




// Q: Find the longest word in a given string (Hint: Use split() method)

/* Notes: split() method can be applied in different ways in a string,
          which is used to split the words or letters in the given string.
          
          Example: var car = 'Alfa Romeo';
                   car.split() = ["Alfa Romeo"]
                   car.split('') = ["A", "l", "f", "a", " ", "R", "o", "m", "e", "o"]
                   car.split(' ') =    ["Alfa", "Romeo"]          */


    
var longestString = function(str) {
var splitWords = str.split(' ');
var x = 0;
var biggestWord;
for (var i = 0; i < splitWords.length; i++) {
if  (splitWords[i].length > x) {
x = splitWords[i].length;
biggestWord = splitWords[i];
}
}
return console.log('The longest word is ' + biggestWord + ' and its length is ' + x + '.');
}

longestString('I am a programmer');
// The longest word is programmer and its length is 10.
longestString('He is the president of the nation');
// The longest word is president and its length is 9.




