const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    name: "p1",
    message: "Qual o seu nome?",
  },
  {
    name: "p2",
    message: "Qual a sua idade?"
  }
]).then((answers) => {
  if (parseInt(answers.p2) >= 18) {
    console.log(chalk.green.bold("Você já pode tirar a carteira."))
  } else {
    console.log(chalk.bgRed.black("Você ainda não tem idade para tirar a carteira."))
  }
}).catch(err => console.log(err))