

// Create an object function constructor named Dog with 5 properties in which two are methods.
// Create 3 instances of the Dog.

function Dog(name,age,color) {
this.name = name;
this.age = age;
this.color = color;
this.violent = function() {                      //violent and friendly are two properties cum methods that can be called when necessary which will then give the respective alerts.
alert("Don't go close to him") };
this.friendly = function() {
alert("He is very friendly") }; 
}

var dog1 = new Dog('Loki', 4, 'black');          //creating an instance of Dog named dog1.
var dog2 = new Dog('Dani', 2, 'brown');
var dog3 = new Dog('Penny', 5, 'white');





//Take the violent and friendly properties or methods out of the object function constructor and write them in an object prototype or Dog prototype.
//Create 2 instances of Dog that will inherit from the Dog prototype.

function Dog(name,age,color) {
this.name = name;
this.age = age;
this.color = color;
}


Dog.prototype = function() {                     //creating object prototype of Dog and writing the methods violent and friendly inside it.
this.violent = function() {
alert("Don't go close to him") };
this.friendly = function() {
alert(this.name + " is very friendly") }; 
}

      OR

Dog.prototype = {                               //another way of creating object prototype, different from the one above
violent: function() {
alert("Don't go close to " + this.name) },
friendly: function() {
alert("He is very friendly") }
};


var dog4 = new Dog('Boxer', 5, 'black');              //creating two new instances of Dog called dog4 and dog5     
var dog5 = new Dog('Don', 3, 'chocolate');

dog4.violent();                                  //dog4 inherits the property 'violent' from the Dog prototype which will give the alert "Don't go close to Boxer" or "Don't go close to him"
dog5.friendly();                                 //dog5 inherits the property 'friendly' from the Dog prototype which will give the alert "Don is very friendly" or "He is very friendly"





//Create introduction method in Dog prototype which will receive all arguments from Dog object function prototype
//Create an instance of this new Dog and then inherit and run the introduction method.

function Dog(name,breed,age) {
this.name = name;
this.breed = breed;
this.age = age;
}

Dog.prototype = {
intro: function() {
alert("Hi, " + "This is " + this.name + ". " + "She is a " + this.breed + "." +" And she is " + this.age + " years old.") }
};

var dog6 = new Dog('Katie', 'pomeranian', 2 );   

dog6.intro();                                  //dog6 inherits the property 'intro' from Dog prototype, as a result of which, running this code gives the alert "Hi, This is Katie. She is a pomeranian. And she is 2 years old." 
