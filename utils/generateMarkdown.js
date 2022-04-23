// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //Make your licence badge here
  return `
  
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.Title}

  ## Table of contents

  - [Description](#description)
  
  - [Installation](#installation)
  
  - [Usage](#usage)
  
  - [Tests](#tests)
  
  - [Questions](#questions)

  ## Description
  ${data.Description}
  ## Installation

  ## Usage

  ## Tests

  ## Questions

`;
}

module.exports = generateMarkdown;
