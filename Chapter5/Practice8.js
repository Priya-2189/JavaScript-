/*
  For a given array of numbers,print the square of each value using the forEachLoop.

*/
let arr=[1,2,3,4,5,6];
arr.forEach((num)=>
{
    console.log(num*num);
})
let cal=(num)=>
{
     console.log(num*num);
};
arr.forEach(cal);

