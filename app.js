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
