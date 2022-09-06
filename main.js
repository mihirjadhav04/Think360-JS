// Connecting HTML
document.title = "T360 Assignment"
let root = document.getElementById("root");

// Connecting CSS
var link = document.createElement( "link" );
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
form1Div.classList.add("form1Div");

let form1Heading = document.createElement("h3")
form1Heading.innerHTML = "Step 1 out of 3"

let form1 = document.createElement("form");
form1.setAttribute("method", "post");

let firstName = document.createElement("input");
firstName.setAttribute("type", "text");
firstName.setAttribute("name", "FirstName");
firstName.setAttribute("placeholder", "First Name");


form1.appendChild(form1Heading);
form1.appendChild(firstName);
                 
form1Div.appendChild(form1);

// Adding Elements to Home Page
root.appendChild(navbar);
root.appendChild(form1Div);


