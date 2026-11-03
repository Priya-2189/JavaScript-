/* Mehtods of Arrays in Js 
   1.Push():add to end.
   2.pop():delete from end &return.
   3.toString():converts array to string.
   4.concat():joins the 2 arrays &return result
   5.unshift():add to start
   6.shift():delete from start&return 
   7.slice():return a piece of the Array
      slice(startidx,endidx);
   8.splice():change original array(add,remove,replace)   
*/

//Push
let items=["pen","pencil","eraser","sharpner"];
console.log(items);
items.push("Scale");
console.log(items);
//Pop()
console.log(items.pop());
console.log(items);
//toString()
console.log(items.toString());
//Concatenation
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let vegetables = ["Carrot", "Potato", "Tomato", "Onion", "Spinach"];
console.log(fruits.concat(vegetables));
//unshift is equal to push: delete the present first value and add the new value
fruits.unshift("grapes");
console.log(fruits);
//shift delete the first value;
console.log(fruits.shift());
let fruits1 = ["Apple", "Banana", "Mango", "Orange", "Grapes"]
console.log(fruits1.slice(0,2));
console.log(fruits1.slice(1));
console.log(fruits1.slice(-1));
console.log(fruits1.slice());
//Splice(): 
let a2=[1,2,3,4,5];
//Add
a2.splice(1,0,101)
console.log(a2);
//delete
a2.splice(3,1);
console.log(a2);
//replace
a2.splice(3,0,102);
console.group(a2);





