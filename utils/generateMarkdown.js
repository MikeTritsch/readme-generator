// License badge functions
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache 2.0 License') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license ===  'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license ===  'ISC License (ISC)') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return '';
  }
}

// Table of contents license addition, if needed
function renderLicenseLink(license) {
  if (license !== 'None') {
  return `- [License](#license)`
  }
    return '';
}

// Adding a license notice to the license section, if needed
function renderLicenseSection(license) {
  if (license === 'MIT License') {
    return `## License 

    This application is covered under the MIT License. For more information, click the badge at the top of the README.`
  } else if (license === 'Apache 2.0 License') {
    return `## License

    This application is covered under the Apache 2.0 License. For more information, click the badge at the top of the README.`
  } else if (license === 'GNU GPLv3') {
    return `## License
    
    This application is covered under the GNU GPLv3 License. For more information, click the badge at the top of the README.`
  } else if (license ===  'Boost Software License 1.0') {
    return `## License
    
    This application is covered under the Boost Software 1.0 License. For more information, click the badge at the top of the README.`
  } else if (license ===  'ISC License (ISC)') {
    return `## License
    
    This application is covered under the ISC License. For more information, click the badge at the top of the README.`
  } else if (license === 'Mozilla Public License 2.0') {
    return `## License
    
    This application is covered under the Mozilla Public License 2.0. For more information, click the badge at the top of the README.`
  } else {
    return '';
  }
}

// Generating actual README file
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contributions}

${renderLicenseSection(data.license)}

## Tests

${data.tests}

## Questions?

Feel free to contact me via email at ${data.email}

or

Follow me on [GitHub](https://github.com/${data.questions})

---

`;
}

//Making file available for export
module.exports = generateMarkdown;