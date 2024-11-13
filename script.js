var surname = document.getElementById('surname');
var firstName = document.getElementById('name');
var email = document.getElementById('email');

var surnameValue = surname.value;
var firstNameValue = firstName.value;
var emailValue = email.value;

var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    localStorage.setItem('surname', surnameValue);
    localStorage.setItem('name', firstNameValue);
    localStorage.setItem('email', emailValue);
});