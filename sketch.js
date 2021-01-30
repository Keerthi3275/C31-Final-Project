var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //console.log(height-divisionHeight/2);
  for (var x = 0; x <=width; x = x + 80)
  {
    divisions.push(new Divisions(x, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var x = 50; x <=width; x=x+50) 
  {
    plinkos.push(new Plinko(x,75));
  }
  for (var x = 50; x<=width-10; x=x+50) 
  {
    plinkos.push(new Plinko(x,175));
  }
  for (var x = 75; x <=width; x=x+50) 
  {
    plinkos.push(new Plinko(x,275));
  }
  for (var x = 50; x <=width-10; x=x+50) 
  {
    plinkos.push(new Plinko(x,375));
  }  
}
function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
   for (var i = 0; i < plinkos.length; i++) 
   {
     plinkos[i].display();
   }
   if(frameCount%60===0)
   {
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
  for (var i = 0; i < particles.length; i++) 
  {
   particles[i].display();
  }
   for (var i = 0; i < divisions.length; i++) 
   {
     divisions[i].display();
   }
}