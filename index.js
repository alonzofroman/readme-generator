// Global variables for requires
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utilities/generateMarkdown');

// Question list
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for users wishing to use your project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who are the contributors to this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is being used?',
        choices: ['None', 'MIT', 'AGPL-3.0', 'GPL-3.0', 'LGPL-3.0', 'MPL-2.0', 'Apache-2.0', 'BSL-1.0']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should people do if they are willing to contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions you have created for this project?'
    },
    {
        type: 'input',
        name: 'gitUserName',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];


// Function to ask user questions as provided and callback to generateMarkdown to create readme
function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFile('genREADME.md', generateMarkdown(data), function(err) {
            if (err) {
                console.log('Error')
            }
            else {
                console.log('Generated Readme. Check repository folder.')
            }
        })
    })
}

// Function call to initialize app
init();
