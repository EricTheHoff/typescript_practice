console.log('Hello world!');

const hello = (person: string, date: Date): string => {
  let greetings: string[] = ['Hello','Howdy','Hola','Hallo','Yo'];
  let numOfGreetings: number = greetings.length;

  return `${greetings[Math.floor(Math.random() * numOfGreetings)]} ${person}, today is ${date.toDateString()}!`;
};

console.log(hello('Brendan', new Date()));