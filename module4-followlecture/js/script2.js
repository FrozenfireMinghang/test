//this file is for lecture 45 and after
//*******************lecture 45**********************
//object creation
//第一种方式叫做 object syntax
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("company CEO name is: " + company.ceo.firstname);

// console.log(company["name"]);
// company.$stock = 110;

// company["stock of company"] = 110;

// console.log(company);
// console.log("the stock price is: " + company["stock of company"]);


// //另一种方法
// var stockPropName = "stock of company"
// company[stockPropName] = 120;
// console.log("the stock price is: " + company[stockPropName]);



//lecture 45 part2
//另一种简洁的方式 这个第二种的方式叫做 object literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},

	$stock: 110
	"stock of company": 110
};

console.log(facebook);










































































