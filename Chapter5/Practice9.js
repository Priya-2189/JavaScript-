/* Q1:We are given arrayof marks of student.filter out of the marks of student that scored 90+

*/
let marks=[87,96,65,78,94,100];
let output=marks.filter((val)=>
{
  return val>90;
});
console.log(output);
/*Q2:Take a number n as input from user. Create an array of numbers from 1 to n.

Use the reduce method to calculate the sum of all numbers in the array.
Use the reduce method to calculate the product of all numbers in the array.  */

let n=prompt("Enter the number");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}
let output1=arr.reduce((res,curr)=>
{
  return res+curr;
});
console.log(output1);
let output2=arr.reduce((res,curr)=>
{
  return res*curr;
});
console.log("factoiral",output2);