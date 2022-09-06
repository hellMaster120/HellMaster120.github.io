
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
    //GetRepo()
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
    MaxParticles = Math.floor(height/10)
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



/*





document.
while()
  for (let index = 0; index < document.body.children.length; index++) {
    console.log(document.body.children[index])
    
  
  
  }


var Canvas = document.getElementsByTagName("canvas")[0]
Canvas.style.position = "absolute"
Canvas.style.overflow = "hidden"
Canvas.style.width = "99.9%"
Canvas.style.height = "99.9%"
console.log(Canvas)




  Cookies = Cookie.split(";")
  Cookies.forEach(Data=>{
    CookieData = Data.replace(" ","").split("=")
    CookieKey = CookieData[0]
    CookieVaule = CookieData[1]
    if(CookieKey == "CheckData"){
      console.log(CookieKey)
    }else{

    }
  })  


fetch(APIUrl+ReposUrl)
.then(Res => {Res.json()
  .then(Data =>{
    Data.forEach(File => {
      FileData["Test"] = "2"
    })
  })
})



          FileData[File.name] = {
          PushedData:File.pushed_at,
          CreatedData:File.created_at,
          ID:File.id,
          Name:File.name,
          Full_Name:File.full_name,
          Has_Pages:File.has_pages,
          Branch:File.default_branch,
          Visibility:File.visibility,
          Url:{
            Lang:RepoAPI+"/"+File_FullName+LangUrl,
            File:RepoAPI+"/"+File_FullName+FileUrl
          }
        }




function GetLangData(Url){
  var LangData = {}
  fetch(APIUrl+ReposUrl)
  .then((Response) => Response.json())
  .then((Data) => {
    Data.forEach(Lang => {
    
    })
  })
}
        
allow_forking: true
archive_url: "https://api.github.com/repos/hellMaster120/BaseController/{archive_format}{/ref}"
archived: false
assignees_url: "https://api.github.com/repos/hellMaster120/BaseController/assignees{/user}"
blobs_url: "https://api.github.com/repos/hellMaster120/BaseController/git/blobs{/sha}"
branches_url: "https://api.github.com/repos/hellMaster120/BaseController/branches{/branch}"
clone_url: "https://github.com/hellMaster120/BaseController.git"
collaborators_url: "https://api.github.com/repos/hellMaster120/BaseController/collaborators{/collaborator}"
comments_url: "https://api.github.com/repos/hellMaster120/BaseController/comments{/number}"
commits_url: "https://api.github.com/repos/hellMaster120/BaseController/commits{/sha}"
compare_url: "https://api.github.com/repos/hellMaster120/BaseController/compare/{base}...{head}"
contents_url: "https://api.github.com/repos/hellMaster120/BaseController/contents/{+path}"
contributors_url: "https://api.github.com/repos/hellMaster120/BaseController/contributors"
created_at: "2022-03-22T22:31:40Z"
default_branch: "main"
deployments_url: "https://api.github.com/repos/hellMaster120/BaseController/deployments"
description: null
disabled: false
downloads_url: "https://api.github.com/repos/hellMaster120/BaseController/downloads"
events_url: "https://api.github.com/repos/hellMaster120/BaseController/events"
fork: false
forks: 0
forks_count: 0
forks_url: "https://api.github.com/repos/hellMaster120/BaseController/forks"
full_name: "hellMaster120/BaseController"
git_commits_url: "https://api.github.com/repos/hellMaster120/BaseController/git/commits{/sha}"
git_refs_url: "https://api.github.com/repos/hellMaster120/BaseController/git/refs{/sha}"
git_tags_url: "https://api.github.com/repos/hellMaster120/BaseController/git/tags{/sha}"
git_url: "git://github.com/hellMaster120/BaseController.git"
has_downloads: true
has_issues: true
has_pages: false
has_projects: true
has_wiki: true
homepage: null
hooks_url: "https://api.github.com/repos/hellMaster120/BaseController/hooks"
html_url: "https://github.com/hellMaster120/BaseController"
id: 472958257
is_template: false
issue_comment_url: "https://api.github.com/repos/hellMaster120/BaseController/issues/comments{/number}"
issue_events_url: "https://api.github.com/repos/hellMaster120/BaseController/issues/events{/number}"
issues_url: "https://api.github.com/repos/hellMaster120/BaseController/issues{/number}"
keys_url: "https://api.github.com/repos/hellMaster120/BaseController/keys{/key_id}"
labels_url: "https://api.github.com/repos/hellMaster120/BaseController/labels{/name}"
language: "Lua"
languages_url: "https://api.github.com/repos/hellMaster120/BaseController/languages"
license: null
merges_url: "https://api.github.com/repos/hellMaster120/BaseController/merges"
milestones_url: "https://api.github.com/repos/hellMaster120/BaseController/milestones{/number}"
mirror_url: null
name: "BaseController"
node_id: "R_kgDOHDDFMQ"
notifications_url: "https://api.github.com/repos/hellMaster120/BaseController/notifications{?since,all,participating}"
open_issues: 0
open_issues_count: 0
owner: {login: 'hellMaster120', id: 51432361, node_id: 'MDQ6VXNlcjUxNDMyMzYx', avatar_url: 'https://avatars.githubusercontent.com/u/51432361?v=4', gravatar_id: '', …}
private: false
pulls_url: "https://api.github.com/repos/hellMaster120/BaseController/pulls{/number}"
pushed_at: "2022-03-24T05:26:30Z"
releases_url: "https://api.github.com/repos/hellMaster120/BaseController/releases{/id}"
size: 32
ssh_url: "git@github.com:hellMaster120/BaseController.git"
stargazers_count: 0
stargazers_url: "https://api.github.com/repos/hellMaster120/BaseController/stargazers"
statuses_url: "https://api.github.com/repos/hellMaster120/BaseController/statuses/{sha}"
subscribers_url: "https://api.github.com/repos/hellMaster120/BaseController/subscribers"
subscription_url: "https://api.github.com/repos/hellMaster120/BaseController/subscription"
svn_url: "https://github.com/hellMaster120/BaseController"
tags_url: "https://api.github.com/repos/hellMaster120/BaseController/tags"
teams_url: "https://api.github.com/repos/hellMaster120/BaseController/teams"
topics: []
trees_url: "https://api.github.com/repos/hellMaster120/BaseController/git/trees{/sha}"
updated_at: "2022-03-22T22:35:42Z"
url: "https://api.github.com/repos/hellMaster120/BaseController"
visibility: "public"
watchers: 0
watchers_count: 0
web_commit_signoff_required: false
*/