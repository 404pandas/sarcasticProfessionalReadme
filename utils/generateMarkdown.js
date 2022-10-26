// Function to return License badge
returnLicenseShield = function (answers) {
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
};

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

${renderBadge(data)}
[![Contributors][https://img.shields.io/github/contributors/${
    answers.username
  }/${answers.repo}.svg?style=plastic&logo=appveyor]][https://github.com/${
    answers.username
  }/${answers.repo}/graphs/contributors]
[![Forks][https://img.shields.io/github/forks/${answers.username}/${
    answers.repo
  }.svg?style=plastic&logo=appveyor]][https://github.com/${answers.username}/${
    answers.repo
  }/network/members]
[![Stargazers][https://img.shields.io/github/stars/${answers.username}/${
    answers.repo
  }.svg?style=plastic&logo=appveyor]][https://github.com/${answers.username}/${
    answers.repo
  }/stargazers]
[![Issues][https://img.shields.io/github/issues/${answers.username}/${
    answers.repo
  }.svg?style=plastic&logo=appveyor]][https://github.com/${answers.username}/${
    answers.repo
  }/issues]

[![LinkedIn][https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=appveyor&logo=linkedin&colorB=555]][https://linkedin.com/in/${
    answers.linkedin
  }]

<!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/${answers.username}/${answers.repo}">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">${answers.title}</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/${answers.username}/${
    answers.repo
  }"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/${answers.username}/${
    answers.repo
  }">View Demo</a>
    ·
    <a href="https://github.com/${answers.username}/${
    answers.repo
  }/issues">Report Bug</a>
    ·
    <a href="https://github.com/${answers.username}/${
    answers.repo
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

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]
- [![Vue][vue.js]][vue-url]
- [![Angular][angular.io]][angular-url]
- [![Svelte][svelte.dev]][svelte-url]
- [![Laravel][laravel.com]][laravel-url]
- [![Bootstrap][bootstrap.com]][bootstrap-url]
- [![JQuery][jquery.com]][jquery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites



### Installation

1. Clone the repo
   git clone https://github.com/${answers.username}/${answers.repo}.git

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/${answers.username}/${
    answers.repo
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

Project Link: [https://github.com/${answers.username}/${
    answers.repo
  }](https://github.com/${answers.username}/${answers.repo})

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/${
    answers.username
  }/${answers.repo}.svg?style=plastic&logo=appveyor
[contributors-url]: https://github.com/${answers.username}/${
    answers.repo
  }/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/${answers.username}/${
    answers.repo
  }.svg?style=plastic&logo=appveyor
[forks-url]: https://github.com/${answers.username}/${
    answers.repo
  }/network/members
[stars-shield]: https://img.shields.io/github/stars/${answers.username}/${
    answers.repo
  }.svg?style=plastic&logo=appveyor
[stars-url]: https://github.com/${answers.username}/${answers.repo}/stargazers
[issues-shield]: https://img.shields.io/github/issues/${answers.username}/${
    answers.repo
  }.svg?style=plastic&logo=appveyor
[issues-url]: https://github.com/${answers.username}/${answers.repo}/issues
[license-shield]: https://img.shields.io/github/license/${answers.username}/${
    answers.repo
  }.svg?style=plastic&logo=appveyor
[license-url]: https://github.com/${answers.username}/${
    answers.repo
  }/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=appveyor&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=plastic&logo=appveyor&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=plastic&logo=appveyor&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=plastic&logo=appveyor&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=plastic&logo=appveyor&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=plastic&logo=appveyor&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=plastic&logo=appveyor&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=plastic&logo=appveyor&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=plastic&logo=appveyor&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com

`;
}

module.exports = generateMarkdown;
