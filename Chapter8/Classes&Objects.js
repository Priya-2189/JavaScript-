class Cars
{
    constructor(brand,mileage)
    {
        this.brand=brand;
        this.mileage=mileage;
        console.log("Creating new object");
    }
    start()
    {
        console.log("Start");
    }
    stop()
    {
        console.log("Stop");
    }
    setBrand(brand){
        this.brand=brand;
        console.log(brand);
    }
}
let obj= new Cars("Fortuner",100);
console.log(obj);

obj.setBrand("Lexus");

//Inheritance:
class Person
{
    constructor(name)
    {
        this.name="Priya";
        this.species="Homosapiens";
    }
    eat()
    {
        console.log("A person can eat");
    }
    sleep()
    {
        console.log("A person can Sleep");
    }
}
class Engineer extends Person
{
    constructor(name)
    {
        super(name);
       // this.branch= branch;
    }
    work()
    {
        super.eat();
        console.log("Engineer can work,solve build solutions");
    }

}
let obj1=new Engineer("CSE");
obj1.eat();
obj1.sleep();
obj1.work();
//Error Handling
let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
try{
    console.log(a+c);
}
catch{
    console.log("c is not defined in this program");
}
console.log(a+b);
console.log(a^b);
console.log(a*b);
console.log(a/b);