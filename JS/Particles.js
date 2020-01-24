script=document.createElement('script');
script2=document.createElement('script');
var script = document.getElementsByTagName("head")[0];
var att = document.createAttribute("src");
att.value = "https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js";
script2.setAttributeNode(att);
script.appendChild(script2);
let Particles = []
let ParticleAmount;
let ParticleAdd;
let MaxParticles;
let pP;
let ParticleMouses = [];
let I;
let II;
function setup(){
createCanvas(window.innerWidth,window.innerHeight);
MaxParticles = Math.floor(height/6)
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
    background(0,0,0)
    console.log(II)
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
    this.SpeedY = 2
    this.SpeedX = 2
    this.vel = createVector(random(-this.SpeedY,this.SpeedY),random(-this.SpeedX,this.SpeedX))    

}
    update(){
        this.pos.add(this.vel)
        this.hitBox()
    }
    
    draw(){
        noStroke();
        fill("rgb(255,255,255)");
        circle(this.pos.x,this.pos.y,this.size);
    }
    mouseDraw(){
        noStroke();
        fill("rgb(255,255,255)");
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

            if(D<130){
                stroke("rgb(255,0,0)")
                line(this.pos.x,this.pos.y,Particle.pos.x,Particle.pos.y)
            }

            if(D1<200){
                stroke("rgb(255,0,0)")
                line(mouseX,mouseY,Particle.pos.x,Particle.pos.y)
            }
        })
    }
    }




    class particleMouse{
        constructor(){
            this.pos = createVector(mouseX,mouseY);
            this.size = random(10,20);
            this.SpeedY = 2
            this.SpeedX = 2
            this.vel = createVector(random(-this.SpeedY,this.SpeedY),random(-this.SpeedX,this.SpeedX))    
        
        }
        
        update(){
            this.pos.add(this.vel)
            this.hitBox() 
        }
        draw(){

        
            noStroke();
            fill("rgb(255,255,255)");
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
                    stroke("rgb(255,0,0)")
                    line(this.pos.x,this.pos.y,Particle.pos.x,Particle.pos.y)
                }

            })
        }
    }


    function clean(){
        if(!mouseIsPressed){
        
            ParticleMouses.shift()

    }
    }
    
    setInterval(clean,1000)
    