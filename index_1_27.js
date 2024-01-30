// 1. Write a function that takes in an array and returns an object where each element in the array is a key, and the values are the number of times each element appears in the array -

function transformArrToObj(arr){
    const transformedObj = {}; 
    for (let i = 0; i < arr.length; i++){
        if(!transformedObj[arr[i]]){
        transformedObj[arr[i]] = 1; 
        }else{
        transformedObj[arr[i]] += 1;  

        }
    }
    return transformedObj; 
} 
console.log(transformArrToObj(["apple", "orange", "apple", "banana", "apple", "orange"]));
// Example:
// ["apple", "orange", "apple", "banana", "apple", "orange"]
// { apple: 3, orange: 2, banana: 1}

// ------------------------------------------------------------------------

// 2. Write a function that takes an object and a property name (key), and returns the value of the property. If the property doesn't exist in the object return an error message

function returnValFromObj(obj,key){
 
    if(obj[key]){
        return obj[key];
    }else{
        return "An error message, property doesn't exist."
    }
}
console.log(returnValFromObj({ apple: 3, orange: 2, banana: 1},"apple"));

// ------------------------------------------------------------------------

// 3. Given a person object, update their street to the new given street. The person object will have these properties -



const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};



person.address['street'] = '456 North St' 
console.log(person); 

// ------------------------------------------------------------------------

// 4. Given the following object, preform the following tasks -
//   a. Log the desk of the second software engineer in the development department
//   b. Log the location of the head of the marketing department
//   c. Log the name of the CEO's executive assistant
//   d. Add yourself as a third software engineer to the development office
//   e. Update the name of the head of marketing to "Johann Marketer"



const companyOrganizationalStructure = {
  companyName: "TechCorp",
  CEO: {
    name: "John CEO",
    office: {
      location: "Floor 10, Building A",
      employees: {
        executiveAssistant: {
          name: "Alice Executive",
          desk: "A101",
        },
      },
    },
  },
  departments: {
    development: {
      head: {
        name: "Bob Head",
        office: {
          location: "Floor 8, Building B",
          employees: {
            softwareEngineer1: {
              name: "Charlie Engineer",
              desk: "B801",
            },
            softwareEngineer2: {
              name: "David Coder",
              desk: "B802",
            },
          },
        },
      },
    },
    marketing: {
      head: {
        name: "Eva Marketer",
        office: {
          location: "Floor 6, Building C",
          employees: {
            marketingSpecialist1: {
              name: "Frank Specialist",
              desk: "C601",
            },
            marketingSpecialist2: {
              name: "Grace Promoter",
              desk: "C602",
            },
          },
        },
      },
    },
  },
};

  
   console.log(companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer2.desk); 

   console.log(companyOrganizationalStructure.departments.marketing.head.office.location);

   //console.log(companyOrganizationalStructure.)





// ------------------------------------------------------------------------

// 5. Given the following variables, create a new object. the key variable should be the key and the value variable should be it's corresponding value. You have to use the variables!

const key = "name";
const value = "Roberto Robertson"

newlyObj = { [key] : value};

// 6. Write a function that takes an object as it's only parameter and logs each property to the console. The function ONLY LOGS

const questionSixObj = { place : "Pursuit", address: "30 Wall Ave", students: 10000};

function onlyLogsEachProperty(obj){
    for (const prop in obj)    
console.log(prop);
}
onlyLogsEachProperty(questionSixObj);
// ------------------------------------------------------------------------

// 7. Write a function that takes two objects and checks if they have the same values. HINT: use the (for.. in..) loop

const sampleObject = {
    name: 'John Wall',
    age: 30,
    city: 'Brooklyn',
  };

  const sampleObject2 = {
    name: 'John Wall',
    age: 30,
    city: 'Brooklyn',
  };

function checkForSameValues(obj1,obj2){
for (const prop in obj1){ 
if(obj1.hasOwnProperty(prop) && obj2.hasOwnProperty(prop)){
    if(obj1[prop] === obj2[prop]){
return true; 
        }
     }
    }
   return false; 
}
console.log(checkForSameValues(sampleObject,sampleObject2));
// ------------------------------------------------------------------------