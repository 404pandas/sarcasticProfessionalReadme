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

// Jest
const jest = require("jest");
const { type } = require("os");

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
]

  //   Name the files with the name answer
  .then((data) => {
    // const README = `${data.name.toLowerCase().split(" ").join("")}.json)`;
    let markdown = `#${answers.title}
                    
                    
                    
                    
                    
                    dynamic readme template goes here
                    
                    
                    
                    
                    
                    
                    
                    `;
    // Writes README file
    fs.writeFile(`README.md`, md, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
0;
