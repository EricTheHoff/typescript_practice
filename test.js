console.log('Hello world!');
const hello = (person, date) => {
    let greetings = ['Hello', 'Howdy', 'Hola', 'Hallo', 'Yo'];
    let numOfGreetings = greetings.length;
    return `${greetings[Math.floor(Math.random() * numOfGreetings)]} ${person}, today is ${date.toDateString()}!`;
};
console.log(hello('Brendan', new Date()));
