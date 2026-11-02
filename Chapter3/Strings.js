//Strings: is a sequence of characters used to represent text
let str1="Apna College";
//length of the string
console.log(str1.length);
//indices of string this is used to retrive specific positioned charcters

console.log(str1[2]);


//Template Literals in Js
/* A way to have Embedded expressions in strings */
let sent=`This is a Template Literal`;
console.log(sent);
console.log(typeof (sent));
let obj={
    item:"pen",
    cost:10
}
console.log("The cost of",obj.item,"is",obj.cost,"rupees");
//with Template literals
let output= `The cost of ${obj.item} is ${obj.cost} rupees`;
console.log(output);
//String InterPolation
/* To create string by doing substitution of placeholders
  `stringtext${expression}stringtext`
*/
//Escape Character :\n,\t
//->\n
console .log("Priyanka\nVangala");
//->\t
let str="Priyanka\tVangala";
console.log(str.length);
//String Methods in Js are immutable
/* Has Built-in functions to manipulate a string */
//str.toUpperCase()
//str.toLowerCase()
//str.trim()
let str2="   Priyanka  ";
console.log(str2);
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.trim());
//str.slice(start,end) return part of string
//str.concat(str2) add to strings
//str.replace(searchval,newval);
//str.charAt(idx);
console.log(str2.slice(0,5));
console.log(str2.concat(str));
console.log(str2.replace("P","p"));
console.log(str.charAt(5));
