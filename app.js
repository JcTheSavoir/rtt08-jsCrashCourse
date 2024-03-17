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