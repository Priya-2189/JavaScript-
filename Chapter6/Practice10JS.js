/* Q1:Create an H2 heading element with text "Hello JavaScript".
 Append "from Apna College students" to this text using JavaScript.

Q2:Create 3 divs with the common class name "box". 
Access them and add some unique text to each of them. */
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText + "  Sri Vasavi Engineering College Student";
let divs=document.querySelectorAll(".box");
divs[0].innerText="Hi";
divs[1].innerText="Priyanka";
divs[2].innerText="Vangala"
