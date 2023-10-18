// TODO: Include packages needed for this application
// Import file here = require('path to file');

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { generate } = require('rxjs');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your app/project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a 2-4 sentence description of your app/project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'List any installation instructions (if none, type "N/A"):'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'List all steps needed to successfully use your application:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select your desired license here:',
            choices: ['MIT License', 'Apache 2.0 License', 'GNU GPLv3']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'List the names of people (space separated) you worked with to complete this application/project:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any tests you wrote for this application with instructions on how to run them:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email addresss:'
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateMarkdown(data)
    fs.writeFile('README.md', generateMarkdown(data))
}

// Call functions from generate markdown
// fs.writeFile(fileName, generatemarkdown(data))

// TODO: Create a function to initialize app
// Inquirer questions should be here
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile('README.md', response)
    })
}

// .then((reponse) => {
    // writeToFile(README.md, response)
// })

// Function call to initialize app
init();
