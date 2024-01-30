// Create a new file in your local review sessions git repo.
// Copy the prompts at the end of this message to the new file
// add, commit and push BEFORE solving anything
// Start working on the first question on your own without using external resources. If you get stuck, call me over right away!
// // 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.

    function capEachWordInString(str){
        // let strArr = strArr.split(' ');
        //  for (let i = 0; i < strArr.length; i++) {
        //    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1); 
            // strArr.join(' ');
        return str.split(' ').map((ele) => ele[0].toUpperCase() + ele.slice(1).toLowerCase()).join(' ');
               
         }   
        
         console.log(capEachWordInString("hello world")); 
     
// 2.----------------------------------
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 

function formatGreeting(obj) {
return `Hello ${obj.firstName} ${obj.lastName}, have a great day at your job as a ${obj.occupation}` 
} 




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

console.log(formatGreeting(john));

console.log(formatGreeting(rebecca));

// 3.----------------------------------
// Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.

/* Example Object
{
  id: "Tfjso_4M"
  firstName: "John",
  lastName: "Klaus",
  occupation: "Carpenter"
}
*/


const arrayOfObjects = [
    {
      id: "Tfjso_1M",
      firstName: "John",
      lastName: "Klaus",
      occupation: "Carpenter"
    },
    {
      id: "Tfjso_2M",
      firstName: "John",
      lastName: "Klaus",
      occupation: "Carpenter"
    },
    {
      id: "Tfjso_3M",
      firstName: "John",
      lastName: "Klaus",
      occupation: "Carpenter"
    },
    {
      id: "Tfjso_4M",
      firstName: "John",
      lastName: "Klaus",
      occupation: "Carpenter"
    },
    {
      id: "Tfjso_5M",
      firstName: "John",
      lastName: "Klaus",
      occupation: "Carpenter"
    },
    {
      id: "Tfjso_6M",
      firstName: "John",
      lastName: "Klaus",
      occupation: "Carpenter"
    },
    {
      id: "Tfjso_7M",
      firstName: "John",
      lastName: "Klaus",
      occupation: "Carpenter"
    },
    {
      id: "Tfjso_8M",
      firstName: "John",
      lastName: "Klaus",
      occupation: "Carpenter"
    },
    {
      id: "Tfjso_9M",
      firstName: "John",
      lastName: "Klaus",
      occupation: "Carpenter"
    }];
    
  

function targetStr({firstName,lastName,occupation,id},targetId){
if(id === targetId ){
return `Hello ${firstName} ${lastName}, have a great day at your job as a ${occupation}` 
  }
};

console.log(targetStr('Tfjso_9M'));