var mysql = require ("mysql");
var inquirer = require("inquirer");
var amazon=[];
var list=[];

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
manageStuff();
});

function manageStuff(){

	inquirer.prompt([
		{
		type:"list",
		message:"What would you like to do today?",
		choices:["View produts for sale","View low inventory","add to inventory","Add new product"],
		name:"options"
		}
		])
	.then(function(res){
		var managerAnswer = res.options;
		switch (managerAnswer){
		
		case  "View produts for sale":
			return inventory();

		case  "View low inventory":
			return lowInventory();

		case "add to inventory":
			return addInventory();

		case "add new product inventory":
			return addInventory()

		default:
			return console.log("you must choose something");
		}
	});
}

function inventory(){
	connection.query("Select * FROM products",function(err,res){
		if (err) throw err;
		console.log("______________")
		console.log("Current products")
		for (var i=0; i<res.length;i++){

		console.log("Item number "+ res[i].item_ID + " " + res[i].product_name + " $"+res[i].price + " quantity =" + res[i].stock_quantity);}
		console.log("______________")
		connection.end();
	});
}


function lowInventory(){
	connection.query("Select * FROM products",function(err,res){
		if (err) throw err;
		console.log("______________")
		console.log("Products with low inventory")
		for (var i=0; i<res.length;i++){
			if (res[i].stock_quantity <15){
			console.log("Item number "+ res[i].item_ID + " " + res[i].product_name + " $"+res[i].price + " quantity = " + res[i].stock_quantity);}
		
			}
		console.log("______________")
		connection.end();
	});
}

function addInventory(){
	console.log("this function not yet avaliable")

// below is my attempt at the code for adding inventory

	// connection.query("Select * FROM products",function(err,res){
	// 	if (err) throw err;

	// 	for (var i=0; i<res.length;i++){
	// 		 list.push(res[i].product_name);}
	// 		// console.log(list)
	// 		})

	// inquirer.prompt([
	// 	{
	// 	type:"list",
	// 	message:"Which item has additional inventory?",
	// 	choices:[list],
	// 	name:"options"
	// 	}
	// 	])
	// .then(function(res){
	// 	console.log(res);
	// 	console.log(list)
	// })
	connection.end();
}



function addInventory(){
	console.log("this function not yet avaliable")
		connection.end();
}
