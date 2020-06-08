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
                message:'Content of your file',
                type:'input',
                name:'content'
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
                message:'License(s): ',
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
                message:'Contact: ',
                type:'input',
                name:'contact'
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
        let contentArray = data.content.split(' ');
        //console.log(contentArray);
        data.content = contentArray;
        const sendAnswers = await new generateMarkdown(data);
        console.log(sendAnswers);
        //writeToFile(data.title,sendAnswers);
    } catch(err) {
        console.log(err);
    }
}

init();


