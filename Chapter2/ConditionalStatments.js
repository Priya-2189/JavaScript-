//if Statment: check the given condition
let age=25;
if(age>=25)
{
    console.log("you can vote");
}

if(age<25)
{
    console.log("You cannot vote");
}
   
//if-else Statment
//ex:
let color;
let mode="dark";
if(mode=="dark")
{
    color="black";
}
else{
    color="light";
}
console.log(color);
let num=10;
if(num%2==0)
{
    console.log("is  even");
}
else{
    console.log("is odd");
}
//else-if Statment
let mode1="dark";
let color1;
if(mode1==="dark")
{
    color1="black";
}
else if(mode1==="blue")
{
    color1="blue";
}
else if(mode1==="pink")
{
    color1="pink";
}
else
{
    color1="white";
}
console.log(color1);
//Ternary Operators
 //condition?trueo/p:falseo/p;
 let age1=25;
 let result=age>=18?"adult":"not adult";
 console.log(result);
 //Switch statment
 let day=1;
 switch(day)
 {
    case 1:
        console.log("Monday");
        break;
    case 2:
         console.log("Tuesday");
         break;
    case 3:     
         console.log("Wednesday");
         break;
    case 4:     
         console.log("Thursday");
         break;
    case 5:       
         console.log("Friday");
         break;
    case 6:       
         console.log("Saturday");
         break;
    case 7:
        console.log("Sunday");
        break;
    case 8:
        console.log("No Value find");
        break;         
           
 }