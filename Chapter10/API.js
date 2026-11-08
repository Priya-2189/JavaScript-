const URL="https://api.thecatapi.com/v1/images/search";
const fact=document.querySelector("#para");
//let promise=fetch(URL);
const btn=document.querySelector("#btn");

//console.log(promise);
const getimg=async()=>{
     console.log("Getting data....");
    let promise= await fetch(URL);
    console.log(promise.status);
    let data = await promise.json();
    fact.innerText=data[0].url;
};

let pro=fetch(URL,{method:"GET"});
console.log("Hello",pro)
btn.addEventListener("click",getimg);