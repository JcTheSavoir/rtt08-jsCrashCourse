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



//------------------------------------------LOOPS & HIGH ORDER ARRAY METHODS-------------------------------
// Array from before being used again below:
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

// For Loops
for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

//While Loops
let i = 0;
while(i < 10) {
    console.log(`While Loop Numbers: ${i}`);
    i++;
}

//Loop through Arrays (substandard, better to use the method after this)
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//For Of Loops
    // Structure of for of loop below
    // for(let 'blank' of 'name of array) {}
for(let todo of todos){
    console.log(todo);
    console.log(todo.text);
    console.log(todo.id) // call whichever one you need/want
}

//--------High order array methods
//forEach - loops through them
todos.forEach(function(theVariable) {
    console.log(theVariable.text);
    console.log(theVariable);
    console.log(theVariable.id)
}); 

//map - create a new array from exisiting array
const todoText = todos.map(function(theVariable) {
    return theVariable.text;
});
    //we have created the new array todoText, by using return on all of the 'text' keys from todos.  We can see that by
    //console logging todoText
console.log(todoText);

//filter - create a new array based on a condition
const todoCompleted = todos.filter(function(theVariable) {
    return theVariable.isCompleted === true;
});
    //We have created a new array that contains all of the objects that had the key 'isCompleted' === true
console.log(todoCompleted);

//you can pass multiple array methods at one time like below
const todoCompletedText = todos.filter(function(theVariable) {
    return theVariable.isCompleted === true;
}).map(function(theVariable){
    return theVariable.text;
});
    //now we have used both the filter and map methods on one array, this will return only the key 'text' from 
    //the objects, and only the objects whos key 'isCompleted' was === true
console.log(todoCompletedText);

//-------------------------------CONDITIONALS----------------------------------

//------if statements
/* 
const x = 10;

if(x === 10) {
    console.log('x is 10')
} else if(x > 10) {
    console.log('x is greater than 10')
}else {
    console.log('x is less than 10');
};
*/
/*
const x = 4;
const y = 10;
if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10')
} else {
    console.log('x is less than 5 and y is less than 10')
}
*/

/*---Ternary Statement 
const x = 10;
    // basically if x > 10, then(represented by the ?) color = red, else (represented by the :) color = blue
const color = x > 10 ? 'red' : 'blue';
console.log(color);
*/

//---Switches
const x = 11;

const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
}


//----------------------FUNCTIONS------------------------------------
//Non-arrow functions
function addNums(num1 = 1,num2 = 2) {
    return num1 + num2;
};
console.log(addNums(5,5)); 

//Arrow Functions (released in es6 (es2015))
const addNums2 = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2);
}
addNums2(5,6);

    // As long as there is only one expression (num1 + num2), we don't actually need the {}
const addNums3 = (num1 = 1, num2 = 1) => console.log(num1 + num2);
addNums3(12,6); 

    // If only a single parameter is set (num1 = 1, num2 = 1 (is two parameters, and they define 
    // their value which stops this from working)), you don't need the () surronding it
const addNums4 = num1 => console.log(num1 + 5);
addNums4(18);


//---------------------------------------------OBJECT ORIENTED PROGRAMMING----------------
//CONSTRUCTIVE FUNCTIONS - should start with a capital letter
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    // Instead of having dates as strings, you can have a date object by useing the date constructor
    this.dob = new Date(dob);
    //Adding methods to the Person Object part 1---------------------
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

    //Instantiate Object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.dob);
console.log(person1.dob.getFullYear());

    //Adding methods to the Person Object part 2---------------------
console.log(person1.getBirthYear());
console.log(person1.getFullName());
*/

    //attach methods and properties to prototype
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    // Instead of having dates as strings, you can have a date object by useing the date constructor
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
};

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1);

// Class - does the same thing that the object oriented programming does, but in a "prettier" way and 
// gets rid of the need for the Person.protoype methods
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1);