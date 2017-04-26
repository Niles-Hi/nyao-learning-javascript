function clickButton() {
	var name = document.getElementById("name").value;
	alert("Hello, " + name + "!");
}

function addPost() {
	var postText = document.getElementById("post").value;
	
	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;
	
	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);
	
}

function calcButton(num) {
	var result = document.getElementById("result");
	if (result.value === "0") {
		result.value = "";
	}
	result.value = result.value + num;
}

function calcButtonDot() {
	var result = document.getElementById("result");
	result.value = result.value + ".";
	// Disable button
	document.getElementById("dot").disabled = true;
}

function calcButtonOp(operator) {
	var result = document.getElementById("result");
	
	document.getElementById("temp").value = result.value;
	document.getElementById("operator").value = operator;
	
	// Disable buttons
	document.getElementById("add").disabled = true;
	document.getElementById("subtract").disabled = true;
	document.getElementById("multiply").disabled = true;
	document.getElementById("divide").disabled = true;
	
	// Reset result
	result.value = 0;
	
	// Enable dot
	document.getElementById("dot").disabled = false;
	
	// Enable equals sign
	document.getElementById("equals").disabled = false;
}

function equals() {
	var temp = document.getElementById("temp").value;
	var result = document.getElementById("result").value;
	var operator = document.getElementById("operator").value;
	var total = 0;
	if (operator === "+") {
		total = Number(temp) + Number(result);
	}
	else if (operator === "-") {
		total = Number(temp) - Number(result);
	}
	else if (operator === "x") {
		total = Number(temp) * Number(result);
	}
	else {
		total = Number(temp) / Number(result);
	}
	
	document.getElementById("result").value = total;
	
	// Clear temp and operator
	document.getElementById("temp").value = "";
	document.getElementById("operator").value = "";
	
	// Disable buttons
	document.getElementById("equals").disabled = true;
	document.getElementById("dot").disabled = true;
	document.getElementById("add").disabled = true;
	document.getElementById("subtract").disabled = true;
	document.getElementById("multiply").disabled = true;
	document.getElementById("zero").disabled = true;
	document.getElementById("one").disabled = true;
	document.getElementById("two").disabled = true;
	document.getElementById("three").disabled = true;
	document.getElementById("four").disabled = true;
	document.getElementById("five").disabled = true;
	document.getElementById("six").disabled = true;
	document.getElementById("seven").disabled = true;
	document.getElementById("eight").disabled = true;
	document.getElementById("nine").disabled = true;
}

function login(){
	
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var error = document.getElementById("error");
	
	//Check that the user and password are not blank
	if(username.value.length === 0){
		error.innerHTML = "Please enter a user or email!";
		return false;
	}
	
	if(password.value.length === 0){
		error.innerHTML = "Please enter a password!";
		return false;
	}
	
	var realPassword = "abc123";
	if (password.value != realPassword){
		error.innerHTML = "Wrong password!";
		return false;
	}
	else{
		return true;
	}
}


// Paste this function in your script.js file 
function getParameterByName(name, url) { 
	if (!url) { 
		url = window.location.href; 
	} 
	name = name.replace(/[\[\]]/g, "\\$&"); 
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), 
		results = regex.exec(url); 
	if (!results) return null; 
	if (!results[2]) return ''; 
	return decodeURIComponent(results[2].replace(/\+/g, " ")); 
}

function loadHome(){
	var username = getParameterByName("username");
	//create a new <p> element to show the username
	var newP = document.createElement("p");
	newP.innerHTML = "Welcome, "  + username;
	//Add the new <p> to the logout bar
	var logoutBar = document.getElementById("logout-bar");
	logoutBar.appendChild(newP);
	
	//Create a logoout button
	var logoutButton = document.createElement("button");
	logoutButton.innerHTML = "Log Out";
	logoutButton.setAttribute("class", "form-button");
	logoutButton.setAttribute("onclick", "logout();");
	//<button class="form-button" onclick="logout();">Log out</button> 
	logoutBar.appendChild(logoutButton);
}

function addPosts() {
	var postText = document.getElementById("post").value;
	
	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;
	
	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);
	
	date = document.getElementById("date").innerHTML = Date();
	posts.appendChild(date);
}




function logout(){
	//Take me back to forms.html
	window.location = "forms.html";
}

//Exercise:
//1. Complete the blog posts
//2. Add date to blog post
//3. Add username to blog post

//Part 1: Automatically do something when page loads
function autoload(){
	//Write some text to the console
	console.log("Welcome");
	
	//Add some content to <div id="part1">
	//1. Get the div where you wamt tp add the content
	var part1Div = document.getElementById("part1");
	//2. Create new element(s) to put inside the <div>
	var newHeader = document.createElement("h3");
	var newParagraph = document.createElement("p");
	//3. Put some text in those new elements
	newHeader.innerHTML = "Part 1 - On Load";
	newParagraph.innerHTML = "Automatically do stuff!";
	//4. Add new elements to the <div>
	part1Div.appendChild(newHeader);
	part1Div.appendChild(newParagraph);
	part1Div.appendChild(document.createElement("hr"));
	
}


//Part 2: Add text from input
function addText(){
	//1. Get the input
	var input = document.getElementById("part2-input");
	//2. Get <div> where I want to add the text
	var div = document.getElementById("part2");
	
	
	var newParagraph = document.createElement("p");
	newParagraph.innerHTML = input.value;
	
	div.appendChild(newParagraph);
}


//Part 3: Change Style
function changeStyle(){
	var part3p = document.getElementById("part3-p");
	part3p.setAttribute("class", "new-style");
}

//Part 4: Change Style
function changeOG(){
	var part4p = document.getElementById("body");
	part4p.setAttribute("class", "new-OG");
}
function changeStyle1(){
	var part4p = document.getElementById("body");
	part4p.setAttribute("class", "new-Style1");
}
function changeStyle2(){
	var part4p = document.getElementById("body");
	part4p.setAttribute("class", "new-Style2");
}
function changeStyle3(){
	var part4p = document.getElementById("body");
	part4p.setAttribute("class", "new-Style3");
}

//Part 5: Add text from input
function addPicture(){
	var img = document.createElement("img");
	img.src ="img/box.jpg";
	document.getElementById("gamediv").appendChild(img);
}

//Image Gallery
function gallery1(){
	document.getElementById("images").src="img/apple.png"
}
function gallery2(){
	document.getElementById("images").src="img/Flash.png"
}
function gallery3(){
	document.getElementById("images").src="img/MCU.png"
}
function gallery4(){
	document.getElementById("images").src="img/SU.png"
}
function gallery5(){
	document.getElementById("images").src="img/USA.png"
}







