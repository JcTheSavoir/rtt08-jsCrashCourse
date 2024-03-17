//------------PRIMITIVE DATA TYPES --------------------------------------------------------------------
To see what data type a given variable, you can pass "TypeOf" (can be done inside console.log so 
it logs the type to the console.) TypeOf will not correctly show null and undefined as their data types.
Instead they will show as "object".
    // String, Numbers, Boolean, null, undefined
EXAMPLES;
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;

//------------CONCATENATION & TEMPLATE STRINGS--------------------------------------------------
const name = 'John';
const age = 30;

    // Concatenation
Concatenation is the older way of creating a variable that is a string,
but also has variables inside it. It requires ending strings, using plus
sign to append the string to a variable, and then using the plus sign to
append the another string (if more text was needed).
EXAMPLE: console.log('My name is ' + name + ' and I am ' + age); 

    // Template String
Template Strings is the newer way to do this.  It uses the backtick
symbol, along with correct syntax around the variables in the string
Backtick = `    syntax= ${}
EXAMPLE: const hello = `My name is ${name} and i am ${age}`; console.log(hello);


/* --------------------ARRAYS------------------------------------------------------------------------------
Variables that hold multiple values */

    //Constructor Array (No longer used as often)

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers)

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

/*--------------------OBJECT LITERALS---------------------------------------
Can have strings, numbers, arrays, and even other objects; all contained within a single object*/
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);

//to access a single value, use dot syntax
console.log(person.firstName, person.lastName);

//to access to a specific value inside the array in the object
console.log(person.hobbies[1]);

//to access a specific value inside an object that is inside an object
console.log(person.address.city);

//Destructuring of an object, to create variables of the items in the object
const { firstName, lastName} = person;
console.log(firstName);

//Destructuring in order to create variables of items inside the object, inside the object
const {address: {city}} = person;
console.log(city);

// add property to an exisiting object
person.email = 'john@gmail.com';
console.log(person);


//----------------------ARRAYS, MADE UP OF OBJECT LITERALS----------------------

const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    }
];
console.log(todos);

//to access items in an object, inside an array
console.log(todos[1].text);


/*-----------------------JSON-------------------------------------------------------------
A data format, used in full stack and api's 
When sending data to a server or receiving data from a server, this is usually done in JSON forma.
Very similar to Object literals.  
External JSON formatter: https://www.freeformatter.com/json-formatter.html 
As a show of it, copy and paste the below code into the formatter (only copy from the [ bracket to the ] braket )
const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    }
];

----------Below is the code after it's been formatted for json---
[
   {
      "id": 1,
      "text": "Take out Trash",
      "isCompleted": true
   },
   {
      "id": 2,
      "text": "Meeting with boss",
      "isCompleted": true
   },
   {
      "id": 3,
      "text": "Dentist appt",
      "isCompleted": false
   }
]

Notice the difference?  It's mainly the double quotation marks around the strings, 
and double quotation marks around the Keys.  JSON DOES NOT USE SINGLE QUOTATION MARKS */

//to get your code to be JSON ready before sending it to a server.  First is the original code
const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    }
];

    // After you have the code you want to be JSON ready, you could do the following
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
    //In the console you can see that it's returned the original code into JSON string