/*Q1:Create a toggle button that changes the screen to dark-mode when clicked &ight-mode
when clicked again */
let modebtn=document.getElementById("mode");
let curr="Light";
modebtn.addEventListener("click",()=>{
    if(curr=="Light")
    {
       curr="black"
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        curr="Light"
        document.querySelector("body").style.backgroundColor="white";
    }  
    
});