'use strict';
//Ajv JSON schema validator
const Ajv = require("ajv");

//Declaration Of Schema

const schema = {
   type: "object", 
   properties: {
        name: { type: "string",  minLength: 2 },
        age: { type: "number", minimum : 0, maximum: 120 },
        active: { type: "boolean" },
        address: {
            type: "object",
            properties: {
                city: { type: "string" },
                pin: { type: "string" }
            },
           
            required: ["city"],
            additionalProperties: false
        }
        
    },
    
    required: ["name", "active"],
     additionalProperties: false
};
// Input data
const data = {
    name : "Rushang",
    age : 21,
    active : false,
    address :{
        city : "Surat",
        pin : "394150"
    }
};

const data1 = {
    name : "Jay",
    age : 25,
    active : false,
    address :{
        city : "Nadiad",
        pin : "294450"
    }
};

const data2 = {
    name : "Tej",
    age : 10,
    active : true,
    address :{
        city : "Ahmedabad",
        pin : ""
    }
};

//ajv Initialized
const ajv = new Ajv();


//function for checking input data validation
function validate(data, schema){

   const validate = ajv.compile(schema);

    const isValid = validate(data);

    if (isValid) {
        console.log("User data is valid!");
         
     
    } else {
       console.log("Validation failed:", validate.errors);

}
}

// function call for validation
validate(data, schema);



