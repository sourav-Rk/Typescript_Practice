//infer types
let str = "hello";
let num = 1;
let numArr = [1,2,3];

//contextual typing
document.addEventListener('click',function(evnent){
    console.log(evnent.button)  //TypeScript sees "click" and knows the callback will receive a MouseEvent.
});

function logUser(user : {name : string, age : number}){
    console.log(user.name)
}
logUser({name :"sourav",age : 21});

//function eg: of contextual typing
//const fn = (x) => x*2; --> it will throw an error because x has type any
const double : (x : number)=>number = (x) => x*2;

//--------------------------------------------------------------------------------------------------

//string literal
//=> A TypeScript string literal type defines a type that accepts specified string literal.
let cat : "cat";
cat = "cat"; //valid
//cat ="dog" //not valid

const animal = "dog" //string literal with type dog


//---------------------------------------------------------------------------------------------------------

//type aliases
//=> a type alias allows you to create a custom name for a type.type alias are defined using the type keyword.
//=> Use type aliases to define new names for existing types.

//primitive alias
type ID = number;
let userId : ID = 123

//object type alias
type UserType ={
   name : string;
   age : number;
}
const person1 : UserType ={name :"sourav",age : 21};

//union type alias
type status = "Rejected" | "success" | "pending";
let currStatus : status = "pending";

//function type alias
type Greet = (name : string)=>string;
const greetUser : Greet = (name) => `hello ${name}`;

//example to draw a shape
type Points ={
    x : number;
    y : number;
}

type Shape = 
     | {kind : "circle",radius : number}
     | {kind : "square", sideLength : number};

type Draw = (shape : Shape,origin : Points) => void;

//intersection type
type Personal ={
    name : string;
    age : number;
}

type Contact ={
    mobile : string;
    email : string;
}

type Candidate = Personal & Contact;  //intersection types

const candidate : Candidate ={
    name : "sourav",
    age : 21,
    mobile : "7736903640",
    email : "sourav@gmail.com"
}

//---------------------------------------------------------------------------------------------------------
