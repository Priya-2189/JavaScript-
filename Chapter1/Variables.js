//Console:use to print the msg  to the console
/* console.log("Apana College");
console.log("I love Java Script"); */
//Variables :are containers for data.
/*js is Dynamically  typed Language mean what kind 
 of data is storing in the varibales is not known;*/
/*1.varibales names are case sensitive like a & A are different
  2.only letter ,digits,underscore and $ are allowed
  3.only a letter ,underscoreor $should be first character.
  4.Reserved words cannot be variable names.
   full-name=kelab case;
   full_name=snakecase;
   fullName=camelcase; //we use this
*/
 name="Priyanka";
age=22;
price=15.25;
x=null;
y=undefined;
isFollow=false;

console.log(name);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
/*How to define the Variables
 let and const are moslty used.
 let: variable cannot be redeclared but can be updated.Ablock scope variable.
 const: variable cannot be redeclared or updated.A block scope variable.
 var is used in 2015:variable can be redeclared & updated.A global scope variable.

*/
let Name1="Pasha";// let connot be intialized.
Name1="chandu";
console.log(Name1);
console.log(age); 
 const Name="Pasha";
Name="chandu";
console.log(Name);
{
    let Name="Pasha";// let connot be intialized.
Name="chandu";
console.log(Name);


}
{
    let Name="Pasha";// let connot be intialized.
Name="chandu";
console.log(Name);


}
