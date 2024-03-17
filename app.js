/*-----------------------JSON----------------------------------
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