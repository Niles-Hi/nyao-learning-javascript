function moveMe(){
	//Get the oponent we wanna move
	var object = document.getElementById("animate");
	var posX = 0; //Initial x position
	var posY = 0; //Initial y position
	var object2 = document.getElementById("animate2");
	//Create an interval
	//setInterval(functionToCall, noMilliseconds)
	var timer = setInterval(move, 10);
	function move(){
		if(posY >= 350){
			posX = 0;
			posY = 0;
		}
		object.style.top = posY + "px";
		object.style.left = posX + "px";
		object.style.bottom = posY + "px";
		object.style.right = posX + "px";
		posX = posX + 1;
		posY = posY + 1;
	}
	
}

