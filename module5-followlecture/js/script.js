//******************lecture53********************
// DOM manipulation
// console.log(document.getElementById("title"));
// //结果是<h1 id="title">Lecture 53</h1>

// console.log(document instanceof HTMLDocument);


function sayHello () {
	var name  = 
	document.getElementById("name").value;
	var message = "<h2>Hello " + name + " !</h2>";

	//这个是把内容转到实际的页面上
	//document.getElementById("content").textContent = message;

	//这个是可以涵盖内容里面的html标签
	document.getElementById("content").innerHTML= message;


	if (name === "student") {
		var title = 
		document
		.querySelector("#title")
		.textContent;

		title += " & Lovin' it!";

		document
		.querySelector("#title") //这个是返回title标签的第一个内容，如果是queryAllSelector就是全部
		.textContent = title;

	}

		
}