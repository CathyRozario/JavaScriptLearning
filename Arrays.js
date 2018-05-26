
//Creating an array, adding elements to it and replacing elements with new ones.


var numbers = [45, 67, 87, 30, 12];

numbers[2] = 33;         /*This replaces 87 by 33, 87 being the element with index 2.
                           Now, numbers = [45,67,33,30,12] */
numbers[5] = 83;         /*This adds the number 83 at the end of the array at index 5.
                            Now, numbers = [45.67,33,30,12,83] */





//Use of array methods such as pop(), push(), shift() and unshift() and length property.



var zoo = ['lion', 'tiger', 'zebra'];       //creating an array called zoo with a list of animals           

var lastElement = zoo.pop();                //pop method when applied to the zoo array deletes or removes the last element in the list 
                                            //So now, zoo = ['lion', 'tiger'] and lastElement = 'zebra'
                                       

zoo.push('bear','monkey');                  //push method when applied to zoo array adds the elements given the braces at the end of the array                     
                                            //So now, zoo = ['lion', 'tiger', 'bear', 'monkey'];


zoo.shift();                                //shift method delets or removes the first element of the array
                                            //So now, zoo =['tiger', 'bear', 'monkey'];

zoo.unshift('kiwi');                        //unshift method adds element or elements specified within the brackets of unshift method to the beginnig of the array.
                                            //So now, zoo = ['kiwi', 'tiger', 'bear', 'monkey'];

zoo.length;                                 //This gives the length of zoo array which is 4(number of elements in the array). 




//Use of array methods such as concat(), reverse(), sort() and slice().


var boys = ['Alex', 'Thomas', 'Max'];
var girls = ['Ann', 'Ziona', 'Monika'];

var allGuys = boys.concat(girls);        //This results in allGuys = ['Alex', 'Thomas', 'Max', 'Ann', 'Ziona', 'Monika'] 


allGuys.reverse();                       // allGuys = ['Monika', 'Ziona', 'Ann', 'Max', 'Thomas', 'Alex']

allGuys.sort();                          // allGuys = ['Alex', 'Ann', 'Max', 'Monika', 'Thomas', 'Ziona']

allGuys.slice(3);                        // This gives the list of elements starting from index 3 : ["Monika", "Thomas", "Ziona"] . 

allGuys.slice(1,3);                      // This gives elements starting from index 1 till index 2: ["Ann", "Max"]

allGuys.slice(1,-3);                     /*This gives elements starting from index 1 till index -4
                                            (index -4 when counted from back of the array, and index always starts from 1, not 0 when it is counted backwards): ["Ann", "Max"] */ 

allGuys.slice(-3, -1);                   //This gives elements from index -3 to index -2 : ["Monika", "Thomas"]

