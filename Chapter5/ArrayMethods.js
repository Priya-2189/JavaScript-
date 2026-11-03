/* 
  Map:similar to foreach
 *Creates a new array with the result of some operation.
   The value its callback return are used to form new array.
*/
let arr=[25,56,45];
let num=arr.map((val)=>{

   return val;
});
console.log(num);
/* Fliter->Creates a new array 
of elements that give true for a conditionfilter. */
let str=[1,2,3,4,5,6,7,8,9,10];
let even=str.filter((val)=>
{
    return val%2==0;
});
console.log(even);

/* Reduce:
*Preform some operations &reduce the array to a single value.
 It returns that single value
*/
let a1=[1,2,3,4];
let output=a1.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);
let output1=a1.reduce((res,curr)=>{
    return res>curr?res:curr;
});
console.log(output1);