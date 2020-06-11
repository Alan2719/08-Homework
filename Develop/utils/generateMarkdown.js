function generateMarkdown(data,badge) {
  return new Promise((resolve,reject) => {
  resolve(`# ${data.title}
  ## Description
   ${data.description}
  ## Table of contents
   - [Description](#Description)
   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contributing](#Contributing)
   - [Test](#Test)
   - [Contact](#Contact)
  
  ## Installation
  To install the necessary dependencies, type the next code:
    > ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This development is licensed by ${data.license} license.
  ${badge}
  ## Contributing
  ${data.contributing}
  ## Tests
   >${data.test}
  ## Questions
  Contact me for any doubts or comments.
  * GitHub User: ${data.user}
  * Email: <${data.email}>`);
  reject("No Data");
  })
}

module.exports = generateMarkdown;
