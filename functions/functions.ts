//function types
// => A function type defines the parameter types and return type of a function.
//  This helps ensure that functions are used correctly — receiving the expected input
//  and returning the expected output.

//syntax
//(parameter1 : Type, parameter2: Type) => ReturnType

//eg : A function that takes two numbers and returns a number

let addition: (a: number, b: number) => number;

addition = (a, b) => {
  return a + b;
};
console.log(addition(1, 3));

//function type aliases
type MathOperation = (x: number, y: number) => number;

const mul: MathOperation = (a, b) => a * b;
const div: MathOperation = (a, b) => a / b;

//optional and default parameters
function greeting(name: string, greeting: string = "hello"): string {
  return `${greeting} ${name}`;
}

console.log(greet("sourav"));

//optional
function logingg(message: string, userId?: string): void {
  if (userId !== undefined) {
    console.log(message, userId);
  } else {
    console.log(message);
  }
}

//Rest parameters
//A rest parameter allows a function to accept zero or more arguments of the specified type.
// In TypeScript, the rest parameters follow these rules:

// A function has only one rest parameter.
// The rest parameter appear last in the parameter list.
// The type of the rest parameter is an array type.

function sumAll(...nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

//rest parameters with multiple types
function combined(...args: (number | string)[]): [number, string] {
  let total = 0;
  let str = "";
  args.forEach((arg) => {
    if (typeof arg === "number") {
      total += arg;
    } else {
      str += arg;
    }
  });
  return [total, str];
}

//function overloading
// => Function overloading allows you to define multiple signatures for a single function and
//  provide one implementation that handles all defined signatures.
// => Function overloading enables a function to handle different types of arguments

//function overloading for adding numbers or strings
function addOverloading(a: number, b: number): number;
function addOverloading(a: string, b: string): string;
function addOverloading(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("invalid input");
  }
}
console.log(addOverloading(2, 3));
console.log(addOverloading("happy", "newyear"));

//function overloading with optional parameters
function sumOverLoading(a: number, b: number): number;
function sumOverLoading(a: number, b: number, c: number): number;
function sumOverLoading(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  else return a + b;
}

//method overloading
class Counter {
  private current = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start < target; start++) {
        values.push(start);
      }
      return values
    }
    return ++this.current
  }
}

let counter = new Counter();
counter.count();
counter.count(4);

