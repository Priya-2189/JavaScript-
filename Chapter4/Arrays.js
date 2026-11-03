/* Arrays:Collection of Objects ->linear
   ex:
   let arr=["a1","a2"]->number string,boolean;
*/
//ex:Numbers
let arr=[52,63,96,78];
console.log(arr);
//ex:Strings
let friuts=["Mango","Grape","apple"];
console.log(friuts);
console.log(typeof friuts);
//Array Indices
let marks=[85,96,75,65,87,36,0];
console.log(marks[0]);
console.log(marks[5]);
console.log(marks[10]);
marks[0]=90;
console.log(marks[0]);
//Arrays are mutable means can be changeable
/* Looping over an Array: print all the elements from the array 
*/
let a1=["A","B","C","D","E"];
for(let i=0;i<a1.length;i++)
{
   console.log(a1[i]);
}
for(let j of a1)
{
   console.log(j);
}
