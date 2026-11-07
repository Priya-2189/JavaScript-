/* alert("Hi priyanka");
window.alert("hello");
//console.dir(document.body.childNodes[1].innerText="HI");
let doc=document.getElementById("heading");
console.log(doc);
//getelement through id

let doc1=document.getElementsByClassName("hello");
console.log(doc1);
let paras=document.getElementsByTagName("h2");
console.log(paras);

let ele=document.querySelector("h2");
console.log(ele);
let elee=document.querySelectorAll("h2");
console.log(elee); */
let div=document.querySelector("div");
console.log(div);
console.dir(div);
let h1=document.querySelector("h1");
console.log(h1);
let div1=document.querySelector("div");
console.log(div1);
//getAttribute
let id=div1.getAttribute("id");
console.log(id);
let attribute=document.querySelector("p")
console.log(attribute.getAttribute("class"));
//setAttributes
console.log(attribute.setAttribute("class","p5"));
//mode.style
let div2=document.querySelector("div");
div2.style.backgroundColor="green";
div2.style.fontSize="25px";
//div2.style.visibility="hidden";
div2.innerText="Hello!";

//Creating a new button
let newbtn=document.createElement("button");
newbtn.innerText="Click me!";
console.log(newbtn);
let append1=document.querySelector("div");
append1.append(newbtn);
append1.prepend(newbtn);
append1.after(newbtn);
append1.before(newbtn);
//We can add the button at para also;
let newheading=document.createElement("h1");
h1.innerHTML="<i>HI! I am Priyanka</i>"
document.querySelector("body").prepend(h1);
//delete the node 
let p=document.querySelector("p");
p.remove();