/* Prompt the user to enter their full name. Generate a
 username for them based on the input. Start the username with @,
  followed by their full name and ending with the full name's length.
  @shradhakhapra13
  */
 let s1="@";
 let name="PriyankaVangala";
 let len=name.length;
 let username=s1.concat(name);
 let fullUserName=username.concat(len);
 console.log(fullUserName);