// Connecting HTML
document.title = "T360 Assignment"
let root = document.getElementById("root");
let br = document.createElement("br");

// Connecting CSS
let link = document.createElement( "link" );
link.href = "style.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
document.getElementsByTagName( "head" )[0].appendChild( link );

// Section 1: Creating Navbar
let navbar = document.createElement("div");

let logo = document.createElement("span");
logo.classList.add("logo");
logo.innerHTML = "Think360 Vanilla JS";

let displayUserName = document.createElement("span");
displayUserName.classList.add("displayUserName");
//displayUserName.innerHTML = "Think360 Vanilla JS";

let loginButton = document.createElement("button");
loginButton.classList.add("loginButton");
loginButton.innerHTML = "Login";

//Adding Elements to Navbar
navbar.appendChild(logo);
navbar.appendChild(displayUserName);
navbar.appendChild(loginButton);


// Section 2: Creating Home Page
let homePage = document.createElement("div");


// Section 3: Creating Form 1

let form1Div = document.createElement("div");
form1Div.classList.add("form");
form1Div.classList.add("form1Div");

let form1Heading = document.createElement("h3")
form1Heading.innerHTML = "Step 1 out of 3"

let form1 = document.createElement("form");
form1.setAttribute("method", "post");

let firstName = document.createElement("input");
firstName.setAttribute("type", "text");
firstName.setAttribute("name", "FirstName");
firstName.setAttribute("id", "firstname");
firstName.setAttribute("placeholder", "First Name");

let lastname = document.createElement("input");
lastname.setAttribute("type", "text");
lastname.setAttribute("name", "Lastname");
firstName.setAttribute("id", "lastname");
lastname.setAttribute("placeholder", "Last Name");

let phoneNumber = document.createElement("input");
phoneNumber.setAttribute("type", "number");
phoneNumber.setAttribute("name", "PhoneNumber");
firstName.setAttribute("id", "phonenumber");
phoneNumber.setAttribute("placeholder", "Phone Number");

let emailId = document.createElement("input");
emailId.setAttribute("type", "email");
emailId.setAttribute("name", "Email");
firstName.setAttribute("id", "email");
emailId.setAttribute("placeholder", "Email");

let form1Submit = document.createElement("input");
form1Submit.classList.add("form-button");
form1Submit.setAttribute("type", "submit");
form1Submit.setAttribute("value", "Next");

form1.appendChild(form1Heading);
form1.appendChild(firstName);
form1.appendChild(br.cloneNode()); form1.appendChild(br.cloneNode());
form1.appendChild(lastname);
form1.appendChild(br.cloneNode()); form1.appendChild(br.cloneNode());
form1.appendChild(phoneNumber);
form1.appendChild(br.cloneNode()); form1.appendChild(br.cloneNode());
form1.appendChild(emailId);
form1.appendChild(br.cloneNode()); form1.appendChild(br.cloneNode());
form1.appendChild(form1Submit);
                 
form1Div.appendChild(form1);


// Section 4: Creating Form 2

let form2Div = document.createElement("div");
form2Div.classList.add("form");
form2Div.classList.add("form2Div");

let form2Heading = document.createElement("h3")
form2Heading.innerHTML = "Step 2 out of 3"

let form2 = document.createElement("form");
form2.setAttribute("method", "post");

let aadhar = document.createElement("input");
aadhar.setAttribute("type", "text");
aadhar.setAttribute("name", "Aadhar");
aadhar.setAttribute("id", "aadhar");
aadhar.setAttribute("placeholder", "Aadhar No.");

let panId = document.createElement("input");
panId.setAttribute("type", "text");
panId.setAttribute("name", "Pan");
panId.setAttribute("id", "panId");
panId.setAttribute("placeholder", "Pan Card Number");

let form2Back = document.createElement("input");
form2Back.classList.add("form-button");
form2Back.setAttribute("type", "submit");
form2Back.setAttribute("value", "Back");

let form2Submit = document.createElement("input");
form2Submit.classList.add("form-button");
form2Submit.setAttribute("type", "submit");
form2Submit.setAttribute("value", "Next");

