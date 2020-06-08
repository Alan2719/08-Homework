var inquirer = require('inquirer');
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js")

function Askquestions() {
    return new Promise((resolve,reject)=> {
        resolve(inquirer.prompt([
            {
                message:'What is the name of your project?',
                type:'input',
                name:'title'
            },
            {
                message:'Describe your project',
                type:'input',
                name:'description'
            },
            {
                message:'What kind of packes does your application need to work?',
                type:'input',
                name:'packages'
            },
            {
                message:'How does your application could be installed?',
                type:'input',
                name:'installation'
            },
            {
                message:'Provide an example of how your application works',
                type:'input',
                name:'usage'
            },
            {
                message:'What kind of license does your application would have?',
                type:'input',
                name:'license'
            },
            {
                message:'Named the people who contributed to this development',
                type:'input',
                name:'contributors'
            },
            {
                message:'How can a test could be run?',
                type:'input',
                name:'test'
            },
            {
                message:'Write common questions users will have when using your application',
                type:'input',
                name:'questions'
            }
        ]))
        reject("Unable to get information!")
    })
}

let writeToFile = (fileName, data) => {
    console.log(fileName);
    console.log(data);
    writeToFile('fileName + "Readme.md"', data, (err) => {
        if (err) {
            throw err;
        } 
        console.log("File created!");
    })
}

async function init() { 
    try {
        const data = await Askquestions();
        //console.log(data);
        const sendAnswers = await new generateMarkdown(data);
        writeToFile(data.title,sendAnswers);
    } catch(err) {
        console.log(err);
    }
}

init();


