/* --------------------ARRAYS------------- 
Variables that hold multiple values */

    //Constructor Array (No longer used as often)

const numbers = new Array(1,2,3,4,5);
console.log(numbers)

//Normal way to construct arrays
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);

//Access a single item from the "fruits" array
console.log(fruits[1]); // brings back "oranges" because the index of arrays alwasy starts from 0, and goes up from there

 //Add to an existing array
 fruits[3] = 'grapes';
 console.log(fruits);
/*adds the new item based on the index called.  
 Since the fruits array didn't go up to index 3, it created a new index spot and put 'grapes' there.*/

//Add to the end of an existing Array 
fruits.push('mangos');
console.log(fruits);

// Add to the beginning of an exisitng Array
fruits.unshift('strawberries');
console.log(fruits);

//Remove the last item of an exisitng array
fruits.pop(fruits);
console.log(fruits);

//To check if something is an array
console.log(Array.isArray(fruits));

//Find the index of an item in an array
console.log(fruits.indexOf('oranges'));