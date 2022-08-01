const inquirer = require('inquirer');



class Employee {
    constructor() {
        Employee.prototype.getName = function () {
            inquirer.prompt(
                [
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is them employee's name (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("Please enter the manager's name!");
                                return false;
                            }


                        }
                    }

                ]
            )
        }
        Employee.prototype.getID = function () {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'ID',
                    message: "Enter the employee's ID number (Required)",
                    validate: usernameInput => {
                        if (usernameInput) {
                            return true;
                        } else {
                            console.log('Please enter the employees ID!');
                            return false;
                        }

                    }
                }
            ]);
        }
        Employee.prototype.getEmail = function () {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter the employee's email (Required)",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter the employees email!');
                            return false;
                        }

                    }
                }
            ]);
        }
        Employee.prototype.getRole = function () {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: "Choose the employees role",
                    choices: ['Manager', 'Engineer', 'Intern'],
                    default: 'Employee'
                }
            ]);
        }
    }
}

module.exports = Employee;