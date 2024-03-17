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




