//1. tuple types
 //A tuple is a special type of array with a fixed number of elements whose types are known and the 
 // the types can be different

 let user :[string,number] = ["sourav",23];

 //readonly tuple
 const x : readonly [number,number] = [1,3];
 //x.push(5) ==> throw an erro as x is readonly

 let y = ["sourav",21] as const;

 //tuple with optional elements
 let tupleWithOptionalElements:[number,number?] = [1]

 //when to use tuples?
 //fixed structure data like longitude and latitude,color pattern

 //-----------------------------------------------------------------------------------------------------------
 // 2. enums
 //An enum (short for “enumeration”) is a feature in TypeScript that allows you to define a set of named constants.
 // Enums provide a way to give more meaningful names to sets of numeric or string values.
 //types of enums : numeric enums, string enums, heterogenious enums, mixed enums

 enum Direction{
    Up , // can be initialize to any number and the remaining will be auto incremented
    Down,
    Left,
    Right
 }
 console.log(Direction.Up) // ---> 1
 console.log(Direction[0]) //----> "Up"

 enum Status{
    Yes = "Yes",
    No = "No"
 }
 console.log(Status.Yes)  //---> "Yes"

 //status codes
 enum StatusCode{
    Sucess  = 200,
    BadRequest = 500,
    NotFound = 400
 }
 console.log(StatusCode.NotFound);

 //---------------------------------------------------------------------------------------------------------

//3. any
//-------
// The TypeScript any type allows you to store a value of any type. 
// It instructs the compiler to skip type-checking.
//use case : when working with dynamic data like JSON from an API
//(noImplicityAny in ts.config will allow not to use any as implicit)
let value : any = 32;
value = "sourav"; //no error
value = {a : 1}; //no error

 //---------------------------------------------------------------------------------------------------------/

//4. unknown
//=> similar to any but more type safe . you must narrow the type before using it.
//=> use case : Useful for APIs or dynamic content where you first need to verify the type 
let data : unknown = "hello";
if(typeof data === "string"){
    console.log(data.toUpperCase())
}else if(typeof data === "number"){
    console.log(data.toFixed())
}

//---------------------------------------------------------------------------------------------------------

//5. void
//=> used for functions that does not return a value
function greet(message : string) : void {
    console.log(message)
}

 //---------------------------------------------------------------------------------------------------------

//6. never
// => never is used as a return type for functions that never finish or return (like errors or infinite loops).
//You cannot assign any value to a variable of type never.
function throwError(message : string):never{
   throw new Error(message)
}

 //---------------------------------------------------------------------------------------------------------

//7.null and undefined
//=> special types for null and undefined values.can be explicitly assigned when strictNullChecks is off.
//=> Use case : Represents absence of values
let a : null = null
let b : undefined = undefined

 //---------------------------------------------------------------------------------------------------------

//8. object
//=> Represents non-primitive datatypes (eg : array, objects,functions)
//=> broadly type any structured data
let obj : object ={a: 1}

 //---------------------------------------------------------------------------------------------------------

//9.Union types
//=> A TypeScript union type allows you to store a value of one or several types in a variable.
let numOrString : number | string;

 //---------------------------------------------------------------------------------------------------------

 //
