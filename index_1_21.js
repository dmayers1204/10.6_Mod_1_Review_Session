// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given ab array of numbers and a given target. return the target if it's in the array or undefined if it's not
function getTarget(arr,target){
    let eleTarget = null;
    for(let ele of arr){
    if(ele === target){
        eleTarget = ele;
        return eleTarget;
      }
    }
    return undefined; 
  }

  console.log(getTarget([1,2,3,4,5,6],6));
  console.log(getTarget([5,6,7,8,9],7)); 


// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14
function greaterThan14(arr){
    return arr.find((ele)=> ele > 14);  
}
console.log(greaterThan14([3,4,5,6,7,17]));
console.log(greaterThan14([3,4,5,19,7,8]));



// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found



// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/


// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/