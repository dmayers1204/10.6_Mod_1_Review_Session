1. function getTarget(arr,target){
    let eleTarget = null;
    for(let ele of arr){
    if(ele === target){
        eleTarget = ele;
        return eleTarget;
      }
    }
    return undefined; 
  }

2. function greaterThan14(arr){
    return arr.find((ele)=> ele > 14);  
}

3. function returnFirstStr(arr){
    for(let ele of arr){
       if (ele.length > 4){
        return ele;
       } 
    }
    return undefined; 
}

4. function greaterThan14(arr){
    return arr.find((ele)=> ele > 14);  
return arr.find((ele)=> ele > 14 ? ele : undefined) 
}

5. 



// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
const arrWitObjs1 = [{
    id: "Y42C_a",
    name: "Robert",
    occupation: "Chef",
    eyeColor: "green"
   },
   {
       id: "Y42C_b",
       name: "Ralph",
       occupation: "Chef",
       eyeColor: "orange"
      },
      {
       id: "Y42C_c",
       name: "Ronny",
       occupation: "Chef",
       eyeColor: "yellow"
      },
      {
       id: "Y42C_d",
       name: "Robby",
       occupation: "Chef",
       eyeColor: "red"
      },
      {
       id: "Y42C_e",
       name: "Rick",
       occupation: "Chef",
       eyeColor: "blue"}];

function nameWithObj(arr,targetid){
     const obj = {}; 
    for(let ele of arr) {
        if(ele.id === targetid){
         
         return {name:ele.name} 
         
         }
       }
       return undefined; 
    } 
    // console.log(nameWithObj(arrWitObjs1, "Y42C_a"));
    // console.log(nameWithObj(arrWitObjs1, "Y42C_c"));
/*

{
 name: "Robert"
}
*/
