//SINGLE TON CLASS
// A Singleton class is a design pattern that ensures a class has only one instance and provides a 
// global point of access to that instance.

// In TypeScript (or any object-oriented language), this pattern is useful when exactly one object
//  is needed to coordinate actions across the system — for example, configuration, logging, or database connection.

class Singleton {
    private static instance : Singleton;

    private constructor(){}

    public static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new Singleton()
        return this.instance
    }

}

const obj1 = Singleton.getInstance()
const obj2  = Singleton.getInstance()
console.log(obj1 === obj2)

// /In a real Express project, you don't want to create a new DB connection every time a route is called —
//  it's expensive and unnecessary. Instead, you use a singleton DB service.

class Database{
    private static instance : Database;

    private constructor(){
        console.log("DB connected")
    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new Database()
        return this.instance
    }

    query(sql : string) {
        console.log(`running ${sql}`)
    }
}

const db = Database.getInstance()
db.query("select * from users")


//------------------------------------------------------------------------------------------------------------
