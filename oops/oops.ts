//definig a class
class Employee {
    name : string; //property
    age : number;   //property

    constructor(a : string,b:number){
        this.name = a;
        this.age = b
    }

    describe():void{   // method
        console.log("name: ",this.name," age: ",this.age)
    }
}

const emp = new Employee("sourav",23)
console.log(emp.name,emp.age)
emp.describe()

//-------------------------------------------------------------------------------------------------------------

//Access modifiers
//Access modifiers change the visibility of the properties and methods of a class.

//1. private
 //limits the visibility to the same class only.

 class Student {
    private name : string;
    private age : number;
    
    constructor(name : string, age : number){
        this.name = name;
        this.age = age
    }

    getDetails() : string {
        return `name : ${this.name} age : ${this.age}`
    }
 }

 const student = new Student("sourav",23)
 console.log(student.getDetails())
 //student.name --> this will result into compile time error as name is a private property


 //2. protected
   //The protected modifier allows access within the same class and subclasses.

   class User {
      public userName : string;    //anyone can access
      private password : string;   //only user can access
      protected role : string;     //only user and subclass can access

      constructor(name :string,password:string,role : string){
        this.userName = name;
        this.password = password;
        this.role = role
      }

      login(pw : string) : boolean{
        return this.password === pw
      }
   }

   class Admin extends User{
      getRole() : string{
        return this.role;    // allowed because role is protected
      }
   }

   const newUser = new User("sourav","123","user");
   console.log(newUser.login("123"))
   //newUser.password //not allowed (password is only accessible inside the class)

   const admin = new Admin("hasna","123","admin")
   admin.getRole() // allowed
   admin.userName  //allowed (username is public)
   //admin.password  //not allowed (password is private to the User class)

//------------------------------------------------------------------------------------------------------------

   //Read only property
//    The readonly keyword in TypeScript is used to make a class property immutable after initialization.
//    Once a readonly property is set—either at declaration or inside the constructor—it cannot be changed later.

//use case ===> userId,orderID mark it as readonly

class Person {
    readonly dob : string;

    constructor(dob : string){
        this.dob = dob
    }
}

const person = new Person("12,12,2003")
console.log(person.dob)
//person.dob = "12,21,2993"  //compile time error (as dob is marked as read only)

//-------------------------------------------------------------------------------------------------------------

//Getters and Setters
// Getter (get): Used to read/access a private property.

// Setter (set): Used to update/change a private property.

// Help implement encapsulation and add logic while getting/setting values.

class Person1 {
    private _age : number;
    private _firstName : string;
    protected _lastName : string;

    constructor(age:number,firstName : string,lastName : string){
        this._age = age;
        this._firstName = firstName;
        this._lastName  = lastName;
    }
    
    //getter for age
    get age() : number {
        return this._age
    }
    
    //setter for age
    set age(theAge : number){
        if(theAge <0 || theAge > 18){
            throw new Error("invalid age")
        }
        this._age = theAge
    }

    get firstName() : string{
        return this._firstName
    }

    set firstName(theFirstName : string){
        if(!theFirstName){
            throw new Error("please provied first name")
        }
        this._firstName = theFirstName
    }

    set lastName(theLastName : string) {
        if(!theLastName) throw new Error("please provide last name")
            this._lastName = theLastName
    }

    get fullName() :string{
        return `${this._firstName} ${this._lastName}`
    }

    set fullName(name : string){
        let parts = name.split(" ")
        if(parts.length !== 2) throw new Error("invalid name format")
        
        this._firstName = parts[0]
        this._lastName = parts[1]
    }
}

const newPerson = new Person1(23,"sourav","k")
newPerson.age = 3 // it will call set age
console.log(newPerson.age) // it will call get age
newPerson.fullName = "hasna hassan"
console.log(newPerson.fullName)


//----------------------------------------------------------------------------------------------------------
//Interface with classes
 //An interface defines a contract or structure that a class must follow.
 //It only describes what properties and methods an object (or class) should have, not how they're implemented.

