const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({

    host: "localhost",
    
    port: 3306,

    user:"root",

    password: "password",
    database: "bamazon"

});

connection.connect(function(err) {

    if (err) throw err;
    console.log(connection);
    console.log("connected as id " + connection.threadId);
    connection.end();



});