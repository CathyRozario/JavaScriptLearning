
// Q: Create an array called weather with some number values 
// Q: Use the filter method to get values greater than 70 from weather array and store them in another array.


var weather = [30, 45, 75, 85, 78, 60, 55];

var goOutside = weather.filter(function(checkWeather) {
return checkWeather > 70 ;
})
/* A function is passed as an argument to the filter method, 
   where checkWeather represents each value of the weather array(current value of index) 
   to check through the condition in the code block */

goOutside;      
// Now, goOutside gives the result [75, 85, 78]



// Q: Create an array with object elements in it with the properties day and sun, sun being boolean value.
// Q: Use filter method to find out the true values and put them all in another array.


var forecast = [
    {day: 'Monday', sun: true},
    {day: 'Tuesday', sun: false},
    {day: 'Wednesday', sun: false},
    {day: 'Thursday', sun: true},
    {day: 'Friday', sun: true},
    {day: 'Saturday', sun: true},
    {day: 'Sunday', sun: false} ];

var sunnyDays = forecast.filter(function(weather) {
return weather.sun; 
})

sunnyDays;
/* sunnyDays will return an array with the true values of sun as follows: 
   [{day: "Monday", sun: true}, {day: "Thursday", sun: true}, {day: "Friday", sun: true}, {day: "Saturday", sun: true}] */