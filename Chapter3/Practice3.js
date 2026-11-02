//Q1:Print all even numbers from 0 to 100
for(let i=0;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}
/* Q2. Create a game where you start with any random game number.
  Ask the user to keep guessing the game number until the user enters the correct value. */
  let num=25;
  let usernum=prompt("Guess the game number");
  while(usernum!=num)
  {
    console.log("Enter number is not matched");
    usernum=prompt("Guess again");
  }
  console.log("Congratulations,you entered the right number");