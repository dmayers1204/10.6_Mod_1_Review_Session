// Create a new file in your local review sessions git repo.
// Copy the prompts at the end of this message to the new file
// add, commit and push BEFORE solving anything
// Start working on the first question on your own without using external resources. If you get stuck, call me over right away!
// // 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.

    function newCapString(str){
        let strArr = strArr.split(' ');
         for (let i = 0; i < strArr.length; i++) {
           strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1); 
            
             }   
           
            return strArr.join(' ');
       }
         
     
// 2.----------------------------------
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 





const john = {
  firstName: "John",
  lastName: "Klaus",
  occupation: "Carpenter"
}

const rebecca = {
  firstName: "Rebecca",
  lastName: "Cohen",
  occupation: "Teacher"
}

console.log(formatGreeting(john) === "Hello John Klaus, have a great day at your job as a Carpenter")

console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher")

// 3.----------------------------------
// Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.

/* Example Object
{
  id: "Tfjso_4M"
  firstName: "John",
  lastName: "Klaus",
  occupation: "Carpenter"
}











Message 10-6_mod_1_review









