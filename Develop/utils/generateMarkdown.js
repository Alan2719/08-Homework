function generateMarkdown(data) {
  return new Promise((resolve,reject) => {
  resolve(`# ${data.title}
  ## Description
   ${data.description}
   ## Table of contents
   - [Description](#Description)
   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contributors](#Contributors)
   - [Test](#Test)
   - [Contact](#Contact)
   ## Installation
   > This is a guide to install this application.
   ${data.installation}
   ## Usage
   Here is an example of how to use this development.
   ${data.usage}
   ## License
   [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
   ## Contributors
   ${data.contributors}
   ## Tests
  ${data.test}
   ## Contact
  Contact me for any doubts or comments.
  * GitHub User: ${data.user}
  * `);
  reject("No Data");
  })
}

module.exports = generateMarkdown;
