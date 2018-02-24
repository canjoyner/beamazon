var mysql = require ("mysql");
var inquirer = require("inquirer");
var amazon=[];

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "TY75Happy!",
  database: "beamazon"
});

connection.connect(function(err) {
  if (err) throw err;
inventory();
});

function inventory(){
	connection.query("Select * FROM products",function(err,res){
		if (err) throw err;
		console.log("List of available items")
		for (var i=0; i<res.length;i++){
		console.log("Item number "+ res[i].item_ID+ " " + res[i].product_name+ " $"+res[i].price);}
		console.log("______________")
		amazon=res;
		buySomething();

		connection.end();
	});
}


function buySomething(){
	inquirer
		.prompt([
			{type:"input",
			message: "Please type the Item number of the item you would like to purchase",
			name:"number"},
			{type:"input", 
			message: "How many would you like?",
			name:"quanity"},
			])
		.then(function(inquirerResonse){
			var pick = inquirerResonse.number-1;
			var pickQuan = inquirerResonse.quanity;
			if (amazon[pick].stock_quantity < pickQuan ){
				console.log("Your item is on backorder.");}
			else {
				var current = amazon[pick].stock_quantity;
				var query = connection.query(
					"Update products SET ? where? ",
					[
						{
							stock_quantity: current - pickQuan 
						},
						{
							item_ID:pick
						}
					],function(err,res) {

					}
					);
				var total = amazon[pick].price * pickQuan;
				console.log("Your total for " + pickQuan+" "+ amazon[pick].product_name+ "'s is $"+total+".")
				;
			}
			})
			// connection.end().
	}
