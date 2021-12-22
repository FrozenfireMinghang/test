//************lecture50**************
// Arrays
// var array = new Array();
// array[0] = "yyy";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = {course: "html css javascript"}; 

// console.log(array);
// console.log(array[1]);
// array[2]("ece");
// array[2](array[0]);

// console.log(array[3].course);



//short hand array creation
// var names = ["ece", "john", "joe"];
// var names2 = [
// 	{ name: "ece" },
// 	{ name: "john" },
// 	{ name: "frozen" }
// 	]
// console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("hello " + names[i]);
// }

//lecture 50 part 2
var names = ["ece", "john", "joe"];

var myObj = {
	name : "ece",
	course : "html/css",
	platform : "coursera"
};


for (var prop in myObj) {
	console.log(prop + ":" + myObj[prop]);
}


for (var name in names){
	console.log("hello " + names[name]);
}

//输出结果是
//               name:ece
// script5.js:44 course:html/css
// script5.js:44 platform:coursera
// script5.js:49 hello ece
// script5.js:49 hello john
// script5.js:49 hello joe

names.greeting = "hi!"

for (var name in names){
	console.log("hello " + names[name]);
}































