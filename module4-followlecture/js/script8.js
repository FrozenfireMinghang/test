//************lecture52**************
//part2
// var myqGreeter = {};
// myqGreeter.name = "myq";
// myqGreeter.sayHi = function () {
// 	console.log("Hi " + myqGreeter.name);
// }

(function (window) {var myqGreeter = {};
myqGreeter.name = "myq";
var greeting = "Hi "
myqGreeter.sayHi = function () {
	console.log(greeting + myqGreeter.name);
}

	window.myqGreeter = myqGreeter;

})(window);















