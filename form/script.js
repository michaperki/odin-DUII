// form validation

// get the container element
var container = document.getElementById("container");

// create a form
var form = document.createElement("form");

// set attributes for form
form.setAttribute("method", "post");
form.setAttribute("action", "#");

// create a heading

var h2 = document.createElement("h2");
h2.innerHTML = "Registration Form";
form.appendChild(h2);

// create line break
form.appendChild(document.createElement("br"));

// create a input element for email
var email = document.createElement("input");
email.setAttribute("type", "text");
email.setAttribute("id", "email");
email.setAttribute("placeholder", "Enter your email");

// create a span element for error message
var error1 = document.createElement("span");
error1.setAttribute("id", "error1");
error1.setAttribute("style", "color: red;");
error1.innerHTML = "Please enter a valid email address";

// create an input for country
var country = document.createElement("input");
country.setAttribute("type", "text");
country.setAttribute("id", "country");
country.setAttribute("placeholder", "Enter your country");

// create an input for zip code
var zip = document.createElement("input");
zip.setAttribute("type", "text");
zip.setAttribute("id", "zip");
zip.setAttribute("placeholder", "Enter your zip code");

// create a input element for password
var password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("id", "password");
password.setAttribute("placeholder", "Enter your password");

// create a input element for password
var password2 = document.createElement("input");
password2.setAttribute("type", "password");
password2.setAttribute("id", "password2");
password2.setAttribute("placeholder", "Confirm your password");

// create a input element for submit
var submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Submit");

// add all elements to the form
form.appendChild(email);
form.appendChild(document.createElement("br"));

form.appendChild(error1);

form.appendChild(country);
form.appendChild(document.createElement("br"));

form.appendChild(zip);
form.appendChild(document.createElement("br"));

form.appendChild(password);

form.appendChild(document.createElement("br"));

form.appendChild(password2);

form.appendChild(document.createElement("br"));

form.appendChild(submit);

// add the form inside the container
container.appendChild(form);

// live inline validation

// get the input elements
var email = document.getElementById("email");
var country = document.getElementById("country");
var zip = document.getElementById("zip");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

// get the error element for email
var error1 = document.getElementById("error1");

// create a function for email validation
function emailValidation() {
    // create a regular expression
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    // check if the email is valid
    if (email.value.match(pattern)) {
        email.style.border = "2px solid green";
        error1.style.display = "none";
        return true;
    } else {
        email.style.border = "2px solid red";
        error1.style.display = "block";
        return false;
    }
    }

// add event listener to email
email.addEventListener("keyup", function () {
    emailValidation();
}
);