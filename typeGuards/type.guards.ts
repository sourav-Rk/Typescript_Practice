//type of
type alphaNumeric = number | string;

function typeGuardExample(a : alphaNumeric, b : alphaNumeric) {
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }else if(typeof a === "string" && typeof b === "string"){
        return a + b
    };
    throw new Error("invalid data types")
};

console.log(typeGuardExample(4,5))
console.log(typeGuardExample("good","morning"))
console.log(typeGuardExample(4,"soo"));


//instance of
// => The instanceof operator in JavaScript (and TypeScript) is used to check if an object is an 
// instance of a specific constructor or class. It returns a boolean (true or false).

class Human{
    constructor(private name : string){}
};

const human = new Human("sourav");
console.log(human instanceof Human);

const today = new Date();
console.log(today instanceof Date); //true
console.log(today instanceof Object); //true
console.log(today instanceof Array); //false

//in
// => The in operator carries a safe check for the existence of a property on an object.
//  You can also use it as a type guard.
class Customer{
    isCreditAllowed() : boolean{
        return true
    }
}

class Supplier{
    isInShortList() : boolean{
        return true;
    }
}

type BussinessPartner = Customer | Supplier;

function signContract(partner : BussinessPartner) : string {
    let message : string;
    if('isCreditAllowed' in partner){
         message = partner.isCreditAllowed() ? "sign a new contract" :"credit issue";
    }else{
        message = partner.isInShortList() ? "shortlisted" : "not shortlisted";
    }
    return message;
}


//=-----------------------------------------------------------------------------------------------
//User defined type guards
