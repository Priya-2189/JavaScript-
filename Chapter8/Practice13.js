/* Qs 1. You are creating a website for your college.
 Create a class User with 2 properties, name & email.
  It also has a method called viewData() that allows user to view website data.
*/
/*
Qs 2. Create a new class called Admin which inherits from User.
 Add a new method called editData to Admin that allows it to edit website data. */
let Data="This is secret Information";
class User{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    viewData()
    {
        console.log("Website conatains ",Data);
    }
}
class Admin extends User{
    editData()
    {
        Data="Some new user is Added";
        console.log(Data);
    }
}
let obj=new User("Pasha","Pasha@gmail.com");
let obj1=new User("Priya","Priya@gmail.com");
obj.viewData();

let admin=new Admin("PriyaPasha","PriyaPasha@gmail.com");
admin.editData();



