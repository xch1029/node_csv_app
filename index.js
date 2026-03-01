import { appendFileSync } from 'fs';
import { createInterface } from 'readline';

class Person {
  constructor(name = '', number = '', email = '') {
    this.name = name;
    this.number = number;
    this.email = email;
  }
  saveToCSV() {
    const content = `${this.name},${this.number},${this.email}\n`;
    try {
      appendFileSync('./contact.csv', content);
      console.log(`{this.name} Saved`);
    } catch (error) {
      console.log(`Error saving ${this.name}: ${error.message}`);
    }
  }
}

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = (message) => new Promise((resolve) => readline.question(message, resolve));

const startApp = async () => {
  let shouldContinue = true;
  while (shouldContinue) {
    const name = await readLineAsync('Enter name: ');
    const number = await readLineAsync('Enter number: ');
    const email = await readLineAsync('Enter email: ');
    const person = new Person(name, number, email);
    person.saveToCSV();
    const response = await readLineAsync('Do you want to continue? (y/n): ');
    shouldContinue = response.toLowerCase() === 'y';
  }
  readline.close();
};

startApp();
