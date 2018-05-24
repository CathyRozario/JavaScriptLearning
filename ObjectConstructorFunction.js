

//Q: Built three homes with Object constructor function.


function Home(colour, type, rooms, garden, city) {           //Home is the object constructor function
this.colour = colour;                                        /*'this' is creating an empty object that can fill with the properties
                                                              and they are then assigned to the parameters which will later be filled out
                                                              by the arguments we pass to them */
this.type = type;
this.rooms = rooms;
this.garden = garden;
this.city = city;
}

var home1 = new Home('white', 'apartment', 2, true, 'Wellington');     //creating an object 'home1' which is an instance of the same type of 'Home'
var home2 = new Home('peach', 'house', 4, true, 'Quebec');  
var home3 = new Home('yellow','apartment', 1, false, 'Sydney');



//Q: Create a library using Object constructor function and create 3 instances of book



function Book(title, author, price, section) {
this.title = author;
this.author = author;
this.price = price;
this.section = section;
}	

var book1 = new Book('persepolis', 'Marjane Satrapi', 350, 'autobiography');
var book2 = new Book('Harry Potter', 'J K Rowling', 500, 'novel');
var book3 = new Book('Hooked', 'Nir Eyal', 400, 'Technology');