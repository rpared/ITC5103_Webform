function validateForm(){

    let firstName = document.forms["rogerform"]["firstname"];
    let lastName = document.forms["rogerform"]["lastname"];
    let email = document.forms["rogerform"]["email"]
    //I copied this email Regex from https://www.simplilearn.com/
    let validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let message = document.forms["rogerform"]["message"]

    if (firstName.validity.valueMissing){
        firstName.setCustomValidity("You must enter your first name!");  
    }

    else {
        firstName.setCustomValidity("");
    }

    if (email.validity.valueMissing){
        email.setCustomValidity("You must enter an email, otherwise how would Roger reply?");
    }
    
    else if (!email.value.match(validEmailFormat)){
        email.setCustomValidity("Something is off, check that you are not missing the @ and domain name.");
    }   

    else {
        email.setCustomValidity("");
    }

    if (message.validity.valueMissing){

        message.setCustomValidity("Don't forget to enter your message");
       
    }

    else {
        message.setCustomValidity("");
    }


}