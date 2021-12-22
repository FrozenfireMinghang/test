//************lecture51**************
//closures
function makeMultiplier (multiplier) {
	// var multiplier = 2
	function b() {
		console.log("multiplier is: " + multiplier);

	}

	b(); //multiplier is: 2 寻找最近的给这个值赋值的地方

	return (
		function (x) {
			return multiplier * x ;
		}

	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env




































