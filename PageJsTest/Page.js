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