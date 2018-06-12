
//Permutation of two strings

// Q: Create algorithm to determine if two strings are a permutation of each other.
/* Note 1: Two strings which are a permutation of each other 
         will have equal amount of same characters, but notnecessarily in the same order. 
         
         Example 1: 'tea' and 'eat' are a permutation of each other, 
         because each string has equal number of 'e', 'a' and 't' and there are no different letters as well 
         Example 2 : 'baseball' and 'ballbase' are permutation of each other, since
         there 2 'b', 2 'a', 2 'l' and 1 'e' in both words. 

   Note 2: sort() is used to sort the elements of an array in alphabetic order, which will return an array of values in alphabetic order
           whereas join() is used to join or put together all the elements of an array resulting a string

           Example: var x = ['m', 'a', 's', 't', 'e', 'r'];
           x.sort() results in ["a", "e", "m", "r", "s", "t"]
           x.join('') results in "aemrst"
           x.join(' ') results in "a e m r s t"             */



var stringPermutation = function(str1, str2) {
var x = str1.split('').sort();
var y = str2.split('').sort();
var x1 = x.join('');
var y1 = y.join('');
 if (x1 == y1){
console.log(str1 + ' and ' + str2 + ' are permutations to each other.');
 }
else
{
console.log(str1 + ' and ' + str2 + ' are not permutations to each other.');
}
}

stringPermutation('baseball', 'ballbase');
// The result is 'baseball and ballbase are permutations to each other.'

 
/* Here, str1 = 'baseball' and str2 = 'ballbase'

   str1.split('') gives ['b', 'a', 's', 'e', 'b', 'a', 'l', 'l']
   str1.split('').sort() gives ['a', 'a', 'b', 'b', 'e', 'l', 'l', 's']
   str1.split('').sort().join('') gives "aabbells"
   
   Likewise, 
   str2.split('').sort().join('') gives "aabbells"   */


stringPermutation('god' , 'dog');
// god and dog are permutations to each other.
stringPermutation('love', 'peace');
// love and peace are not permutations to each other.
stringPermutation('Java', 'Ruby');
// Java and Ruby are not permutations to each other.
stringPermutation('car', 'care');
// car and care are not permutations to each other.



                   OR


function stringPermutation(str1, str2) {
return str1.split('').sort().join('') == str2.split('').sort().join('') ;
}

stringPermutation('baseball', 'ballbase');
// true
 
/* str1 = 'baseball';
   str1.split('').sort().join('') gives "aabbells"
   str2 = 'ballbase';
   str2.split('').sort().join('') gives "aabbells"  */
    

stringPermutation('dog', 'god');
// true
stringPermutation('dog', 'God');
// false                   