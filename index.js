// Packages needed to run application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for the user to input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        return 'Please input a project title.';
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n    
  - What was your motivation?
  - Why did you build this project? 
  - What problem does it solve?
  - What did you learn?\n`,
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        return 'Please input a project description.';
      }
    },
  },
  {
    type: 'input',
    name: 'table of contents',
    message: 'Table of Contents:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for the user:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions on how to use your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select which license you would like to use:',
    choices: ['Apache 2.0', 'MIT', 'GNU GPL v3.0', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can fellow developers contribute to your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How can test be run for this project?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Enter Github username for any inquiries about the project:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: (questionInput) => {
      if (questionInput) {
        return true;
      } else {
        return 'Please provide your github username.';
      }
    },
  },
];

// Function used to write the README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (error) => {
    console.log(filename, data);
    if (error) throw error;
    console.log('Your README file has been generated');
  });
}

// Function used to initialize the App
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile('SampleREADME.md', generateMarkdown(data));
    console.log(data);
  });
}

// Call function to initialize App
init();
