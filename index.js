const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utilities/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'authorName',
        message: 'What is the name of the author?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'What is the description of the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is being used?',
        choices: ['None', 'MIT', 'AGPL-3.0', 'GPL-3.0', 'LGPL-3.0', 'MPL-2.0', 'Apache-2.0', 'BSL-1.0']
    }
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
