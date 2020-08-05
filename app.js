const inquirer = require('inquirer')
const fs = require('fs')

const styles = require('./frontend/styles.js')

const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const Manager = require('./lib/manager')

let employees = []

function promptUser() {
    inquirer.prompt([
        {
            message: "Welcome to the EZ Team Generator CLI! Please enter your team name!",
            name: "teamName"
        }
    ]).then(function(res) {
        const teamName = res.teamName
        employees.push(teamName)
        addManager();
    })
}

function addManager() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            message: "What is your team manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNum"
        }
    ]).then(function(res) {
        const name = res.name
        const id = 1
        const email = res.email
        const officeNum = res.officeNum
        const teamMember = new Manager(name, id, email, officeNum)
        employees.push(teamMember)
        addTeamMembers();
    })
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: [
                "Yes, add an engineer",
                "Yes, add an intern",
                "No, the team is complete"
            ],
            name: "addMemberData"
        }
    ]).then(function(res) {
        switch (res.addMemberData) {
            case "Yes, add an engineer":
                addEngineer()
                break
            case "Yes, add an intern":
                addIntern()
                break
            case "No, the team is complete":
                createTeam()
                break
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github"
        }
    ]).then(function(res) {
        const name = res.name
        const id = employees.length + 1
        const email = res.email
        const github = res.github
        const teamMember = new Engineer(name, id, email, github)
        employees.push(teamMember)
        addTeamMembers()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ]).then(function(res) {
        const name = res.name
        const id = employees.length + 1
        const email = res.email
        const school = res.school
        const teamMember = new Intern(name, id, email, school)
        employees.push(teamMember)
        addTeamMembers()
    })
}

function createTeam() {
    console.log(employees)
    const pageArr = []
    const pageBegin = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${employees[0]}</title>
        <link rel="stylesheet" href="../frontend/styles.css">
        <link rel="stylesheet" href="../frontend/bootstrap-grid.min.css">
    </head>
    <body>
        <header><p>${employees[0]}</p></header>
        <main>
            <section>
                <div class="container">
                    <div class="row">
    
    `
    
    pageArr.push(pageBegin)

    for(let i = 1; i < employees.length; i++) {
        let object = `
        <div class="col-12 col-sm-5 col-lg-4">
            <div class="card">
                <div class="card-header">
                    <p>${employees[i].name}</p>
                    <p>${employees[i].role}</p>
                </div>
                <div class="card-body">
                    <p>Employee ID: ${employees[i].id}</p>
                    <p>Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></p>
        `
        if (employees[i].officeNum) {
            object += `
            <p>${employees[i].officeNum}</p>
            `
        }

        if (employees[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${employees[i].github}">${employees[i].github}</a></p>
            `
        }

        if (employees[i].school) {
            object += `
            <p>School: ${employees[i].school}</p>
            `
        }

        object += `
                    </div>
                </div>
            </div>
        `
        pageArr.push(object)                        
    }

    const pageEnd = `
                    </div>
                </div>
            </section>
        </main>
    </body>
    </html> 
    `
    pageArr.push(pageEnd)

    fs.writeFile(`./generated/${employees[0].trim().replace(' ', '-').replace(' ', '-')}.html`, pageArr.join(""), function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log(`Team Created! Team page generated in ./generated/${employees[0].trim().replace(' ', '-').replace(' ', '-')}.html`)
        }
    })
}

promptUser()