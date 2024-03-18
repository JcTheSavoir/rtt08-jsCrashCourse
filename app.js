//---------------------USER FORM SUBMISSIONS-----------------------------
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// js will "listen" for when the user clicks on the submit button
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // this if will let user know that they need to enter the required information
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Ensures the error goes away after set amount of time (in miliseconds)
    setTimeout(() => msg.remove(), 3000);
  } else {
        //below is what happens if the user does enter the needed information
        //For this, we are physically showing the entered name and username below the form.
    const li = document.createElement('li');

    // Adds the actual field waiting for the information to be entered (all happens right after eachother in the
    //if statement)
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // appends this to the unordered list
    userList.appendChild(li);

    // clears the fields after the else part of the if statement runs
    nameInput.value = '';
    emailInput.value = '';
  }
}