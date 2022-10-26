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

// Questions
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

  {
    type: "input",
    message: "What is your LINKEDIN USERNAME?",
    name: "linkedin",
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

// Questions for future development

// {
//   type: "confirm",
//   message: "Would you like to include SHIELDS?",
//   name: "shields",
//   choice: ["yes", "no"],
// },

// {
//   type: "checkbox",
//   message: "What SHIELDS would you like to include?",
//   name: "shieldOptions",
//   choice: [
//     "Contributors",
//     "Forks",
//     "Stargazers",
//     "Issues",
//     "License",
//     "LinkedIn",
//   ],
// },

// {
//   type: "confirm",
//   message: "Would you like to include formatting for a LOGO?",
//   name: "logo",
//   choice: ["yes", "no"],
// },

// {
//   type: "confirm",
//   message: "Would you like to include COMMON LINKS in your product description?",
//   name: "commonLinks",
//   choice: ["yes", "no"],
// },

//   {
//     type: "checkbox",
//     message: "What COMMON LINKS would you like to include?",
//     name: "commonLinksSelect",
//     choice: [
//       "Docs",
//       "Demo",
//       "Report Bug",
//       "Request Feature"
//     ],
//   },

//   {
//     type: "confirm",
//     message: "Would you like to include a TABLE OF CONTENTS?",
//     name: "tableOfContents",
//     choice: ["yes", "no"],
//   },

//   {
//     type: "checklist",
//     message: "What additional SECTIONS would you like to include?",
//     name: "sectionSelect",
//     choice: [
//       "Built With"
//       "Getting Started",
//       "Prerequisite",
//       "Installation",
//       "Usage",
//       "Roadmap",
//       "Contributing",
//       "License",
//       "Contact",
//       "Acknowledgements",
//     ],
//   },

// {
//   type: "confirm",
//   message: "Would you like to include an option to GO BACK TO TOP OF PAGE?",
//   name: "topOfPage",
//   choice: ["yes", "no"],
// },

// ***Questions for future development***
