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

function itemId() {

    inquirer.prompt([

        {
            name: "item_id",
            type: "input",
            message: "Enter the ID number of the item you would like the purchase.",

        },{
            name: "input_num",
            type: "input",
            message: "How many units of the item would you like to purchase?"
        }

    ]).then(function(ans) {
    
    connection.query("SELECT * FROM products WHERE item_id = ?", ans.item_id, function(err, res) {


        
    }



    }




}