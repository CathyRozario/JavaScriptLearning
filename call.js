

// Syntax of call() method:  function.call(object, argument1, argument2,....)



// Exercise:


var myLanguages = function(lang1, lang2) {
return console.log( 'I am ' + this.name + '. I know ' + lang1 + ' and ' + lang2);
}


// Q: Use two different person objects and use call() method on the function myLanguages 
//    and pass the objects created, along wih arguments for lang1 ang lang2.


var person1 = { name: 'Rose' };
var person2= { name: 'Erik' };


myLanguages.call(person1, 'English', 'French');
// I am Rose. I know English and French
myLanguages.call(person2, 'Spanish', 'French');
// I am Erik. I know Spanish and French


              OR



var person1 = { name: 'Rose' };

var languages = ['English', 'French'];

myLanguages.call(person1, languages[0], languages[1]);              
// I am Rose. I know English and French