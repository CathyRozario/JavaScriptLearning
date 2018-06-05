

// Syntax of reduce method: array.reduce(function(accumulator, currentValue, currentIndex, array), intialValue)

/* 'accumulator', 'currentValue', currentIndex' and 'array' are the parameters.
   'accumulator' takes the value of initial value, while 'currentValue' holds the value of first index element in the array.
   'currentIndex' represents index of each element of the array at different points when the code block is ran.
   'array' represents the array in which reduce method is applied.
   'To write 'currentIndex' and 'array' within brackets is optional.
   'initialValue' is the value given by the user, the value of which will be taken by 'accumulator' when it first start working */



// Example 1:


var numbers = [3, 6, 8, 9];

numbers.reduce(function(acc,curr,idx,arr) {
	return acc + curr ;
}, 5);

//  Result is 31
/* 'acc' takes the value 5 first, whereas 'curr' holds the value of first index of the array which is 3.
    Therefore, acc + curr(5 + 3) returns 8, which is now taken by acc in the second call. In the second call or second execution of the code block,
    acc = 8 and curr = 6 (element in the second index of array). Now, acc + curr will give 8 + 6 = 14.
    In the third call, acc = 14 and curr = 8 (third index element in the array), hence acc + curr = 14 + 8 = 22.
    Likewise, this process goes on until the last value in the array is used and the final addition result will be the result of the code. */ 
    


// Example 2:


var multArr = [[0,1], [2,3], [4,5];

multArr.reduce(function(acc, curr, idx, arr) {
	return acc.concat(curr);
}, [-2,-1]);

//  Resultant array is [-2, -1, 0, 1, 2, 3, 4, 5]

/*             acc                   curr            idx         arr       return value

 FIRST CALL  [-2, -1]               [0, 1]           0          multArr   [-2, -1, 0, 1] 
 SECOND CALL [-2, -1, 0, 1]         [2, 3]           1          multArr   [-2, -1, 0, 1, 2, 3] 
 THIRD CALL  [-2, -1, 0, 1, 2, 3]   [4, 5]           2          multArr   [-2, -1, 0, 1, 2, 3, 4, 5]   */




// Q: Create an array of numbers and find the sum of all numbers using reduce function.


var numbers = [4, 6, 2, 1, 5];

var sum = numbers.reduce(function(a, b) {
return a + b;
});
// a represents accumulator and b is the currentValue in the array.
// When no intialValue is provided, a takes the value of first index and b takes the value of second index by default.

sum;
// Result is 18 (sum of all elements in the array)




/* Q: Create an array of numbers and find the answer which equals the number, 
      when all the numbers in the array are multiplied together using reduce function. */


var numbers = [4, 6, 2, 1, 5];

var mult = numbers.reduce(function(a, b) {
return a * b;
});

mult;
// results in 240




// Q: Using reduce method, find the largest number in the numbers array.


var largestNum = numbers.reduce(function(acc,curr) {
	if (acc > curr) {
		return acc;
	}
	else {
		return curr;
	}
});

largestNum;
// Gives the result 6.



                     OR



var largestNum = numbers.reduce(function(a, b) {
if (a > b) {
b = b + 1;
}
else {
a = b;
}
return a;
});                     

largestNum;
// Gives the result 6.




// Q: Create an array of numbers and use map method on all the elements of the array.
// Q: Use reduce method on the new array formed (when map method is used) to get a single value.
// Use chaining method to do above questions


var num = [3, 5, 2, 7, 4];

var doubles = num.map(function(a){
return a * 2;
}).reduce(function(b,c) {
return b + c;
});
	
doubles;
// Result is 42.
