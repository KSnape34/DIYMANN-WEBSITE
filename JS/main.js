/** FAQS Page */



/**Contact Form */

var firstnameError = document.getElementById('first-name-error');
var surnameError = document.getElementById('surname-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-number-error');
var messageError = document.getElementById('message-error');


function validateFirstName() {
    var name = document.getElementById('contact-first-name').value;

    if(name.length == 0) {
        firstnameError.innerHTML = 'First Name Is Required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+([ \\-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/)) {
        firstnameError.innerHTML = 'Enter First Name';
        return false;

    }
    firstnameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateSurname() {
    var surname = document.getElementById('contact-surname').value;

    if(surname.length == 0) {
        surnameError.innerHTML = 'Surname Is Required';
        return false;
    }
    if(!surname.match(/^[a-zA-Z]+([ \\-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/)) {
        surnameError.innerHTML = 'Enter Surname';
        return false;

    }
    surnameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone Number Is Required';
        return false;
    }

    if(phone.length == 10) {
        phoneError.innerHTML = 'Phone Number Should Be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only Digits';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is Required'
        return false;
    }

    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + ' more chracters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

