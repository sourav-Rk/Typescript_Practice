//add two or three numbers
function add2or3(a : number,b:number) : number;
function add2or3(a : number, b: number,c : number) : number;
function add2or3(a : number, b: number, c ?: number) : number {
    if(c) return a + b + c;
    else return a + b;
}


// Create a function `format` that:
// - accepts a string and returns it in uppercase
// - accepts a number and returns it as a string with a dollar sign
function format(str : string | number) : string{
    if(typeof str === "string"){
       return str.toUpperCase();
    }else if(typeof str === "number"){
        return `${str}`
    }else throw new Error("invalide format")
}

// Write a function `wish` that:
// - takes no argument and returns "Hello!"
// - takes a name string and returns "Hello, <name>!"
function wish() : string;
function wish(name : string) : string;
function wish(name ?: string) : string {
    if(name){
        return `hello ${name}`
    }else{
        return "hello"
    }
}

// Overload a function `area` to compute:
// - area of a square (1 arg: side)
// - area of a rectangle (2 args: length, breadth)

function area(l : number) : number;
function area(l : number, b : number) : number;
function area(l : number, b ?: number) : number{
    if(b){
        return l*b
    }else{
        return l**2
    }
}

// Create a function `log` that:
// - accepts a single string and logs it
// - accepts an array of strings and logs them one by one
function log(str : string | string[]) : string | void {
    if(typeof str ==="string"){
        return str
    }else{
        for(let i of str){
            console.log(i)
        }
    }
}

// Define a function `getUserInfo` that:
// - accepts a user ID (number) and returns "User ID: <id>"
// - accepts a username (string) and returns "Username: <name>"
//--------Generics-----------------
function getUserInfo<T>(info : T) : string{
    if(typeof info === "string"){
        return `username : ${info}`
    }else{
        return `userId : ${info}`
    }
}


// Overload a `login` function:
// - with email and password
// - with username and password

type EmailLogin = {
    email : string,
    password : string
}

type UserNameLogin = {
    userName : string,
    password : string
}

function login(cred : UserNameLogin | EmailLogin){
    if('userName' in cred){
        console.log("login with username")
    }else{
        console.log("login with email")
    }
}


// Write a function `combine` that:
// - combines two numbers (returns number)
// - combines two strings (returns concatenated string)
// - combines a string and number (returns a string);

function combine(a : unknown, b : unknown):string | number{
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }else if(typeof a ==="string" && typeof b === "string"){
        return a + b
    }else{
        return (a as string) + (b as string)
    }
}


// Write a function `processInput` that:
// - if passed a number, returns its square
// - if passed a string, returns its reversed string
function processInput(arg : string | number) : string | number{
    if(typeof arg === "number"){
        return arg**2
    }else if(typeof arg === "string"){
        let str = ""
        for(let i = arg.length-1;i>=0;i--){
            str+=arg[i]
        }
        return str
    }
    throw new Error("error occurs");
}