console.log('Hello world!');
// Defining types for function parameters and return type.
const hello = (person, date) => {
    let greetings = ['Hello', 'Howdy', 'Hola', 'Hallo', 'Yo']; // Type of string[] refers to an array of strings. number[] refers to an array of numbers, etc.
    let numOfGreetings = greetings.length;
    return `${greetings[Math.floor(Math.random() * numOfGreetings)]} ${person}, today is ${date.toDateString()}!`;
};
console.log(hello('Brendan', new Date()));
const printName = (name) => {
    return `The name you provided is ${name.first} ${name.last}`;
};
console.log(printName({ first: 'Eric', last: 'Hoffman' }));
