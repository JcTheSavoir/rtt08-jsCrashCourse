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
    // their value which stops this from working), you don't need the () surronding it
const addNums4 = num1 => console.log(num1 + 5);
addNums4(18);