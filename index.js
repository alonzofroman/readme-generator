const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'project-title',
        message: 'What is the name of the project?'
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
})