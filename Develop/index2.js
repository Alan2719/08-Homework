var inquirer = require('inquirer');
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js")

function Askquestions() {
    return new Promise((resolve,reject)=> {
        resolve(inquirer.prompt([
            {
                message:'Project Name: ',
                type:'input',
                name:'title'
            },
            {
                message:'Description of your project: ',
                type:'input',
                name:'description'
            },
            {
                message:'Packages needed: ',
                type:'input',
                name:'packages'
            },
            {
                message:'Installation: ',
                type:'input',
                name:'installation'
            },
            {
                message:'How to use: ',
                type:'input',
                name:'usage'
            },
            {
                message:'License: ',
                type:'input',
                name:'license'
            },
            {
                message:'Contributor(s): ',
                type:'input',
                name:'contributors'
            },
            {
                message:'Test: ',
                type:'input',
                name:'test'
            },
            {
                message:'Github User: ',
                type:'input',
                name:'user'
            }
        ]))
        reject("Unable to get information!")
    })
}

let writeToFile = (fileName, data) => {
    console.log(fileName);
    console.log(data);
    writeToFile("Readme.md", data, (err) => {
        if (err) {
            throw err;
        } 
        console.log("File created!");
    })
}

async function init() { 
    try {
        const data = await Askquestions();
        const sendAnswers = await new generateMarkdown(data);
        console.log(sendAnswers);
        writeToFile(data.title,sendAnswers);
    } catch(err) {
        console.log(err);
    }
}

init();