//  Imagine you're building a User Management System where there are different types of users:

// Regular User

// Admin user

// Guest user

// All users share some common behavior (e.g., login, logout), but they might have their own unique capabilities.

interface Iuser {
    username : string;
    email : string;
    login() : void;
    logout() : void;
}

//Regular user
class RegularUser implements Iuser{
    constructor(public username : string, public email : string){}

    login(): void {
        console.log("logged in as regular user")
    }

    logout(): void {
        console.log("logged out")
    }
}

//Admin 
class AdminUser implements Iuser{
   constructor(public username : string, public email : string){}

   login(): void {
       console.log("logged in as admin")
   }

   logout(): void {
       console.log("logged out")
   }
}

const user1 = new RegularUser("sourav","sourav@gmail.com")
const admin1 = new AdminUser("admin","admin@gmail.com")

const users : Iuser[] = [user1,admin1]

users.forEach(user => user.login())

//-------------------------------------------------------------------------------------------------------

//inheritance
//it is the process of acquiring the properties and methods of another class
//inherited using extends keyword

class UserInheritance{
    constructor(public username : string, public email : string){}

    describe():void{
      console.log(`this users name is ${this.username} and email is ${this.email}`)
    }
}

class AdminInheritance extends UserInheritance{
    public role : string;
    constructor(username : string,email:string,role : string){
        super(username,email)
        this.role = role
    }

    describe(): void {
        super.describe()
        console.log(`i have the role ${this.role}`)
    }
}

const userI = new UserInheritance("sourav","sourav@gmail.com")
const adminI = new AdminInheritance("admin","admin@gmail.com","admin")
userI.describe()
adminI.describe()

//--------------------------------------------------------------------------------------------

//Method overriding
//Method Overriding is a feature in object-oriented programming where a child class redefines a method 
// that it inherited from a parent class. The new method in the child class has the same name, return type, 
// and parameters, but a different implementation.

//eg : In an e-commerce app, you might have a base class called Payment and different payment methods like
//  CreditCardPayment, PaypalPayment, or UPIPayment. All of them need a pay() method, but each has different 
// logic.

class Payment {
    pay(amount : number):void{
        console.log(`processing of payment ${amount}`)
    }
}

class CreditCardPayment extends Payment{
   pay(amount: number): void {
       console.log(`paid ${amount} using credit card`)
   }
}

class PaypalPayment extends Payment{
    pay(amount: number): void {
        console.log(`paid ${amount} using paypal`)
    }
}

class UPIPayment extends Payment{
    pay(amount: number): void {
        console.log(`paid ${amount} using UPI`)
    }
}

function processPayment(paymentMethod : Payment,amount : number){
    paymentMethod.pay(amount) //calls the  overriden version
}

const card = new CreditCardPayment()
const upi = new UPIPayment()
const paypal = new PaypalPayment()


processPayment(card,100)
processPayment(upi,300)
processPayment(paypal,6000)

//--------------------------------------------------------------------------------------------------------------------
//Abstract class
//An abstract class is a class that cannot be instantiated directly. It serves as a blueprint for other classes.
//Used to define common structure and behavior that multiple derived (child) classes must follow.
//Abstract classes can have regular methods and properties with full implementations.
//These can be inherited and reused by subclasses.
//Promotes code reusability and polymorphism

abstract class EmployeeAbstract{
    constructor(private firstName:string, private lastName : string){}

    abstract getSalary() : number;

    get fullName() : string{
        return `${this.firstName} ${this.lastName}`
    }

    compensationStatement():string{
        return `${this.fullName } makes ${this.getSalary()} a month`
    }
}

class FullTimeEmployee extends EmployeeAbstract{
    constructor(firstname : string,lastName : string,private salary : number){
        super(firstname,lastName)
    }

    getSalary(): number {
        return this.salary
    }
}

