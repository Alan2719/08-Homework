function generateMarkdown(data) {
  return new Promise((resolve,reject) => {
  resolve(`# ${data.title}
  ## Description
   ${data.description}
   This is a guide to install this application.
   ## Table of contents
   - [Description](#Description)
   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contributors](#Contributors)
   - [Test](#Test)
   - [Contact](#Contact)
   ## Installation
   ${data.installation}
   ## Usage
   Here is an example of how to use this development.
   ${data.usage}
   ## License
   ${data.license}
   ## Contributors
   ${data.contributors}
   ## Tests
  ${data.test}
   ## Contact
  Contact me for any doubts or comments.
  * Email: ${data.email}
  * GitHub User: ${data.user}`);
  reject("No Data");
  })
}

module.exports = generateMarkdown;
