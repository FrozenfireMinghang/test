//************lecture52**************
//part1
// var lmhGreeter = {};
// lmhGreeter.name = "lmh";
// lmhGreeter.sayHello = function () {
// 	console.log("Hello " + lmhGreeter.name);
// }

//另一种表达
(function (window){
	var lmhGreeter = {};
    lmhGreeter.name = "lmh";
    var greeting = "Hello ";
    lmhGreeter.sayHello = function () {
	console.log(greeting + lmhGreeter.name);
  }

  window.lmhGreeter = lmhGreeter;

})(window);  //如果不传这个winodw，那就不行了，lmhGreeter只会被认为是这里面的东西，不会认为是全局的















