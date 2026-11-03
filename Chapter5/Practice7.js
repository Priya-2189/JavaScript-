/* Create a function using the “function” keyword that takes a String as an argument and returns the number of vowels in the string.
*/
let count=0;
function countvowels(str)
{
    for(const char of str)
    {
        if(char =="a"||char=="e"||char=="i"||char=="o"||char=="u")
        {
            count++;
        }
    }
    console.log(count);
  
}
countvowels("Priyanka");

/*Create an arrow function to perform the same task. */
let c=0;
const countvowels1=(str)=>
{
    for(const char of str)
    {
        if(char =="a"||char=="e"||char=="i"||char=="o"||char=="u")
        {
            c++;
        }
    }
    console.log(c);
  

}
countvowels1("Pasha");