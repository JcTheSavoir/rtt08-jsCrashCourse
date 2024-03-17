//------------------------------------------LOOPS & HIGH ORDER ARRAY METHODS-------------------------------

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
