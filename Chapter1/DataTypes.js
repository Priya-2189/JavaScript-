/* DataTypes in JS:
Primitive DT:
    1.Number: let age=24;
    2.String name="pasha"
    3.boolean isFollow=false/true;
    4.undefined: initial in let type the the data is undefined;
    5.Null is absence of object ->let x=null; type of x : object
    6.BigInt->output like let x=BigInt("12")->12n   
    7.Symbol

Non-Primitive:
    1.Arrays
    2.Functions
    3.objects ->collection of values
    store key value pairs.
     example:
    
    */
   // for const object key can be changeable but  not variables
    const st= {
      age:23,
      name:"priya",
      cgpa:7.35
     } ;
st["age"]=st["age"]+1;     
console.log(st);
console.log(st.name);
console.log(typeof(st));
console.log(st["age"]);