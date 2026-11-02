//for Loop : subsequently used this loop
// Initialization : Stopping Condition: Increment
for(let i=0;i<=5;i++)
{
    console.log("Sri Vasavi Engineering");
}
//Calculate sum of 1 to 5:
/*  here let is block scope means 
 its scope is inside the block only . */
let sum=0;
for(let j=1;j<=5;j++)
{
 sum=sum+j;
}
console.log(sum);
//Infinite Loop the loop which does not end 

//While Loop: inside the paranthesis we have stopping condition
/* If the condiotn is not true the loop does not start like as do-while */
let i=1;
while(i<=5)
{
    console.log("Priyanka Vangala");
    i++;
}
//Do-While Loop: The Loop runs Atleast once
let j=5;
do{
    console.log("Hello Wolrd!");
    j++;
}while(j<=10)
//For-of Loop: used for Arrays and Strings
//for(let val of strval)  
let str="Apna College";
let size=0;
for(let i of str)
    {
        console.log("i=",i);
        size++;
    }  
    console.log("String Size",size);
//for-in Loop used in Arrays and objects.
let st={
    name:"Pasha",
    age:24,
    cgpa:9.5,
    isPass:true

}
for(let k in st)
{
    console.log("Key",k,"Value",st[k]);
}