class Contractor extends EmployeeAbstract{
    constructor(firstName : string, lastName : string, private rate : number,private hours : number){
        super(firstName,lastName)
    }

    getSalary(): number {
        return this.rate*this.hours
    }
}

let john = new FullTimeEmployee("sourav","k",1200)
let jane = new Contractor("jane","smith",1000,4)
console.log(john.compensationStatement())
console.log(jane.compensationStatement())

//---------------------------------------------------------------------------------------------
//Static property and static methods
//Static properties and methods are shared by all instances of a class.
//Use the static keyword before a property or a method to make it static.

class HeadCount{
    private static headCount : number=0;

    constructor(public name:string,public age : number){
        HeadCount.headCount++
    }

    public static getHeadCount() {
        return HeadCount.headCount
    }
}

const headUser1 = new HeadCount("sourav",32)
const headUser2 = new HeadCount("hasna",23)

console.log(HeadCount.getHeadCount())

//square root
class MathSquareRoot {
    public static getSquareRoot(num : number) : number {
        return num**2
    }
}

console.log(MathSquareRoot.getSquareRoot(8))

//-------------------------------------------------------------------------------------------------

//Function overloading
//Function Overloading allows you to define multiple function signatures for a single function — with
//  different parameter types or counts — while keeping one implementation.

function add(a : number,b:number) : number;
function add(a: string, b:string) : string;
function add(a:any,b:any){
    return a + b
}

//greet function
function greetPerson(person : string) : string;
function greetPerson(person : string[]) : string;
function greetPerson(person : string | string[]): string {
     if(typeof person === "string"){
        return person
     }else{
        return person.join(",")
     }
}

//----------------------------------------------------------------------------------------------------
//dynamic method calling
//decides method to call at run time
class Calculator {
    add(a : number, b : number){
        return a + b
    }

    subtract(a : number, b : number){
        return a - b
    }

}

const calc = new Calculator()
const methodName = "add";
console.log((calc as any)[methodName](3,5))

//----------------------------------------------------------------------------------------------------------

//typeof
//Used to check the type of a primitive value like string, number, boolean, etc.
//Returns the type as a string.
//Useful in form validations, input checks, and basic runtime type-checking.
function validateInput(value : string | number){
    if(typeof value === "string"){
        return value.trim().length > 0
    }else if(typeof value ==="number"){
        return value > 0
    }
    return false
}

//  and instanceof operator
// Used to check if an object is an instance of a specific class or constructor.

// Returns a boolean (true or false).

// Useful in class-based logic, like distinguishing between types of uploaded files or response objects.

class ImageFile{
    constructor(public name : string , public resolution : string){}
}

class PdfFile{
    constructor(public name : string, public resolution : string){}
}

function fileUpload(file : ImageFile | PdfFile){
    if(file instanceof ImageFile){
        console.log("image file uploaded",file.resolution)
    }else if(file instanceof PdfFile){
        console.log("pdf file uploaded",file.resolution)
    }
}

//--------------------------------------------------------------------------------------------------------

//GENERIC CLASSES
//When building a REST API in a Node.js + TypeScript backend (e.g., using Express), it’s common to send 
// structured responses like:
// {
//   "status": "success",
//   "data": {
//     "id": 1,
//     "name": "Product A"
//   }
// }

class ApiResponse<T>{
    constructor(
        public status : "succes" | "error",
        public data : T ,
        public message ?: string
    ){}
};

interface UserApi{
    id : string,
    name : string
}

interface Product {
    id : string,
    name : string,
    price : number
}

const userSample : UserApi = {id : "1",name :"sourav"} 
const userApi = new ApiResponse<UserApi>("succes",userSample)

const products : Product[] = [{id : "1",name :"sneaker",price:1222},{id : "2",name : "executive",price : 799}]
const productApi = new ApiResponse<Product[]>("succes",products)

console.log(userApi.data)
console.log(productApi.data)

//----------------------------------------------------------------------------------------------------------------
