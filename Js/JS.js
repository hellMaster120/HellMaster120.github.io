var objPeople = [
	{
		username: "Dev",
		password: "Password99"
	}
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log("Loging in.....")
			window.location = "DivLongIn/MainSite"
			return
		}
	}
	console.log("incorrect username or password")
}