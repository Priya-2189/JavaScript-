/* Q1:Qs. Create a new button element. Give it a text “click me”, 
background color of red & text color of white.
Insert the button as the first element inside the body tag. */

let newbtn=document.createElement("button");
newbtn.innerText="Click Me!";
newbtn.style.color="white";
newbtn.style.background="red";
document.querySelector("body").append(newbtn);
/* Q2:
Qs. Create a <p> tag in HTML, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Did you notice how you overwrite the class name when you add a new one? Solve this problem using classList. */



let p=document.querySelector("p");
p.classList.add("newclass");