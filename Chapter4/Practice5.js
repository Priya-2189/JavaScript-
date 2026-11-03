/*Q1:For a given array with marks of students 
→ [85, 97, 44, 37, 76, 60], find the average marks of the entire class. */
let st=[85,97,44,37,76,60];
let sum=0;
for(let j of st)
{
    sum+=j;
}
console.log(sum/st.length);
/* Q2:For a given array with prices of 5 items → [250, 645, 300, 900, 50]. All items have an offer
  of 10% OFF on them. Change the array to store the final price after applying the offer.
*/
let items=[250,645,300,900,50];
let idx=0;
for(let j of items)
{
   console.log(`value at index ${idx}=${j}`);
   let offer=j/10;
   items[idx]=j-offer;
   console.log(`value after offer ${items[idx]}`)
   idx++;

}
