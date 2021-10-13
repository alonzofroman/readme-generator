// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license !== 'None') {
   return `![License Icon](https://img.shields.io/badge/License-${license}-blue)`;
 }
 else {
   return '';
 }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- ${license} (https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
  }
  else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, feel free to send me an email or message me on Github.
  - Email: (${data.email})
  - Github: (https://github.com/${data.gitUserName})


`;
}

module.exports = generateMarkdown;
