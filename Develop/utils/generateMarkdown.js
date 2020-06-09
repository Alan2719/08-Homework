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
   ![APM](https://img.shields.io/apm/l/${data.license})
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
