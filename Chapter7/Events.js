 let btn=document.getElementById("btn");
/*btn.onclick = () => {
    alert("btn was clicked");
    let a=25;
    a++;
    console.log(a);

}
let btn=document.getElementById("btn");
btn.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    let a=25;
    a++;
    console.log(a);
} */
//addEventListener
/* btn.addEventListener("click",()=>{
    console.log("btn1 was clicked");
})
btn.addEventListener("click",(e)=>{
    console.log("btn1 was clicked-handler2");
    console.log(e);
    console.log(e.type);
}) */
let div=document.getElementById("div1");
div.onmouseover=()=>
{
   alert("Button was double clicked");
}
//AddEventremove
btn.addEventListener("click",()=>{
    console.log("btn1 was clicked-handler1");
})
btn.addEventListener("click",()=>{
    console.log("btn1 was clicked-handler2");
})
const handler3=()=>
{
     console.log("btn1 was clicked-handler3");
}
btn.addEventListener("click",handler3)
btn.addEventListener("click",()=>{
    console.log("btn1 was clicked-handler4");
})
btn.removeEventListener("click",handler3);