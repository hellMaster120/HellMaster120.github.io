const APIUrl = "https://api.github.com"
const RepoAPI = APIUrl+"/repos"
const ReposUrl = '/users/hellMaster120/repos'
const LangUrl = "/languages"
const FileUrl = "/contents"

var LocalStorage = window.localStorage
var Cookies;
var Cookie
var script = document.createElement('script');
var script2 = document.createElement('script');
var script = document.getElementsByTagName("head")[0];
var att = document.createAttribute("src");

let Particles = []
let ParticleAmount;
let ParticleAdd;
let MaxParticles;
let pP;
let ParticleMouses = [];
let I;
let II;
let FileData = {}


att.value = "https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js";
script2.setAttributeNode(att);
script.appendChild(script2);

function CheckNewData(){
  Cookie = document.cookie.replace(" ","").search("CheckData")
  if(Cookie == -1){
    const d = new Date();
    d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = "CheckData "+ "=" + ";" + expires + ";path=/";
    GetRepo()
  }
}

function GetLeng(Data,FileData){
  new Promise(resolve => {
    fetch(Data["Url"]["Lang"],{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method:"GET"
    }).then(response => {
      let Json = response.json().then(D =>{
        Data["Leng"] = D
        GetFiles(Data,FileData)
        resolve(Json);
      })
    }).catch(ErrorD => console.log("GetLeng:"+ErrorD))
  })
}

function GetFiles(Data,FileData){
  new Promise(resolve => {
    fetch(Data["Url"]["File"],{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method:"GET"
    }).then(response => {
      let Json = response.json().then(D =>{
        Data["Files"] = D
        HandelData(Data,FileData)
        resolve(Json);
      })
    }).catch(ErrorD => console.log("GetFiles:"+ErrorD))
  })
}

function HandelData(Data,FileData){
  LocalStorage.setItem("Data",JSON.stringify(FileData))
}

function GetRepo(){
  let JsonData = {}
  new Promise(resolve => {
    fetch(APIUrl+ReposUrl,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method:"GET"
    }).then(response => {
      let Json = response.json().then(Data =>{
      
        Data.forEach(File => {

          let Pushed = File.pushed_at
          let Created = File.created_at
          let ID = File.id
          let Name = File.name
          let FullName = File.full_name
          let Has_Pages = File.has_pages
          let Branch = File.default_branch
          let Visibility = File.visibility
          let Url = {
            Lang:RepoAPI+"/"+FullName+LangUrl,
            File:RepoAPI+"/"+FullName+FileUrl
          }
          JsonData[Name] = {
              Pushed:Pushed,    
              Created:Created,
              ID:ID,    
              Name:Name,
              FullName:FullName,    
              Has_Pages:Has_Pages,
              Branch:Branch,    
              Visibility:Visibility,
              Url:Url   
          }

          GetLeng(JsonData[Name],JsonData)
        });
        resolve(Json);
      });
      
    }).catch(ErrorD => console.log("GetRepo:"+ErrorD))

  })
}

FileData = JSON.parse(LocalStorage.getItem("Data"))

console.log(FileData)
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    MaxParticles = Math.floor(height/13)
    II = 0
    for(let i = 0;i<MaxParticles;i++){
        Particles.push(new Particle)  
    }
    pP = new Particle

}
setInterval(function(){
    if(II === 1){  
        II=0
    }
},3000)


function draw(){
    background(15)
    if(ParticleMouses.length==60){II = 1}
    if(mouseIsPressed){
        if(II==0){
        ParticleMouses.push(new particleMouse)
        }
    }
        
    Particles.forEach((P,index)=>{
        P.draw();
        P.update()
        P.lines(Particles.slice(index))
    })
    pP.mouseDraw()

    ParticleMouses.forEach((p,index)=>{
        p.draw()
        p.update()
        p.lines(ParticleMouses.slice(index))
    })

}

class Particle{
    constructor(){
        this.pos = createVector(random(20,width-20),random(20,height-20));
        this.size = random(10,20);
        this.SpeedY = random(1.9)
        this.SpeedX = random(1.9)
        this.vel = createVector(random(-this.SpeedY,this.SpeedY),random(-this.SpeedX,this.SpeedX))    
        this.ColorR = Math.floor(random(180,50));
        this.ColorG = Math.floor(random(0));
        this.ColorB = Math.floor(random(0))
    }
    update(){
        this.pos.add(this.vel)
        this.hitBox()
    }
    
    draw(){
        noStroke();
        fill("rgba(255,255,255,0)");
        circle(this.pos.x,this.pos.y,this.size);
    }
    mouseDraw(){
        noStroke();
        fill("rgba(255,255,255,0)");
        circle(mouseX,mouseY,this.size); 
    }
    hitBox(){
        if(this.pos.x < 10||this.pos.x > width-10){
            this.vel.x *= -1
        }
        if(this.pos.y < 10||this.pos.y > height-10){
            this.vel.y *= -1
        }
    
    
    }
    lines(Particles){
        Particles.forEach(Particle =>{
            let D = dist(this.pos.x,this.pos.y,Particle.pos.x,Particle.pos.y)
            let D1 = dist(mouseX,mouseY,Particle.pos.x,Particle.pos.y)

            if(D<190){
  
                stroke("rgb("+this.ColorR+","+this.ColorG+","+this.ColorB+")")
                line(this.pos.x,this.pos.y,Particle.pos.x,Particle.pos.y)
                
            }   


            if(D1<190){
                stroke("rgb("+this.ColorR+","+this.ColorG+","+this.ColorB+")")
                line(mouseX,mouseY,Particle.pos.x,Particle.pos.y)
            }
        })
    }
}

class particleMouse{
    constructor(){
        this.pos = createVector(mouseX,mouseY);
        this.size = random(10,20);
        this.SpeedY = random(1,4)
        this.SpeedX = random(1,4)
        this.vel = createVector(random(-this.SpeedY,this.SpeedY),random(-this.SpeedX,this.SpeedX))    
        this.ColorR = Math.floor(random(180,50));
        this.ColorG = Math.floor(random(0));
        this.ColorB = Math.floor(random(0))
    }
        
    update(){
        this.pos.add(this.vel)
        this.hitBox() 
    }
    draw(){
        noStroke();
        fill("rgba(255,255,255,0)");
        circle(this.pos.x,this.pos.y,this.size); 
    }
    hitBox(){
        if(this.pos.x < 10||this.pos.x > width-10){
            this.vel.x *= -1
        }
        if(this.pos.y < 10||this.pos.y > height-10){
            this.vel.y *= -1
        }
    }
    lines(Particles){
        ParticleMouses.forEach(Particle =>{
            let D = dist(this.pos.x,this.pos.y,Particle.pos.x,Particle.pos.y) 
            if(D<130){
                stroke("rgb("+this.ColorR+","+this.ColorG+","+this.ColorB+")")
                line(this.pos.x,this.pos.y,Particle.pos.x,Particle.pos.y)
            }

        })
        
    }
}

setInterval(function(){
    if(!mouseIsPressed){
        ParticleMouses.shift()
    }
},1000)
    

setInterval(CheckNewData,3000)
setTimeout(function(){
  for (let index = 0; index < document.body.children.length; index++) {
    var Children = document.body.children[index]
    var Class = Children.getAttribute("Class")
    if(Class == "p5Canvas"){
      Children.style.position = "absolute"
      Children.style.width = "99.9%"
      Children.style.height = "99.9%"
    }
  }
},300)
