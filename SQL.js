var mysql = require("mysql");
var inquirer = require("inquirer");
const table = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",
  password: "root",
  database: "employees_Db",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Success");
    console.log('===========Welcome=============');
    //start
    initialQuestion();
  });

function initialQuestion(){
    inquirer.prompt([{
        type:"list",
        message: "What would you like to do?",
        name: "chosen",
        choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "Add a Department",
            "Exit",
        ],
    },
])
.then(function (res) {
    if (res.chosen === "View All Employees") {
      viewAllEmployees();
    } else if (res.chosen === "View All Departments") {
      viewAllDepartments();
    } else if (res.chosen === "View All Roles") {
      viewAllRoles();
    } else if (res.chosen === "Add a Department") {
      addDepartment();
    } else if (res.chosen === "Exit") {
      console.log("Goodbye!");
      connection.end();
    }
  });
}
function viewAllEmployees() {
    let query =
      "SELECT employee.id, employee.FirstName, employee.LastName, roles.Title, department.Department FROM employee INNER JOIN roles ON employee.roles_id = roles.id INNER JOIN department ON employee.roles_id = department.id";
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.log("Employees: " + "\n");
      console.table(res);
      setTimeout(initialQuestion, 2500);
    });
  }
  function viewAllDepartments() {
    let query = "SELECT id, Department from department";
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.log("Departments: " + "\n");
      console.table(res);
      setTimeout(initialQuestion, 2500);
    });
  }
  function viewAllRoles() {
    let query =
      "SELECT roles.Title, roles.Salary, department.Department from roles LEFT JOIN department ON roles.department_id = department.id";
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.log("Roles: " + "\n");
      console.table(res);
      setTimeout(initialQuestion, 2500);
    });
  }

  function addDepartment(){
      inquirer.prompt([{
          type: "input",
          message: "What is the name of the Department?",
          name: "Department",

      }])
      .then(function (res){
          connection.query("INSERT INTO department SET ?", {Department: `${res.Department}` }, function (err, res) {
              if (err) throw err;
              console.log("Department Added");
              setTimeout(initialQuestion, 2500);
          })
      })
  }

  

