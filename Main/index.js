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
    message: "What is your PROJECT DESCRIPTION?",
    name: "description",
  },

  {
    type: "input",
    message: "What is your PROJECT DESCRIPTION?",
    name: "description",
  },

  {
    type: "input",
    message: "What is your PROJECT DESCRIPTION?",
    name: "description",
  },

  {
    type: "input",
    message: "What is your PROJECT DESCRIPTION?",
    name: "description",
  },

  {
    type: "checkbox",
    message: "What languages do you know?",
    name: "languages",
    choices: ["HTML", "CSS", "JavaScript", "MySQL"],
  },

  {
    type: "list",
    message: "What is your preferred method of communication?",
    name: "contact",
    choice: ["email", "phone", "telekinesis"],
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
