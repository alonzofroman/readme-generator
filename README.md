# readme-generator

## Project description 
The purpose of this project is to create a professional readme generator for open source projects. A generated readme should have sections for installation, usage, credits, license, contributing, tests, and questions, all populated with information provided by the user utilizing node.js and terminal.

## Steps to Use
- Clone repository onto your computer
- Using terminal or Git Bash to select the repository, execute the command 'npm install'
- Due to dependencies in package.json, inquirer should download
- Once complete, run the command 'node index.js'
- Answer all prompted questions
- Readme should be generated after all questions are answered
- Check folder for 'GenREADME.md' for your generated README


## Code Snippet
- Using node.js and inquirer, I was able to take a list of questions, assigned to a variable named questions, and use the user inputs from them to call upon both FS's writeFile function and a seperate page's generateMarkdown function and create a generated readme populated with user input data.

```Javascript
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
```

## Steps

- First I downloaded Node.js
- Then I created the repository for the readme generator
- Then used npm init inside of that repository through Git Bash 
- Created a gitignore to ignore node_modules and DS_store to reduce space taken on github
- Installed inquirer with npm install inquirer
- Created questions that will provide answers for the readme
- Created function to ask user questions to obtain those answers using terminal/Bash
- Created functions to generate proper readme

## Instructional Video

* [Video](https://watch.screencastify.com/v/tLDsCYYWlbsDzENasNIR)

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.JS](https://nodejs.org/en/)
* [Inquirer](https://www.npmjs.com/package/inquirer)


## Author
- Alonzo Roman
- [Link to Github](https://github.com/alonzofroman)
- [Link to LinkedIn](https://www.linkedin.com/)

