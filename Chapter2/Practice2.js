//Get user to input a number using prompt("Enter a number").check is the number is multiple of 5 or not.
//ex:
/* let name=prompt("Hello")
console.log(name); */
/* let num=prompt("Enter a number:");
/* if(num%5==0)
{
    console.log(num,"Number is multiple of 5");
}
else{
    console.log(num,"Number is not multiple of 5");
} */ 
/* //Q2:Write a code which can give grades to students according to their scores:
90-100 ,A
70-89,B
60-69,C 
50-59,D 
0-49,F  */
let score=prompt("Enter the score:");
if(score>=90&& score<=100)
{
    console.log("A");
}
if(score>=70&& score<=89)
{
    console.log("B");
}
if(score>=60&& score<=69)
{
    console.log("C");
}
if(score>=50&& score<=59)
{
    console.log("D");
}
if(score>=0&& score<=49)
{
    console.log("F");
}
