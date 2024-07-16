// Object
let car: {
  name: string;
  year: number;
  country?: string;
} = {
  name: "toyota",
  year: 2020,
};
car.name = "audi";

let car1: {
  name: string;
  year: number;
  readonly company: string;
} = {
  name: "audi",
  year: 2024,
  company: "audi",
};

let book = { name: "book", cost: 20 };
let pen = { name: "pen", cost: 10 };
let notebook = { name: "book" };

const items: { readonly name: string; cost?: number }[] = [book, pen, notebook];
// items[0].name = "new book";// Error: Cannot assign to 'title' because it is a read-only property

// ## Challenge

// - Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
let bike: {
  brand: string;
  year: number;
} = {
  brand: "honda",
  year: 2034,
};
// bike.year = "2024";// This will result in a TypeScript error

// - Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
// let laptop: {
//   brand: string;
//   year: number;
// } = {
//   brand: "Apple",
// }; This will result in a TypeScript error

// - Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

let product1 = { title: "Xiaomi Band", price: 3000 };
let product2 = { title: "Apple Watch", price: 23000 };
let product3 = { title: "Samsung Phone" };

let products: { title: string; price?: number }[] = [
  product1,
  product2,
  product3,
];
// products.push({ title: "New Watch", expense: 1200 }); //This will result in a TypeScript error

// Function

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}
sayHi("rokib");

function calculateDiscount(price: number): number {
  return price * 0.9;
}
const finalResult = calculateDiscount(200);

// ## Challenge

// - Create a new array of names.
// - Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.

const names: string[] = ["rokib", "saki", "habib"];

function nameInTheList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck = "rokibul";
if (nameInTheList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list`);
}

// - Use this function to check if various names are in your array and log the results.
