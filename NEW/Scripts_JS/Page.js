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

TimerCounter = 0
TimerT_F = false
function StartTimer(TimerNum,TSpeed){
TimerNum = TimerNum
x = setInterval(function () {
if(TimerCounter<TimerNum){
TimerCounter = TimerCounter+1
TimerT_F = false 
}else{
TimerCounter = 0
TimerT_F = true
TimerNum = 0
clearInterval(x)
}
},TSpeed)	
}
function StopTimer(){
clearInterval(x)
TimerCounter = 0
TimerNum = 0 
}

function onclick1() {
Right("THEITER",50)
NextPage()
Top("box1",36)
}

function onclick2() {
Right("THEITER",50)
NextPage()
Top("box2",36)
}

function onclick3() {
Right("THEITER",50)
NextPage()
Top("box3",36)
}

function onclick4() {
Right("THEITER",50)
NextPage()
Top("box4",36)
}

function onclick5() {
Right("THEITER",50)
NextPage()
Top("box5",36)
}

function onclick6() {
Right("THEITER",50)
NextPage()
Top("box6",36)
}

function onclick7() {
Right("THEITER",50)
NextPage()
Top("box7",36)
}

function onclick8() {
Right("THEITER",50)
NextPage()
Top("box8",36)
}

function onclick9() {
Right("THEITER",50)
NextPage()
Top("box9",36)
}

function onclick10() {
Right("THEITER",50)
NextPage()
Top("box10",36)
}

function onclick11() {
Right("THEITER",50)
NextPage()
Top("box11",36)
}

function onclick12() {
Right("THEITER",50)
NextPage()
Top("box12",36)
}

function onclick13() {
Right("THEITER",50)
NextPage()
Top("box13",36)
}

function onclick14() {
Right("THEITER",50)
NextPage()
Top("box14",36)
}

function onclick15() {
Right("THEITER",50)
NextPage()
Top("box15",36)
}

function onclick16() {
Right("THEITER",50)
NextPage()
Top("box16",36)
}

function Back1(){
Top("box1",-23)
BackPage()
StartTimer(4,300)
}
function Back2(){
Top("box2",-23)
BackPage()
StartTimer(4,300)
}
function Back3(){
Top("box3",-23)
BackPage()
StartTimer(4,300)
}
function Back4(){
Top("box4",-23)
BackPage()
StartTimer(4,300)
}
function Back5(){
Top("box5",-23)
BackPage()
StartTimer(4,300)
}
function Back6(){
Top("box6",-23)
BackPage()
StartTimer(4,300)
}
function Back7(){
Top("box7",-23)
BackPage()
StartTimer(4,300)
}
function Back8(){
Top("box8",-23)
BackPage()
StartTimer(6,300)
}

function Back9(){
Top("box9",-23)
BackPage()
StartTimer(6,300)
}

function Back10(){
Top("box10",-23)
BackPage()
StartTimer(6,300)
}

function Back11(){
Top("box11",-23)
BackPage()
StartTimer(6,300)
}

function Back12(){
Top("box12",-23)
BackPage()
StartTimer(6,300)
}

function Back13(){
Top("box13",-23)
BackPage()
StartTimer(6,300)
}

function Back14(){
Top("box14",-23)
BackPage()
StartTimer(6,300)
}

function Back15(){
Top("box15",-23)
BackPage()
StartTimer(6,300)
}

function Back16(){
Top("box16",-23)
BackPage()
StartTimer(6,300)
}

x = setInterval(function () {
if(TimerT_F == true){
Right("THEITER",150)
TimerT_F = false
}
},1000)

function next1() {

Right("Box1",109)
Opacity("Box1",0)
Right("Box9",81)
Opacity("Box9",100)

Right("Box2",109)
Opacity("Box2",0)
Right("Box10",60.8)
Opacity("Box10",100)

Right("Box3",109)
Opacity("Box3",0)
Right("Box11",40)
Opacity("Box11",100)

Right("Box4",109)
Opacity("Box4",0)
Right("Box12",19.8)
Opacity("Box12",100)

Right("Box5",109)
Opacity("Box5",0)
Right("Box13",81)
Opacity("Box13",100)

Right("Box6",109)
Opacity("Box6",0)
Right("Box14",60.8)
Opacity("Box14",100)

Right("Box7",109)
Opacity("Box7",0)
Right("Box15",40)
Opacity("Box15",100)

Right("Box8",109)
Opacity("Box8",0)
Right("Box16",19.8)
Opacity("Box16",100)

Right("Img1",109)
Right("Img9",81)

Right("Img2",109)
Right("Img10",60.8)

Right("Img3",109)
Right("Img11",39.9)

Right("Img4",109)
Right("Img12",19.8)

Right("Img5",109)
Right("Img13",81)

Right("Img6",109)
Right("Img14",60.8)

Right("Img7",109)
Right("Img15",39.9)

Right("Img8",109)
Right("Img16",19.8)

Right("Button1",109)
Right("Button9",81.2)

Right("Button2",109)
Right("Button10",61.2)

Right("Button3",109)
Right("Button11",39.5)

Right("Button4",109)
Right("Button12",19.8)

Right("Button5",109)
Right("Button13",81.5)

Right("Button6",109)
Right("Button14",60.5)

Right("Button7",109)
Right("Button15",39.5)

Right("Button8",109)
Right("Button16",19.5)

Right("Back1",94.5)
Opacity("Back1",100)
Right("Next1",-6.5)

}

function back1() {

Right("Box9",109)
Opacity("Box9",0)
Right("Box1",81)
Opacity("Box1",100)

Right("Box10",109)
Opacity("Box10",0)
Right("Box2",60.8)
Opacity("Box2",100)

Right("Box11",109)
Opacity("Box11",0)
Right("Box3",40)
Opacity("Box3",100)

Right("Box12",109)
Opacity("Box12",0)
Right("Box4",19.8)
Opacity("Box4",100)

Right("Box13",109)
Opacity("Box13",0)
Right("Box5",81)
Opacity("Box5",100)

Right("Box14",109)
Opacity("Box14",0)
Right("Box6",60.8)
Opacity("Box6",100)

Right("Box15",109)
Opacity("Box15",0)
Right("Box7",40)
Opacity("Box7",100)

Right("Box16",109)
Opacity("Box16",0)
Right("Box8",19.8)
Opacity("Box8",100)

Right("Img9",109)
Right("Img1",81)

Right("Img10",109)
Right("Img2",60.8)

Right("Img11",109)
Right("Img3",39.9)

Right("Img12",109)
Right("Img4",19.8)

Right("Img13",109)
Right("Img5",81)

Right("Img14",109)
Right("Img6",60.8)

Right("Img15",109)
Right("Img7",39.9)

Right("Img16",109)
Right("Img8",19.8)

Right("Button9",109)
Right("Button1",81.2)

Right("Button10",109)
Right("Button2",61.2)

Right("Button11",109)
Right("Button3",39.5)

Right("Button12",109)
Right("Button4",19.8)

Right("Button13",109)
Right("Button5",81.5)

Right("Button14",109)
Right("Button6",60.5)

Right("Button15",109)
Right("Button7",39.5)

Right("Button16",109)
Right("Button8",19.5)

Right("Back1",160)
Opacity("Back1",0)
Right("Next1",6.5)

}