form2.appendChild(form2Heading);
form2.appendChild(aadhar);
form2.appendChild(br.cloneNode()); form2.appendChild(br.cloneNode());
form2.appendChild(panId);
form2.appendChild(br.cloneNode()); form2.appendChild(br.cloneNode());
form2.appendChild(form2Back);
form2.appendChild(form2Submit);
                 
form2Div.appendChild(form2);


// Section 5: Creating Form 3

let form3Div = document.createElement("div");
form3Div.classList.add("form");
form3Div.classList.add("form3Div");

let form3Heading = document.createElement("h3")
form3Heading.innerHTML = "Step 3 out of 3"

let form3 = document.createElement("form");
form3Div.setAttribute("method", "post");

let line1 = document.createElement("input");
line1.setAttribute("type", "text");
line1.setAttribute("name", "line1");
line1.setAttribute("id", "line1");
line1.setAttribute("placeholder", "Address Line1");

let line2 = document.createElement("input");
line2.setAttribute("type", "text");
line2.setAttribute("name", "line2");
line2.setAttribute("id", "line2");
line2.setAttribute("placeholder", "Address Line2");

let city = document.createElement("input");
city.setAttribute("type", "text");
city.setAttribute("name", "city");
city.setAttribute("id", "city");
city.setAttribute("placeholder", "City");

let states = ["Mahashtra", "Goa", "Assam", "Gujarat"]
let state = document.createElement("select");
state.setAttribute("id", "state");

for (let i = 0; i < states.length; i++) {
    let option = document.createElement("option");
    option.value = states[i];
    option.text = states[i];
    state.appendChild(option);
}

let pincode = document.createElement("input");
pincode.setAttribute("type", "text");
pincode.setAttribute("name", "pincode");
pincode.setAttribute("id", "pincode");
pincode.setAttribute("placeholder", "pincode");

let form3Back = document.createElement("input");
form3Back.classList.add("form-button");
form3Back.setAttribute("type", "submit");
form3Back.setAttribute("value", "Back");

let form3Submit = document.createElement("input");
form3Submit.classList.add("form-button");
form3Submit.setAttribute("type", "submit");
form3Submit.setAttribute("value", "Submit");

form3.appendChild(form3Heading);
form3.appendChild(line1);
form3.appendChild(br.cloneNode()); form3.appendChild(br.cloneNode());
form3.appendChild(line2);
form3.appendChild(br.cloneNode()); form3.appendChild(br.cloneNode());
form3.appendChild(city);
form3.appendChild(br.cloneNode()); form3.appendChild(br.cloneNode());
form3.appendChild(state);
form3.appendChild(br.cloneNode()); form3.appendChild(br.cloneNode());
form3.appendChild(pincode);
form3.appendChild(br.cloneNode()); form3.appendChild(br.cloneNode());
form3.appendChild(form3Back);
form3.appendChild(form3Submit);
                 
form3Div.appendChild(form3);


// Section 6: Creating Login Form


let loginDiv = document.createElement("div");
loginDiv.classList.add("form");
loginDiv.classList.add("loginDiv");

let loginHeading = document.createElement("h3")
loginHeading.innerHTML = "Login"

let login = document.createElement("form");
login.setAttribute("method", "post");

let userName = document.createElement("input");
userName.setAttribute("type", "text");
userName.setAttribute("name", "UserName");
userName.setAttribute("id", "userName");
userName.setAttribute("placeholder", "User Name");

let password = document.createElement("input");
password.setAttribute("type", "text");
password.setAttribute("name", "password");
password.setAttribute("id", "password");
password.setAttribute("placeholder", "Last Name");

let loginSubmit = document.createElement("input");
loginSubmit.classList.add("form-button");
loginSubmit.setAttribute("type", "submit");
loginSubmit.setAttribute("value", "Login");

login.appendChild(loginHeading);
login.appendChild(userName);
login.appendChild(br.cloneNode()); login.appendChild(br.cloneNode());
login.appendChild(password);
login.appendChild(br.cloneNode()); login.appendChild(br.cloneNode());
login.appendChild(loginSubmit);
                 
loginDiv.appendChild(login);




// Adding Elements to Home Page
homePage.appendChild(loginDiv);
homePage.appendChild(form1Div);
homePage.appendChild(form2Div);
homePage.appendChild(form3Div);

root.appendChild(navbar);
root.appendChild(homePage);


