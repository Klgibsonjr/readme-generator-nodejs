// Packages needed to run application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
    message: 'Please provide a short desciption of your project:',
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
    name: 'Table of Contents',
    message: 'Table of Contents:',
    validate: (tocInput) => {
      if (tocInput) {
        return true;
      } else {
        return 'Please input a Table of Contents for your project.';
      }
    },
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Please provide installation instructions for the user.',
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        return 'Please input installation instructions.';
      }
    },
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please provide instructions on how to use your project.',
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        return 'Please input instructions on how to use your project.';
      }
    },
  },
  {
    type: 'list',
    name: 'License',
    message: 'Please select which license you would like to use.',
    choices: [
      'Apache License 2.0',
      'MIT License',
      'GNU GPL v3.0',
      'Mozilla Public License 2.0',
      'Eclipse Public License 2.0',
      'None',
    ],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        return 'Please select a license.';
      }
    },
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'How can fellow developers contribute to your project?',
    validate: (contributeInput) => {
      if (contributeInput) {
        return true;
      } else {
        return 'Please provide guidelines for contributiing to this project if applicable.';
      }
    },
  },
  {
    type: 'input',
    name: 'Test',
    message: 'How can test be run for this project?',
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        return 'Please provide instructions on how to test your project.';
      }
    },
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Enter Github username for any inquiries about the project.',
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
    writeToFile('README.md', generateMarkdown(data));
    console.log(data);
  });
}

// Call function to initialize App
init();
