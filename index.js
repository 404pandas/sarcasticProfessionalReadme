// Inquirer command example
// inquirer.prompt(questions, answers) -> promise
// inquirer.registerPrompt(name, prompt)
// inquirer.createPromptModule() -> prompt function

// The Core Module File System
const fs = require("fs");

// Inquirer
const inquirer = require("inquirer");

// Jest
const jest = require("jest");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password",
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm",
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("You forgot your password already?!")
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
0;
