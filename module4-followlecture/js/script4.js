//this file is for lecture 48 and after
//*******************lecture 48**********************
// function test() {
// 	console.log("Hello coursera!");
// }
// test();

//function constructors
// function Circle (radius) {
// 	//console.log(this);
// 	this.radius = radius;
// }

// var myCircle = new Circle(10);  // new Object();
// console.log(myCircle); //得到的是 Circle {radius: 10}


//updated
// function Circle (radius) {
// 	this.radius = radius;

// 	this.getArea = 
// 		function() {
// 			return Math.PI * Math.pow(this.radius, 2);
// 		};
// }

// var myCircle = new Circle(10);  // new Object();
// console.log(myCircle.getArea()); //得到的是 314.1592653589793

//另一个方式，使用prototype
// function Circle (radius) {
// 	this.radius = radius;
// }
// //下面的这个东西不能放到function里面
// Circle.prototype.getArea = 
// function () {
// 	return Math.PI * Math.pow(this.radius, 2);
// }

// var myCircle = new Circle(10);  //不要忘了 new 
// console.log(myCircle.getArea()); //得到的是 314.1592653589793

// var myOtherCircle =  new Circle(20);
// console.log(myOtherCircle);





//this file is for lecture 49
//*******************lecture 49**********************
var literalCircle = { // new Object()
	radius: 10,

	getArea: function () {

		var self = this;//必须有这一行来实现后面的变量内容替换，要不半径就无法改成20
		console.log(this);

		var increaseRadius = function () {
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());























