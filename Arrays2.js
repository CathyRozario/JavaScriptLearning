//Create 3 different arrays and concatenate them all 


var omnivores = ['pig', 'bear', 'rat', 'human'];

var carnivores = ['lion', 'cheetah', 'whales'];

var herbivores = ['cow', 'deer' ];

var allAnimals = omnivores.concat(carnivores,herbivores);     //This results in allAnimals = ["pig", "bear", "rat", "human", "lion", "cheetah", "whales", "cow", "deer"]



//Create weather array and fill it with winter and summer values.
//Then create var winter and var summer and fill them with winter and summer values respectively from the weather array


var weather = ['rainy', 'chilly', 'cold', 'freezing', 'snowy', 'hot', 'warm', 'sunny'];

var winter = weather.slice(0, 5);
 
      OR

var winter = weather.slice(,-8, -3);


var summer = weather.slice(5);

      OR

var summer = weather.slice(-3);
