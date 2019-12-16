const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({

    host: "localhost",
    
    port: 3306,

    user: "root",
    password: "password",
    database: "bamazon"

});

connection.connect(function(err) {

    if (err) throw err;
    console.log(connection);
    console.log("connected as id " + connection.threadId);
    inventory();
});

function inventory() {
    const query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        if (err) throw err;

        const displayTable = new Table ({
        head: ["Item ID", "Item", "Department", "Price", "Stock Quantity"],
        colWidths: [10, 20, 20, 20, 20]

        });

        for (let i = 0; i < res.length; i++) {
            const itemId = res[i].item_id,
            productName = res[i].product_name,
            departmentName = res[i].department_name,
            price = res[i].price,
            stockQuantity = res[i].stock_quantity;

            displayTable.push([itemId, productName, departmentName, price, stockQuantity]);
        }
        console.log(displayTable.toString());

    });

    itemId();
    
}

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

    ]).then(function(ans){
    
   connection.query("SELECT * FROM products WHERE item_id = ?", ans.item_id, function(err, res) {
        if (err) throw err;

        for (let i = 0; i < res.length; i++) {
            if(ans.input_num > res[i].stock_quantity) {

                console.log("We are sorry, there is not enough product available for purchase at this time.")

                inventory();         
            } else {

                console.log("You have selected " + res[i].product_name + "from the " + res[i].department_name + ".");
                console.log("Your total will be " + res[i].price * ans.input_num);



            }
           


        }

    
    });


    });

}

inventory();
itemId();