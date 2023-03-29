// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')
const fs = require("fs") 
// TODO: Create an array of questions for user input
const questions = inquirer.prompt( [
    {
        type: 'input',
        name: 'title',
        message: 'Project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Table of contents',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Project license',
        choices: ['MIT','ISC', 'GNUGPLv3', 'none'],
        filter(value) {
            //return val.toLowerCase();
            return value;
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Project contributions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Project tests',
    },
    {
        type: 'input',

        name: 'email',
        message: 'Project questions (enter email address)',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Project questions (enter github username)',
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    //return questions.prompt(questions)
    return questions
    .then((data) => {
        console.log(data)
        // create file storage
        fs.writeFileSync('./README.md',generateMarkdown(data),function(err){
            if(err)throw err
        })
        //const fileMarkdown = await generateMarkdown(data)
        //await console.log(fileMarkdown)
        //return fileMarkdown

        //console.log(data)
        //return data
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
