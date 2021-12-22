
// ******************lecture 41***********************
// var message = "in global";
// console.log("global:message = " + message);

// var a = function () {
// 	var message = "inside a";
// 	console.log("a:message =" + message);
// 	b();
// }

// function b () {
// 	console.log("b:message =" + message);
// }

// a();

//********************lecture 42**********************
// var x;
// console.log(x);

// if (x == undefined) {
// 	console.log("x is undefined");
// }

// x = 5;
// if (x == undefined){
// 	console.log("x is undefined");
// }
// else {
// 	console.log("x has been defined");
// }

//*******************lecture 43**********************
// var string ="Hello";
// string += "World";
// console.log(string + "!");

//regular math operators
// console.log((5+4)/3);
// console.log(undefined / 5);
// function test1 (a) {
// 	console.log(a / 5);
// }

// test1(3);

//equality
// var x = 4, y=4;
// if (x == y){
// 	console.log("x=4 is equal to y=4");
// }

// x = "4";
// if (x == y) {
// 	console.log("x='4' is equal to y=4");
// }

//strict equality三个等号
// if (x === y) {
// 	console.log("strict: x='4' is equal to y=4" )
// }
// else {
// 	console.log("strict: x='4' is NOT EQUAL to y=4");
// }

//if statement (all false)
// if (false || null ||
// 	undefined || "" || 0 || NaN){
// 	console.log("This line won't ever execute");
// }
// else{
// 	console.log("All false");
// }

//if statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All true");
// }

//Best practice for {} style
// function a()
// {
// 	//after return we should immediately add {}, if not, the result is undefined
// 	return
// 	{
// 		name: "yyy"
// 	};
// }


// function b(){
// 	return {
// 		name: "yyy"
// 	};
// }

// console.log(a());
// console.log(b());


//for loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum = sum + i; 
// }
// console.log("sum of 0 through 9 is: " + sum);


//*******************lecture 44**********************
function orderChickenWidth(sideDish) {

	if (sideDish === undefined){
		sideDish = "noodles";
	}	

//另一种快捷的方式去表达和上面相同的结果

	sideDish = sideDish || "noodles";
	//这个也可以返回相同的，原因是 ｜｜会使得两侧的true对应的值返回

	console.log("Chicken with " + sideDish);



}
orderChickenWidth("noodles");
orderChickenWidth();




















