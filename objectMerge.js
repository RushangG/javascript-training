'use strict';


let a = {
  key1: 10,
 
  key2: { x: 1, y: 1 },
  key3: 84
};


let b = {
  key4 : 2,
  key2: { z: 8 , w : 7 },
  key3: 79,
  key5: 2
};

let c = {
  key1: "hi",
 
  key2: { x: 1, y: 1 },
  key6 : { age : 25 },
  key3: 84
};


let d = {
  key4 : "hello",
  key2: { z: 8 , w : 7 , y : "hi" },
  key3: 79,
  key5: 2
};





function mergeDeep(a, b) {
 
   if (typeof a !== 'object' || typeof b !== 'object') {
    return false; // return 
  }

  for (var prop in b) {
   
    if (prop in a) { // Property exists in obj:a
      if (typeof a[prop] !== 'object') {
        a[prop] = b[prop]; // Overwrite obj:a 
      } else {
        if (typeof b[prop] !== 'object') {
          a[prop] = b[prop]; // Overwrite by  b 
        } else {
          
            
            //check both are object
           if(typeof a[prop] === 'object' && typeof b[prop] === 'object'){ 
            a[prop] = Object.assign(a[prop], b[prop]);
          } else {
            // Recursively call MergeDeep
            mergeDeep(a[prop], b[prop]);
          }
        }
      }
    } else {   // property add to a
      a[prop] = b[prop];
    }
  }
  return a;
}

let mergeObj = mergeDeep(a, b);

console.log("Merge Object a and b :-");

console.log(mergeObj);
