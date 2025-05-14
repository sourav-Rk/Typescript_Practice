"use strict";
//definig a class
class Employee {
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }
    describe() {
        console.log("name: ", this.name, " age: ", this.age);
    }
}
const emp = new Employee("sourav", 23);
console.log(emp.name, emp.age);
emp.describe();
console.log("hello");
console.log("hai");
