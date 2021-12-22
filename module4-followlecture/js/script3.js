//this file is for lecture 46 and after
//*******************lecture 46**********************
// function multiply(x,y){
// 	return x * y;
// }
// console.log(multiply(5, 3));

// multiply.version = "v.1.0.0";

// console.log(multiply);
// console.log(multiply.toString());//这个和上一个是一样的

// console.log(multiply.version);

// // Function factory
// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;
// 	};

// 	return myFunc;

// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));



// // Passing functions as arguments
// function doOperationOn(x, operation){
// 	return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);

// var result = doOperationOn(10, doubleAll);
// console.log(result);







//here is lecture 47
//*******************lecture 47**********************
//copy by value
// var a = 7;
// var b = a;

// console.log("a: "+ a);
// console.log("b: "+ b);

// b = 5;
// console.log("after b updated:");

// console.log("a: "+ a);
// console.log("b: "+ b);

// //copy by reference
// var a = { x: 7 };
// var b = a;

// console.log("a: "+ a.x);
// console.log("b: "+ b.x);

// b.x = 5;
// console.log("after b.x updated:");

// console.log("a: "+ a.x);
// console.log("b: "+ b.x);

// pass by value, nothing changed
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);

// }
// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);


//pass by reference
function changeObject(objValue) {
	console.log("in changeObject...");
	console.log("before:");
	console.log(objValue);

	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}

value = { x:7 };
changeObject(value);
console.log("after changeObject, orig value: ");
console.log(value);



























