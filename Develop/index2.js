var inquirer = require('inquirer');
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");
var licenseArray = ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
"[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"];
let badge;

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
                type:"checkbox",
                message:'Select the type of license: ',
                name:'license',
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3.0", "Unlicense"]
            },
            {
                message:'Contributing: ',
                type:'input',
                name:'contributing'
            },
            {
                message:'How could someone run a test: ',
                type:'input',
                name:'test'
            },
            {
                message:'Github User: ',
                type:'input',
                name:'user'
            },
            {
                message:'User Email: ',
                type:'input',
                name:'email'
            }
        ]))
        reject("Unable to get information!")
    })
}

let writeToFile = (fileName, data) => {
    console.log(fileName);
    console.log(data);
    fs.writeFile("Readme.md", data, (err) => {
        if (err) {
            throw err;
        } 
        console.log("File created!");
    })
}

async function init() { 
    try {
        const data = await Askquestions();
        //console.log(data.license[0]);
        switch (data.license[0]) {
            case "MIT":
                badge = licenseArray[0];
                break;
            case "APACHE 2.0":
                badge = licenseArray[1];
                break;
            case "GPL 3.0":
                badge = licenseArray[2];
                break;
            case "BSD 3.0":
                badge = licenseArray[3];
                break;
            case "Unlicense":
                badge = licenseArray[4];
                break;
            default:
                console.log("Not license provided");
        }
        console.log(badge);
        const sendAnswers = await new generateMarkdown(data,badge);
        console.log(sendAnswers);
        writeToFile(data.title,sendAnswers);
    } catch(err) {
        console.log(err);
    }
}

init();


