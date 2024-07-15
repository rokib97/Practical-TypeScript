// Type Annotations
let name: string = "rokib";
name = "something";
name = name.toUpperCase();
// console.log(name);

let number: number = 10;
number = 20;
number = number.valueOf();
// console.log(number);

let isAdmin: boolean = true;
isAdmin = false;
// console.log(isAdmin);

// ## Challenge

// - Create a variable of type string and try to invoke a string method on it.
let myName: string = "ShakeAndBake";
myName = myName.toUpperCase();
// console.log(myName);

// - Create a variable of type number and try to perform a mathematical operation on it.
let myNum: number = 30;
myNum = myNum - 5;
// console.log(myNum);

// - Create a variable of type boolean and try to perform a logical operation on it.
let isAdultUser: boolean = myNum >= 18;
isAdultUser = !isAdultUser;
// console.log(isAdultUser);

// Union Type
let tax: number | string | boolean = 20;
tax = 100;
tax = "$100";
tax = false;

// fancy name - literal value type
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";

// any type
let notSure: any = 4;
notSure = "not sure could be a string";
notSure = false;
let random; // type any

// Practical Application of Type Annotation

const names = ["rokib", "sakib", "alom", "tania"];

let foundName: string | undefined;

for (const name of names) {
  if (name === "rokib") {
    foundName = name;
    foundName = foundName.toUpperCase();
    break;
  }
}
// console.log(foundName?.length);

// ## Challenge

// - Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";

// - Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
let discount: number | string = 20;
discount = "20%";

// Array
const numbers: number[] = [343, 34, 2, 32, 23];
const friendNames: string[] = ["susan", "hanna", "chillan"];
let newValues: (string | number)[] = ["rokib", "susan", 32];
let array: (string | boolean)[] = ["rokib", "32", "hasan", false, true];

// ## Challenge

// - Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
let temparatues: number[] = [44, 43, 88, 55, -56];
// temparatues.push("rokib");// This will result in a TypeScript error

// - Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
let colors: string[] = ["blue", "green", "yello"];
// colors.push(false) // This will result in a TypeScript error

// - Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
let mixedArray: (number | string)[] = [1, "two", 3];
// mixedArray.push(false); // This will result in a TypeScript error
