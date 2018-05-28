

// Q: Use conditional statements to display the weather type


var temp = -3;

if (temp < 5) 
console.log('Cold');
else if (temp > 5 && temp <= 15) 
console.log('Chilly');
else if (temp > 15 && temp < 20)
console.log('Moderate');
else
console.log('Hot');
 
// This will give the answer 'Cold' since temp is less than 5. 





// Q: Create switch statement and pass to it a value regarding a dice roll, which will give result based on the value. 


var dice = 4;

switch(dice) {
    case 1:
console.log('Very poor');
break;
    case 2:
console.log('Poor');
break;
    case 3:
console.log('Not bad');
break;
    case 4:
console.log('Good');
break;
    case 5:
console.log('Very good');
break;
    case 6:
console.log('Excellent');
break;
    default:
console.log('Roll the dice');
}
//This results 'Good' since dice = 4


            OR


switch(Math.floor(Math.random()*7)) {                   //Math.floor() rounds the number given within brackets to the nearest lowest integer.
    case 1:                                             //Math.random() gives a random value between 0 and 1, including 0 but not 1. 
alert('Very poor');
break;
    case 2:
alert('Poor');
break;
    case 3:
alert('Not bad');
break;
    case 4:
alert('Good');
break;
    case 5:
alert('Very good');
break;
    case 6:
alert('Excellent');
break;
    default:
alert('Roll the dice');
}            
// This could result in any of the above alerts since Math.random() is used.




// Q: Use while loop to execute a condition 5 times


var x = 1;
while(x<6)
{
console.log(x);
x++;
}




// Q: Use do while loop to execute the code at least once with a false expression


var x = 7;
do {
console.log(x);
x++;
}
while(x<6);




// Q: Create an array of number values, loop through the array with a for loop and run each element of the array using conditional statements.


var testScores = [45, 78, 90, 30, 100, 56];

for(i = 0; i < testScores.length; i++) {
if( testScores[i] < 40) {
console.log('Failed');
} 
if( testScores[i] >= 40 && testScores[i] < 50) { 
console.log('Passed the exam'); 
}
else if( testScores[i] >= 50 && testScores[i] < 60) {
console.log('Not too bad, Try harder');  
}
else if( testScores[i] >= 60 && testScores[i] < 80) { 
console.log('Good, can get better');  
}
else {  
console.log('Great!');
}  
}
