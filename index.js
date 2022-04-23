// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "GithubUsername",
    message: "Enter your Github username.",
  },
  {
    type: "input",
    name: "Email",
    message: "Enter your email address.",
  },
  {
    type: "input",
    name: "Title",
    message: "Enter your project title.",
  },
  {
    type: "input",
    name: "Description",
    message: "Enter your descrption",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "Installation",
    message: "What command should be running?",
    default: "npm i",
  },
  {
    type: "input",
    name: "Testing",
    message: "What command should be run to test the application",
    default: "npm test",
  },
  {
    type: "input",
    name: "Usage",
    message: "Is there anything the user should know about using the project?",
  },
  {
    type: "input",
    name: "Contribution",
    message:
      "Is there anything the user needs to know about contribuating to this project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return fs.writeFileSync(
    path.join(process.cwd(), "Generated_README.md"),
    data
  );
}

// TODO: Create a function to initialize app
function init() {
  const prompt = inquirer.createPromptModule();
  prompt(questions).then((answers) => {
    //console.log(answers);
    const generatedMarkdown = generateMarkdown(answers);
    writeToFile(generatedMarkdown);
  });
}

// Function call to initialize app
init();
