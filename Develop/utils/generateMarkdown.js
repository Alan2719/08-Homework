function generateMarkdown(data) {
  return new Promise((resolve,reject) => {
  resolve(`# ${data.title}
  ----
  ## Description
  ${data.description}
  ----
  ## Table of contents
  ${data.content}
  ---
  ## Installation
  This is a guide to install this application:
  ${data.installation}
  ---
  ## Usage
  Here is an example of how to use this development:
  ${data.usage}
  ---
  ## License
  ${data.license}
  ---
  ## Contributing
  ${data.contributors}
  ---
  ## Tests
  ${data.test}
  ---
  ## Questions`);
  reject("No Data");
  })
}

module.exports = generateMarkdown;
