/* Functions in Js
  Block of code that preform specific task ,
  can be invoked whenever needed
  js have some built in functions
 Function ->by using the function the we can reduce the reduandency
*/

function myfunction1()
{
    console.log("Hello world!,My Name is priyanka");
}
myfunction1();
//Function with Parameter
function myfunction(msg)
{
    console.log(msg);
}
myfunction("I love priya");

//to calculate sum of 2 numbers

function sum (a,b)
{
  console.log(a+b);
}
sum(9,10);

//Arrow Functions:Compact way of writing a function.
/* 
  const function=(parm1,param2)=>{
    logic
    }
 */
let arrowFunc=(a,b)=>
{
  console.log(a*b);
};
arrowFunc(8,6);




















