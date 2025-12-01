'use strict';

//object declaration
let obj = {
  name: "John",
  age: 30,
  isAdmin: true,
  phone : null,
  city : undefined,
  state : ""
};

let obj2 = {
  name: "",
  age: 30,
  isAdmin: true,
  phone : 9589654895,
  city : undefined,
  state : ""
};

let obj3 = {
  name: "John",
  age: 30,
  isAdmin: undefined,
  phone : null,
  city : undefined,
  state : ""
};

  console.log("Before sanitizer object: ");
   
  console.log(obj3);
    

//funcion  for cleanup

function sanitize(obj){
  
    let removeCount = 0;  //count removed key
  
  for(var key in obj) {
    
    if(obj[key] === null || obj[key] === undefined || obj[key] === ""){
      
        delete obj[key];   // delete the key
         removeCount++;
    }
  }
   return removeCount;  
}

  
//function call 
let count = sanitize(obj3);

//output
  console.log(`The number of removed key:- ${count}`);

  console.log("After sanitizer object: ");
  console.log(obj3);

