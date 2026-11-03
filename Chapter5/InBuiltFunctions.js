/* ForEach Loop in Arrays 

Methods can be functions 
methods can be associated with the datastructures,objects.
arr.forEach(callbackfunction)
*callbackfunction:here it is a function to execute for each element in the array
*A callback is a function passed as an argument to anothr function.

*/
let arr=[1,2,3,4,5,6];
let str=["Priya","Pasha","sai"];
arr.forEach(function printVal(val)
{
    console.log(val);
})
str.forEach(function printVal(sr)
{
    console.log(sr);
})
arr.forEach((val,idx,arr)=>
{
    console.log(val,idx,arr);
})
/* Higher Order Function 
  *Takes input as another function and return it as output
 ex:
 str.forEach(function printVal(sr)
{
    console.log(sr);
})
*/

