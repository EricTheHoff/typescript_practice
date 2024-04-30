console.log('Hello world!');

// Defining types for function parameters and return type.
const hello = (person: string, date: Date): string => {
  let greetings: string[] = ['Hello','Howdy','Hola','Hallo','Yo']; // Type of string[] refers to an array of strings. number[] refers to an array of numbers, etc.
  let numOfGreetings: number = greetings.length;

  return `${greetings[Math.floor(Math.random() * numOfGreetings)]} ${person}, today is ${date.toDateString()}!`;
};

console.log(hello('Brendan', new Date()));


type Name = { // Defining a custom, reusable type.
  first: string,
  last: string,
}

const printName = (name: Name) => { // Referencing custom type in function parameters.
  return `The name you provided is ${name.first} ${name.last}`
};

console.log(printName({first: 'Eric', last: 'Hoffman'}));

// Types vs Interfaces;

// Here is an example of creating a type called Animal and another type called Bear.
// Bear has the same properties as Animal, but in addition, has the honey property.
// type Animal = {
//   name: string,
// }

// type Bear = Animal & {
//   honey: boolean,
// }

// Here is an example of creating an interface called Animal and another called Bear.
// Bear is an extension of Animal, so it gets the properties of Animal, but it also has the honey property.
// interface Animal {
//   name: string,
// }

// interface Bear extends Animal {
//   honey: boolean,
// }