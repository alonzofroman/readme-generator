const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'project-title',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'author-name',
        message: 'What is the name of the author?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'steps-taken',
        message: 'What steps did you take in creating this project? Seperated by a comma(,)'
    },
    {
        type: 'checkbox',
        name: 'technologies-used',
        message: 'What technologies were used in the creation of this project?',
        choices: [
            {
                name: 'HTML'
            },
            {
                name: 'Javascript'
            },
            {
                name: 'CSS'
            },
            {
                name: 'jQuery'
            },
            {
                name: 'Bootstrap'
            },
            {
                name: 'TailwindCSS'
            },
            {
                name: 'Flickity'
            },
            {
                name: 'Node.js'
            },
            {
                name: 'moment.js'
            },
            {
                name: 'PHP'
            },
            {
                name: 'MySQL'
            },
            {
                name: 'API'
            },
            {
                name: 'Django'
            },
            {
                name: 'Ruby'
            },
            {
                name: 'Python'
            }
        ]
    }
];

inquirer.prompt(questions).then((answers) => {
    // console.log(answers);
    fs.writeFile('genREADME.md', `${answers} '\n'`, function(err) {
        if (err) {
            throw err
        }
        console.log('Success, check file list for generated readme')
    })
})