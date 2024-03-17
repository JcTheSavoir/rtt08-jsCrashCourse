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

//Attach methods and properties to prototype
/*
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
*/

// Class - (systatic sugar) does the same thing that the object oriented programming does, but in a "prettier" way and 
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
