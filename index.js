// Importing packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { generate } = require('rxjs');

// Inquirer questions array, labelled accordingly to what they represent (save questions, which refers to the GitHub profile link)
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your app/project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a 2-4 sentence description of your app/project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'List any installation instructions (if none, type "N/A"):',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'List all steps needed to successfully use your application:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select your desired license here:',
            choices: ['MIT License', 'Apache 2.0 License', 'GNU GPLv3', 'Boost Software License 1.0', 'ISC License (ISC)', 'Mozilla Public License 2.0', 'None'],
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'List the names of people (space separated) you worked with to complete this application/project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any tests you wrote for this application with instructions on how to run them:',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email addresss:',
        },
];

// writeToFile function, taking in generateMarkdown from generateMarkdown.js
function writeToFile(fileName, data) {
    generateMarkdown(data)
    fs.writeFile('none.md', generateMarkdown(data), function(err) {
        // Error handling
        err ? console.error(err) : console.log('Success! Generating README...')
    })
}
// Fires off inquirer questions in the command line/terminal
function init() {
    inquirer.prompt(questions)
    // Waiting for the user generated data, and then calling write to file
    .then((response) => {
        writeToFile('README.md', response)
    })
}

init();
