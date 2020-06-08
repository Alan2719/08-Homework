function generateMarkdown(data) {
  return new Promise((resolve,reject) => {
  resolve(`# ${data.title}
  ${data.title}
  ## Description
  As a developer, the purpose of this development is to ${data.description}
  ## Table of contents
  ${data.contentsTable}
  ## Installation
  ${data.installation}
  ## Usage

  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests

  ## Questions`);
  reject("No Data");
  })
}

module.exports = generateMarkdown;
