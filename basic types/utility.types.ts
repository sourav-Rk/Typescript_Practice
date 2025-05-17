//Utility Types
// Utility Types are built-in generic types provided by TypeScript to transform, manipulate, or
// simplify existing types.

//They allow you to construct new types based on existing ones — without rewriting them — by picking,
//  omitting, modifying, or analyzing properties.



//1. Partial<T>
//=> Partial is a utility type provided by Typescript 
//=> Makes all properties of a type optional.
//=> Use case : Use for Partial updates

type User1 ={
    name : string;
    age :  number;
    email : string
}
const updateUser : Partial<User1> = {
    name : "sourav"
}

//-----------------------------------------------------------------------------------------------------------

//2. Required<T>
// => Makes all properties of a type required
// => Use case : ensuring full object completeness
const completeUser : Required<User1>={
    name : "sourav",
    age : 21,
    email :"sourav@gmail.com"
}

//-------------------------------------------------------------------------------------------------------------

//3. Readonly<T>
// => Make all properties of T readonly
// => Use case : Prevent mutation after initialization.
const readonlyUser : Readonly<User1> = {
    name : "sourav",
    age : 21,
    email :"sourav@gmail.com"
}
//readonlyUser.name = "jjj"  --> throw compile time error because readonlyUser is Readonly

//-----------------------------------------------------------------------------------------------------------

// 4. Pick<T, Keys>
// -----------------
// Creates a new type with a subset of properties from another type.
// Use Case: Select specific properties.
const publicUser : Pick<User1, "email" | "name">={
    name :"sourav",
    email :"sourav@gmail.com"
}

//5 .Omit<T, keys>
//------------------
// => creates a type by omitting the keys from the type T
// => Hiding or removing fields 
const omitedUser : Omit<User1,"email"> ={
    name : "sourav",
    age : 21
}

//--------------------------------------------------------------------------------------------------------

//6. Exclude<T, U>
//-----------------
//=> Exclude<T, U> constructs a type by removing from union type T all members that are assignable to U.
//=> Take everything in T except what's in U.

type Animal ="dog" | "cat" | "fish" | "bird";
type Pet = Exclude<Animal, "cat"|"fish">;

//--------------------------------------------------------------------------------------------------------

//7. Extract<T,U>
//=> Extract<T, U> constructs a type by extracting from union type T only the members that are assignable to U.
//=> Take common that are in both T and U
type Pet2 = Extract<Animal,"dog"|"cat">;

//--------------------------------------------------------------------------------------------------------

//8. Record
type RecordType = "name" | "email";
type RecordTypeSample = Record<RecordType,string[]>

//9. index types
type IndexTypes = {
    name : string;
    age : number;
};

const userObj : IndexTypes = {
    name : "sourav",
    age : 21
}

function getProperty<T,K extends keyof T>(obj : T, key : K) : T[K]{
    return obj[key]
}

console.log(getProperty(userObj,"name"));