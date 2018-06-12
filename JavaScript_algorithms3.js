

// Q: Find the sum of numbers within a given range.
// Note: If the given range is [2,4], then the sum of range is expected to be 2+3+4


function sumOfRange(array) {
var max = Math.max(array[0],array[1]);
var min = Math.min(array[0], array[1]);
var sum = 0;

for(var i = min; i <= max; i++) {
sum = sum + i;          
}
return sum;
};

sumOfRange([5,2]); 
// Result is 14, which is the sum of 5,4,3 and 2.


/* Note: Math.max() gives the largest number given in the brackets.
         Likewise, Math.min() gives the smallest numner.  */




// Q: Remove desired number of elements from an array


function removeElements(array, x, n) {
array.splice(x,n);
return array; 
}

removeElements(['John', 'Mickey', 'Eric', 'Rob', 'Seth', 'Matt'], 3, 2);
// ["John", "Mickey", "Eric", "Matt"]


/* Note1: Syntax of splice() is array.splice(starting element, number of elements to be removed, additional elements if any)
          In the above example, it removes 2 elements starting from index 3 of the array. 
         
   Note2: splice() method can be used to either add or remove elements

          Example1: var names = ['Richie', 'Loki', 'Adrian', 'David'];
                   names.splice(2, 0, 'Katty');   
                   names array will now be ['Richie', 'Loki', 'Katty', 'Adrian', 'David']

          Example2: names.splice(3,1);
                    names array will now be ['Richie', 'Loki', 'Katty', 'David']    */




// Q: Check if the given string is a palindrome
// Note: A string is palindrome if it can read the same from left to right and vice versa


function palindrome(str) {
var x = str.length;
for( var i = 0; i < x; i++) {
if (str[i] == str[x-1]) { 
x--;
return true;
}
else
return false;
}
};

palindrome('race');
//false
palindrome('racecar');
//true



         OR   



function palindrome(str) {
var regEx = /\W/g;
str = str.replace(regEx, '').toLowerCase();
var reverseString = str.split('').reverse().join('');
if (str == reverseString)
return true;
else
return false;
}

palindrome('race');
//false
palindrome('race-car');
//true
palindrome('Racecar');
//true         



         OR



function palindrome(str) {
var regEx = /\W/g;
str = str.replace(regEx, '').toLowerCase();
var reverseString = str.split('').reverse().join('');
return (str == reverseString);
}      

palindrome('race');
//false
palindrome('racecar');
//true


/* Note: The regular expression of /\W/ represents all th special characters in the keyboard.
         replace() can be used to replace a character or group of characters in a string with the given string
         If the string to be replaced with is not provided, it will just remove what is given within the brackets of replace().  */
