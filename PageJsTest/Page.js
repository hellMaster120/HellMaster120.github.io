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
function PageLeft_To_Right(Index1,Index2,Left_Number1,Right_Number2,Opacity_Number3,Opacity_Number4,Page) {
Left(Index1.toString(),Left_Number1)
Right(Index2.toString(),Right_Number2)
Opacity(Index1.toString(),Opacity_Number1)
Opacity(Index2.toString(),Opacity_Number2)
console.log("Page "+Page)
}
function PageRight_To_Left(Index1,Index2,Right_Number,Left_Number,Opacity_Number1,Opacity_Number2,Page) {
Right(Index1.toString(),Right_Number)
Left(Index2.toString(),Left_Number)
Opacity(Index1.toString(),Opacity_Number1)
Opacity(Index2.toString(),Opacity_Number2)
console.log("Page "+Page)
}
function PageTop_To_Bottom(Index1,Index2,Top_Number,Bottom_Number,Opacity_Number1,Opacity_Number2,Page) {
Top(Index1.toString(),Top_Number)
Bottom(Index2.toString(),Bottom_Number)
Opacity(Index1.toString(),Opacity_Number1)
Opacity(Index2.toString(),Opacity_Number2)
console.log("Page "+Page)
}
function PageBottom_To_Top(Index1,Index2,Bottom_Number,Top_Number,Opacity_Number1,Opacity_Number2,Page) {
Bottom(Index1.toString(),Bottom_Number)
Top(Index2.toString(),Top_Number)
Opacity(Index1.toString(),Opacity_Number1)
Opacity(Index2.toString(),Opacity_Number2)
console.log("Page "+Page)
}