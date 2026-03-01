import prompt from 'prompt';
import { createObjectCsvWriter } from 'csv-writer';

prompt.start();
prompt.message = '';

const csvWriter = createObjectCsvWriter({
  path: './contact.csv',
  append: true,
  header: [
    { id: 'name', title: 'Name' },
    { id: 'number', title: 'Number' },
    { id: 'email', title: 'Email' },
    {
      id: 'timestamp',
      title: 'Timestamp',
    },
  ],
});

class Person {
  constructor(name = '', number = '', email = '') {
    this.name = name;
    this.number = number;
    this.email = email;
  }
  saveToCSV() {
    try {
      const { name, number, email } = this;
      csvWriter.writeRecords([{ name, number, email, timestamp: new Date().toISOString() }]);
      console.log(`${name} Saved`);
    } catch (error) {
      console.log(`Error saving ${this.name}: ${error.message}`);
    }
  }
}

const startApp = async () => {
  const questions = [
    {
      name: 'name',
      description: 'Enter name',
    },
    {
      name: 'number',
      description: 'Enter number',
    },
    {
      name: 'email',
      description: 'Enter email',
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Invalid email format',
    },
  ];

  const responses = await prompt.get(questions);

  const person = new Person(responses.name, responses.number, responses.email);
  person.saveToCSV();

  const { again } = await prompt.get([
    {
      name: 'again',
      description: 'Do you want to continue? (y/n):',
    },
  ]);
  if (again.toLowerCase() === 'y') {
    startApp();
  }
};
startApp();
