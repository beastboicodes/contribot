//JavaScript is a dynamic,weakly typed programming language which is compiled at runtime.
//Once called livescript, is created to make the webpages more dynamic
//JavaScipt is independent from Java
//It is parsed and compiled at runtime. Data types are assumed automatically
//There are eight different data types - undefined, null, boolean, string, symbol, bigint, number and object.
//Variables can defined with let and var keywords
//Variables declared by var are scoped to the immediate function body while let variables are scoped to the immediate enclosing block denoted by {}(block scope)
//var variables are hoisted(initialized with undefined) which means they are accessible to their enclosing scope even before they are declared

console.log(foo); // undefined
var foo = "Foo";
console.log(foo); // Foo
//let variables are not initialised until their definition is evaluated.
console.log(woo); // ReferenceError
let woo = "Woo";
console.log(woo); // Woo
//In strict mode, var will let you re-declare the same variables while let raises a SyntaxError
//Declaring string variables can be done with double quotes, single quotes or back ticks
//The back ticks can be used to print variables in it
var display = `This is ${woo}`;

//To find the length of the string
"String".length;
woo.length;
//Using bracket notation to find the character in a string
var name = "FirstName";
var firstLetter = name[0];
var lastLetter = name[name.length-1];

//nested arrays
var nestArr = [[1,2,3,4,5,6,"69"],['a','b','c',69]];
//Accessing array with indexes
nestArr[0][3];

//Manipulating arrays
//push() is used to append data to the end of an array
nestArr.push([99,88]);
//pop() is used to delete value off of the end of the array
var del = nestArr.pop();
//shift() removes the first element
var del = nestArr.shift();
//unshift() adds element to the beginning of the array
nestArr.unshift([1,2,3,4,5,6,"69"]);

//Variables defined outside of function block have global scope
//A function which does return anything internally has a return value undefined

//Defining objects
var car = {
    "name": "Raptor",
    "engine": "3999cc turbo charged",
    "torque": "799Nm",
    drive : "4 wheel drive"
};
//Single word string properties can omit quotes
//If the object has any non-string properties, it wil automatically typecast the as strings.
//Accessing objects with dot notation
console.log(car.drive);
//Accessing objects with bracket notation
console.log(car["engine"]);
//Updating the objects
car["Torque"] = "805Nm";
//Adding a property
car[price] = "$45000"
//deleting a property
delete car[price];
//Testing objects for properties
car.hasOwnProperty(drive); // true
car.hasOwnProperty(price); // false
//Accessing nested objects
var storage ={
    desk:{
        drawer:"stapper"
    },
    cabinet:{
        folder1: "files",
        folder2: "secrets"
    },
    "bottom drawer": "soda"
};
storage.desk.drawer;
//Use dot notation for all properties where possible

//ternary operator
//condition ? statement-if-true : statement-if-false;

//When a variable is defined in global and local, the variables dont overwrite or remove global value(they co-exist). This is called shadowing.
//When a variable is re-defined in a function, we now always refer to the local,shadowed variable. Only if no such local variables exists, it falls back to global variable.

//Direct vs Indirect functions
//Sometimes one doesnt want to execute the function immediately, but instead want to tell to execute at some point later.
// someButton.addEventListener('click',add); where add() is a function