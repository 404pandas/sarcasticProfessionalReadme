// Inquirer command example
// inquirer.prompt(questions, answers) -> promise
// inquirer.registerPrompt(name, prompt)
// inquirer.createPromptModule() -> prompt function

// The Core Module File System
const fs = require("fs");

// Inquirer
const inquirer = require("inquirer");
//
// Question types: input, number, confirm, list, rawlist, expand, checkbox, password, editor
// To add questions, include type, message, name, and choices

// Markdown
const generateMarkdown = require("../utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your PROJECT TITLE?",
    name: "title",
  },

  {
    type: "input",
    message: "What is your PROJECT DESCRIPTION?",
    name: "description",
  },

  {
    type: "input",
    message: "What is your GITHUB REPO NAME?",
    name: "repo",
  },

  {
    type: "input",
    message: "What is your GITHUB USERNAME?",
    name: "username",
  },

  // ***uncomment when developing further***
  // {
  //   type: "confirm",
  //   message: "Would you like to include SHIELDS?",
  //   name: "shields",
  //   choice: ["yes", "no"],
  // },
  // ***uncomment when developing further***

  {
    type: "checkbox",
    message: "What SHIELDS would you like to include?",
    name: "shieldOptions",
    choice: [
      "Contributors",
      "Forks",
      "Stargazers",
      "Issues",
      "License",
      "LinkedIn",
    ],
  },

  // ***uncomment when developing further***
  // {
  //   type: "confirm",
  //   message: "Would you like to include an option to GO BACK TO TOP OF PAGE?",
  //   name: "topOfPage",
  //   choice: ["yes", "no"],
  // },
  // ***uncomment when developing further***

  // ***uncomment when developing further***
  // {
  //   type: "confirm",
  //   message: "Would you like to include formatting for a LOGO?",
  //   name: "logo",
  //   choice: ["yes", "no"],
  // },
  // ***uncomment when developing further***

  // ***uncomment when developing further***
  // {
  //   type: "confirm",
  //   message: "Would you like to include a COMMON LINKS to your product description?",
  //   name: "commonLinks",
  //   choice: ["yes", "no"],
  // },
  // ***uncomment when developing further***

  {
    type: "checkbox",
    message: "What COMMON LINKS would you like to include?",
    name: "commonLinksSelect",
    choice: ["Docs", "Demo", "Report Bug", "Request Feature"],
  },

  {
    type: "confirm",
    message: "Would you like to include a TABLE OF CONTENTS?",
    name: "tableOfContents",
    choice: ["yes", "no"],
  },

  {
    type: "checklist",
    message: "What SECTIONS would you like to include?",
    name: "sectionSelect",
    choice: [
      "Getting Started",
      "Prerequisite",
      "Installation",
      "Usage",
      "Roadmap",
      "Contributing",
      "License",
      "Contact",
      "Acknowledgements",
    ],
  },
];

// Writes README file
function writeToFile(fileName, data) {
  fs.appendFile(
    "GENERATEDUSERREADME.md",
    JSON.stringify(data, null, "\t"),
    (err) => (err ? console.error(err) : console.log("Logged!"))
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => writeToFile);
}

// Function call to initialize app
init();
0;
