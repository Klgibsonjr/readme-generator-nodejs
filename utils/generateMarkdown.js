// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)';
  }
  if (license === 'Apache 2.0') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  if (license === 'GNU GPL v3.0') {
    return '![License: GNU GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt';
  }
  if (license === 'Apache 2.0') {
    return 'http://www.apache.org/licenses/LICENSE-2.0';
  }
  if (license === 'GNU GPL v3.0') {
    return 'https://www.gnu.org/licenses';
  }
  if (license === 'None') {
    return 'A license was not selected';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `License: ${license} `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align='center'> ${data.title}</h1>

  - ${renderLicenseBadge(data.license)}

  ## License

  This project is covered under the MIT license. Please refer to ${renderLicenseLink(
    data.license
  )} for more information.

  ---

  ## Description

  ${data.description}

  ---

  ## Table of Contents
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ---

  ## Installation

  ${data.installation}

  ---

  ## Usage

  ${data.usage}

  ---

  ## Contributing

  ${data.contributing}

  ---

  ## Test

  ${data.test}

  ---

  ## Questions

  If you have any questions/concerns about the project, please contact me directly at ${
    data.email
  }. 
  Or for more details about this project you can check out my repo at my Github account, [${
    data.questions
  }](https://github.com/${data.questions}/).
  `;
}

module.exports = generateMarkdown;
