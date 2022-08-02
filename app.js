const inquirer = require('inquirer');

const { writeFile, copyFile } = require('./utils/generateHTML.js');
const generatePage = require('./src/page-template.js');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team managers name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }


            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter your team manager's email (Required)",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter the email!');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Enter your team manager's ID number (Required)",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager ID!');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Enter your team manager's office number (Required)",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false;
                }

            }
        },

    ])
};

const promptProject = portfolioData => {
    // If there's no 'projects' array property, create one
    if (!portfolioData.employees) {
        portfolioData.employees = [];
    }
    console.log(`
  =================
  Add a New Employee
  =================
  `);


    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add an employee?',
            default: true
        },
        {
            type: 'list',
            name: 'title',
            message: 'What type of employee would you like to add',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmAdd }) => {
                if (confirmAdd) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is the name of your employee?',
            when: ({ confirmAdd }) => {
                if (confirmAdd) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the employee's ID number",
            when: ({ confirmAdd }) => {
                if (confirmAdd) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's ID number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter your employee's github username",
            when: function (answers) {
                return answers.title === "Engineer"
            },

            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's github username");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter your employee's school",
            when: function (answers) {
                return answers.title === "Intern"
            },

            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's school");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Please enter your employee's email address",
            when: ({ confirmAdd }) => {
                if (confirmAdd) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's email address!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }

    ])
    .then((employeeData) => {
        portfolioData.employees.push(employeeData);
        if (employeeData.confirmAddEmployee) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
        });

};



promptUser()
    .then(promptProject)
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });