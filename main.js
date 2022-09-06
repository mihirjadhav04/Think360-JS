document.title = "T360 Assignment"

//Connecting CSS
var link = document.createElement( "link" );
link.href = "style.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
document.getElementsByTagName( "head" )[0].appendChild( link );

//Connecting HTML
let root = document.getElementById("root");
let home = document.createElement("div");
let p = document.createElement("p");
p.innerHTML = "Paragraph";
home.appendChild(p)
root.appendChild(home)

