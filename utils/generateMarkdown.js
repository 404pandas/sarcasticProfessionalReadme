// Function to return License badge
function returnLicenseShield(answers) {
  switch (answers.license) {
    case "APACHE 2.0":
      response = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      return response;

    case "BSD 3":
      response = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      return response;

    case "GPL 3.0":
      response = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      return response;

    case "MIT":
      response = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      return response;

    case "none":
      response = "";
      return response;
  }
}

// Function to return License badge link
function renderLicenseLink(answers) {
  if (answers.license === "none") {
    response = "";
    return response;
  } else {
    return `<li><a href="#license">License</a></li>`;
  }
}

// Function to return License section
function renderLicenseSection(answers) {
  if (answers.license === "none") {
    response = "";
    return response;
  } else {
    return `This project is licensed under the ${answers.license} license.`;
  }
}

// Function to generate markddown
function generateMarkdown(data) {
  return `<a name="readme-top"></a>
  <!-- Add badges using the following format: -->
  <!-- ![Name](urlToShieldHere)(urlToGithubHere) -->
${returnLicenseShield(data)}
[![Contributors](https://img.shields.io/github/contributors/${data.username}/${
    data.repo
  }.svg?style=plastic&logo=appveyor)](https://github.com/${data.username}/${
    data.repo
  }/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/${data.username}/${
    data.repo
  }.svg?style=plastic&logo=appveyor)](https://github.com/${data.username}/${
    data.repo
  }/network/members)
[![Stargazers](https://img.shields.io/github/stars/${data.username}/${
    data.repo
  }.svg?style=plastic&logo=appveyor)](https://github.com/${data.username}/${
    data.repo
  }/stargazers)
[![Issues](https://img.shields.io/github/issues/${data.username}/${
    data.repo
  }.svg?style=plastic&logo=appveyor)](https://github.com/${data.username}/${
    data.repo
  }/issues)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=appveyor&logo=linkedin&colorB=555)](https://linkedin.com/in/${
    data.linkedin
  })

<!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/${data.username}/${data.repo}">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">${data.title}</h3>

  <p align="center">
    ${data.description}
    <br />
    <a href="https://github.com/${data.username}/${
    data.repo
  }"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/${data.username}/${data.repo}">View Demo</a>
    ·
    <a href="https://github.com/${data.username}/${
    data.repo
  }/issues">Report Bug</a>
    ·
    <a href="https://github.com/${data.username}/${
    data.repo
  }/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    ${renderLicenseLink(data)}
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- Add screenshots using the following format: -->
<!-- ![Screenshot alt description](directPathOfScreenshots) -->

![Screenshot of live image](directPathHere)

Insert information about the project here

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Nodejs.](nodejs-shield-url-here)(nodejs-url-here)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

### Getting Started

Getting Started info here.

## Prerequisites

Prerequisites info here.

## Installation

1. Clone the repo
   git clone https://github.com/${data.username}/${data.repo}.git

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/${data.username}/${
    data.repo
  }/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

${renderLicenseSection}
See LICENSE.txt for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - email@email_client.com

Project Link: [https://github.com/${data.username}/${
    data.repo
  }](https://github.com/${data.username}/${data.repo})

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>
`;
}

module.exports = generateMarkdown;
