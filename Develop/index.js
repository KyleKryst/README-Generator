// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
const generateReadme = ({ title, motivation, why, problemsSolved, learned, installation, usage, license, contribution, tests, questionsUsername, questionsLink, questionsEmail }) =>
  `## ${title} ##

  ## Description ##
  My motivation to make this project was ${motivation}. I built this project ${why}. Now with this project completed, ${problemsSolved}. I learned throughout this project ${learned}.

  ## Table of Contents ##

  [Installation][installation]

  [installation]: https://github.com/${questionsUsername}/${title}/blob/main/README.md#installation

  [Usage][usage]

  [usage]: https://github.com/${questionsUsername}/${title}/blob/main/README.md#usage

  [License][license]

  [license]: https://github.com/${questionsUsername}/${title}/blob/main/README.md#license

  [Contributing][contributing]

  [contributing]: https://github.com/${questionsUsername}/${title}/blob/main/README.md#contributing

  [Tests][tests]

  [tests]: https://github.com/${questionsUsername}/${title}/blob/main/README.md#tests

  [Questions][questions]

  [questions]: https://github.com/${questionsUsername}/${title}/blob/main/README.md#questions

  [Credits][credits]

  [credits]: https://github.com/${questionsUsername}/${title}/blob/main/README.md#credits

  ## Installation ##
  The steps required to install this project are as listed: ${installation}

  ## Usage ##
  To use this project one must ${usage}.

  ## License ##
  ${license}

  ## Contributing ##
  ${contribution}

  ## Tests ##
  Ways to run tests on this project, if one is so inclined, would be to ${tests}.

  ## Questions ##
  If any users have any questions regarding this project, then my GitHub username is ${questionsUsername}. A link to my GitHub is provided [here](${questionsLink}). One can also reach me by [email](mailto:${questionsEmail}).`;

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? If more than one word put hyphens between the words.',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for the project?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problemsSolved',
        message: 'What problem does your project solve?',
    },
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn from this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use of project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license are you using?',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
    {
        type: 'input',
        name: 'questionsUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'questionsLink',
        message: 'Enter your GitHub URL.',
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'What is your email address?',
    },
])

// TODO: Create a function to initialize app
.then((answers) => {
  const readmePageContent = generateReadme(answers);

  // Function call to initialize app
  fs.writeFile('README.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('You have successfully created your README.md!')
  );
});
