function getInfo() {
	var password = document.getElementById('password').value

	
		if(password == "611124" || password == "621124") {
			console.log("Loging in...")
	

		
	document.getElementById('Thing').style.opacity = "0"	
	document.getElementById('password').style.right = "300%"
	document.getElementById('button').style.right = "300%"
			return
}

console.log("incorrect username or password")
}


function back() {
	document.getElementById('Thing').style.opacity = "0"	
	document.getElementById('password').style.right = "50%"
	document.getElementById('button').style.right = "50%"
}
