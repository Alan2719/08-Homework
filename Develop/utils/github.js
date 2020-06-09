const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
var generateMarkdown = require("./generateMarkdown.js")

const getUser = () => {
    return new Promise((resolve,reject)=> {
        resolve(inquirer
        .prompt({
            message: "Enter your GitHub username:",
            name: "username"
        })
        .then(({ username }) => {
            const queryUrl = `https://api.github.com/users/${username}`;

            axios.get(queryUrl).then((res) => {
            console.log(res.data.email);
            console.log(res.data.avatar_url);
            return res
        });
        }));
        reject("Unable to get information");
    })
}

async function init() {
    const info = await getUser()
    console.log(info);
}

init();