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
    // Types of Questions
    // {
    //   type: "input",
    //   message: "What is your user name?",
    //   name: "username",
    // },
    // {
    //   type: "password",
    //   message: "What is your password?",
    //   name: "password",
    // },
    // {
    //   type: "checkbox",
    //   message: "What languages do you know?",
    //   name: "languages",
    //   choices: ["HTML", "CSS", "JavaScript", "MySQL"],
    // },
    // {
    //     type: "list",
    //     message: "What is your preferred method of communication?",
    //     name: "contact",
    //     choice: ["email", "phone", "telekinesis"],
    // }
  ])

  //   Name the files with the name answer
  .then((data) => {
    // const README = `${data.name.toLowerCase().split(" ").join("")}.json)`;
    let markdown = `#${answers.title}
                    
                    
                    
                    
                    
                    dynamic readme template goes here
                    
                    
                    
                    
                    
                    
                    
                    `;

    fs.writeFile(`README.md`, md, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
0;
