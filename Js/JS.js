I = 0
function NextPage(){
if(I>=0){
I=I+1
}
console.log(I)
}
function BackPage(){
if(I<0){
I=I-1
}
console.log(I)
}
function CustomPage(State,Num){
if(State.toString().toLowerCase()=="next"){
I=I+Num
console.log("Custom:"+I)
}
if(State.toString().toLowerCase()=="back"){
if(Num>=0){
I=I-Num
console.log("Custom:"+I)
}
if(Num<0){
I = 0	
console.log("Custom:"+I)
}
}
if(State.toString().toLowerCase()=="reload"){
if(Num>=0){
I=Num
console.log("Custom:"+I)
}
if(Num<0){
I = 0
console.log("Custom:"+I)
}
}
if(I<0){
I = 0
}
}
function Reload(){
I = 0
console.log(I)
}
function Page(){
console.log(I)
}





function Right(Index,Number){
document.getElementById(''+Index.toString()+'').style.right = ""+Number+"%"
}
function Left(Index,Number){
document.getElementById(''+Index.toString()+'').style.left = ""+Number+"%"
}
function Top(Index,Number){
document.getElementById(''+Index.toString()+'').style.top = ""+Number+"%"
}
function Bottom(Index,Number){
document.getElementById(''+Index.toString()+'').style.bottom = ""+Number+"%"
}
function Opacity(Index,Number) {
document.getElementById(''+Index.toString()+'').style.opacity = ""+Number+""
}
function PageLeft_To_Right(Index1,Index2,Left_Number1,Right_Number2,Opacity_Number1,Opacity_Number2) {
Left(Index1.toString(),Left_Number1)
Right(Index2.toString(),Right_Number2)
Opacity(Index1.toString(),Opacity_Number1)
Opacity(Index2.toString(),Opacity_Number2)
}
function PageRight_To_Left(Index1,Index2,Right_Number,Left_Number,Opacity_Number1,Opacity_Number2) {
Right(Index1.toString(),Right_Number)
Left(Index2.toString(),Left_Number)
Opacity(Index1.toString(),Opacity_Number1)
Opacity(Index2.toString(),Opacity_Number2)
}
function PageTop_To_Bottom(Index1,Index2,Top_Number,Bottom_Number,Opacity_Number1,Opacity_Number2) {
Top(Index1.toString(),Top_Number)
Bottom(Index2.toString(),Bottom_Number)
Opacity(Index1.toString(),Opacity_Number1)
Opacity(Index2.toString(),Opacity_Number2)
}
function PageBottom_To_Top(Index1,Index2,Bottom_Number,Top_Number,Opacity_Number1,Opacity_Number2) {
Bottom(Index1.toString(),Bottom_Number)
Top(Index2.toString(),Top_Number)
Opacity(Index1.toString(),Opacity_Number1)
Opacity(Index2.toString(),Opacity_Number2)
}


function getInfo() {
	var password = document.getElementById('password').value

	
		if(password == "611124" || password == "621124") {
			console.log("Loging in...")
	
NextPage()
PageTop_To_Bottom("D","Thing",50,-126,100,0) 
			return
}

console.log("incorrect username or password")
}


function onClick() {
NextPage()
PageLeft_To_Right("D","BOXThing",-126,50,0,100)
}