function getInfo() {
	var password = document.getElementById('password').value

	
		if(password == "611124" || password == "621124") {
			console.log("Loging in...")
	

	document.getElementById('D').style.opacity = "100"
	document.getElementById('D').style.top = "50%"
	document.getElementById('Thing').style.opacity = "0"	
	document.getElementById('Thing').style.top = "126%"
	
			return
}

console.log("incorrect username or password")
}


function back() {
	
	document.getElementById('D').style.opacity = "0"
	document.getElementById('D').style.top = "-70%"
	document.getElementById('Thing').style.opacity = "100"	
	document.getElementById('Thing').style.top = "50%"	

}
